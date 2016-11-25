var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var markdown = require('gulp-markdown');
var reveal = require('gulp-reveal');
var sass = require('gulp-sass');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', function () {
  gulp.src('index.md')
    .pipe(markdown())
    .pipe(reveal())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
  gulp.watch('**/*.md', ['default', 'reload']);
});

gulp.task('sass', function () {
    return gulp.src('css/theme/source/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/theme'));
});

gulp.task('sass-reveal', function () {
  return gulp.src('css/reveal.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('reload', ['sass', 'sass-reveal'], function() {
    browserSync.reload();
});

gulp.task('sass:watch', function () {
  gulp.watch(['css/theme/source/*.scss', 'css/reveal.scss'], ['sass', 'sass-reveal', 'reload']);
});
