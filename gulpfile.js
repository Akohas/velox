var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

  gulp.task('sass',function(){
    gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
  });

gulp.task('watch', function () {
  gulp.watch(['./sass/*.scss'], ['sass']);
  gulp.watch(['./html/*.html'], ['html']);
});

gulp.task('html', function () {
  gulp.src('./html/*.html')
    .pipe(connect.reload());
});


gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 1008,
    livereload: true
  });
});

gulp.task('default', ['sass','connect','watch']);