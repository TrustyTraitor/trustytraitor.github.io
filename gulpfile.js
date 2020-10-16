// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb) {
  gulp
    .src('src/scss/*.scss')
    .pipe(sass())
    .pipe(
      gulp.dest("src/css")
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
    cb();
  })
);