var assets = require('gulp-bundle-assets-append');
module.exports = {
  bundle: {
    main: {
      scripts: [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/semantic/dist/semantic.js',
        './bower_components/react/react.js',
        './bower_components/react/react-dom.js',
        './bower_components/react-router/index.js'
      ],
      styles: [
        './bower_components/semantic/dist/semantic.min.css'
      ],
      options: {
        uglify: ['production'],
        minCSS: ['production'],
        rev: ['production'],
        maps: process.env.NODE_ENV != 'production',
        transforms: {
          styles: assets.append
        },
        result: {
          type: {
            scripts: 'plain',
            styles: 'plain'
          }
        },
        pluginOptions: {
          'gulp-minify-css': {
            processImport: false
          }
        }
      }
    }
  }
};
