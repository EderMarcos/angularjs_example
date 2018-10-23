const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

const scripts = require('./scripts');
const styles = require('./styles');

let devMode = false;

gulp.task('css', () => {
  gulp.src(styles)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', () => {
  gulp.src(scripts)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', () => {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('build', () => {
  gulp.start(['css', 'js', 'html']);
});

gulp.task('browser-sync', () => {
  browserSync.init(null, {
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('start', () => {
  devMode = true;
  gulp.start(['build', 'browser-sync']);
  gulp.watch(['./app/styles/**/*.css'], ['css']);
  gulp.watch(['./app/scripts/**/*.js'], ['js']);
  gulp.watch(['./app/**/*.html'], ['html']);
});
