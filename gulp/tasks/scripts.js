'use strict';

var gulp = 		require('gulp');
var paths =		require('../config');
var uglify = 	require('gulp-uglify');
var concat = 	require('gulp-concat');

// Minify and concat angular app
gulp.task('scripts', function() {

	gulp.src([

			paths.js.modules,					// Get all modules into the App folder
			paths.js.files						// Get all the other files into the App folder
		])										
		.pipe(concat(paths.js.bundle))			// Concat all file in once
		//.pipe(uglify())						// Minify the code
		.pipe(gulp.dest(paths.js.folder.dest));	// Put file into js folder
});