const gulp = require('gulp');
const templatecache = require('gulp-angular-templatecache');

gulp.task('bundle-tpls', () => {
  gulp
    .src('./src/**/*.html')
    .pipe(
      templatecache({
        module: 'hybrid',
      })
    )
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['bundle-tpls'], () => {
  gulp.watch('./src/**/*.html', ['bundle-tpls']);
});
