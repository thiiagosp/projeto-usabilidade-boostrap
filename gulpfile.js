'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function () {
     return gulp.src('./assets/sass/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('./assets/css'));
});

//Watch task
gulp.task('watch',function() {
     gulp.watch('./assets/sass/*.scss',['sass']);
});
