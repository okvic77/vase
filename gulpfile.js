var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets'),
  assets = require('gulp-bundle-assets-append');

gulp.task('bundle', function() {
  return gulp.src('bundle.js')
    .pipe(bundle())
    .pipe(assets.addMissingAssets())
    .pipe(bundle.results({
      dest: './app/public',
      fileName: 'assets'
    }))
    .pipe(gulp.dest('./public'));
});
