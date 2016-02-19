'use strict';

var gulp = 			require('gulp');
var paths = 		require('../config');

// Watch tasks
gulp.task('watch', function(){

	// For every app change, reload js and scss
	gulp.watch(paths.js.files,		['scripts']);
	gulp.watch(paths.scss.files,	['styles']);
});