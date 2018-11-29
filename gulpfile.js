'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'chrome >= 34'
];

// Gulp task to minify CSS files
gulp.task('css', function () {
  return gulp.src('./sass/*.scss')
    // Compile SASS files
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    //Output - save as .css
    .pipe(gulp.dest('./prod/style/'))
});

// default gulp task
gulp.task('watch', function () {

  //watch and update files automatically
  gulp.watch(['./sass/*.scss'], gulp.series('css'));
});
