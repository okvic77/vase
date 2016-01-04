"use strict";

let public_env = process.env.NODE_ENV == 'production';

var gulp = require('gulp'),
  fs = require('fs'),
  _ = require('underscore');
var bundle = require('gulp-bundle-assets'),
  assets = require('gulp-bundle-assets-append');

var webpack = require('webpack-stream'),
  named = require('vinyl-named');

gulp.task('bundle', function() {
  return gulp.src('bundle.js')
    .pipe(bundle())
    .pipe(assets.addMissingAssets())
    .pipe(bundle.results({
      dest: './app',
      fileName: 'assets'
    }))
    .pipe(gulp.dest('./app/public'));
});

gulp.task('webpack', function() {
  var plugins = [
    new webpack.webpack.DefinePlugin({
      DEBUG: !public_env
    }),
    function() {
      this.plugin("done", function(stats) {
        var assets = stats.toJson().assetsByChunkName,
          manifiesto = {};
        _.each(assets, function(el, name) {
          if (_.isArray(el)) manifiesto[name] = el[0];
          else if (_.isString(el)) manifiesto[name] = el;
        });
        fs.writeFileSync('app/webpack.json', JSON.stringify(manifiesto, null, 1));
      });
    }
  ];

  if (public_env) plugins.push(new webpack.webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));

  return gulp.src('workspace/**/*.js')
    .pipe(named())
    .pipe(webpack({
      devtool: !public_env ? 'source-map' : null,
      plugins: plugins,
      resolve: {
        modulesDirectories: ['web_modules', 'workspace']
      },
      output: {
        filename: (public_env) ? "[name].[hash].js" : "[name].js",
      },
    }))
    .pipe(gulp.dest('app/public'));
});

gulp.task('build', ['webpack', 'bundle']);
