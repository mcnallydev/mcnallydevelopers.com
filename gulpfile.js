// npm i --save gulp gulp-concat gulp-rename gulp-uglify gulp-clean-css del
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var jsFiles = [
    'vendor/javascripts/material.min.js'
  ],
  jsDest = 'app/assets/javascripts';

var cssFiles = [
  'vendor/stylesheets/animate.css',
  'vendor/stylesheets/styles.css',
  'vendor/stylesheets/custom.css'
];
cssDest = 'app/assets/stylesheets';

// javascripts
gulp.task('build:javascripts', function () {
  return gulp.src(jsFiles)
    .pipe(concat('application.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

// stylesheets
gulp.task('build:stylesheets', function () {
  return gulp.src(cssFiles)
    .pipe(concat('application.css'))
    .pipe(gulp.dest(cssDest))
    .pipe(rename('application.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(cssDest));
});

// clean
gulp.task('build:clean', function () {
  return del([
    'app/assets/stylesheets/application.css',
    'app/assets/javascripts/application.js'
  ]);
});

gulp.task('default', [
  'build:javascripts',
  'build:stylesheets',
  'build:clean'
]);