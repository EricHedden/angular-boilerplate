'use strict';

var gulp =		require('gulp');
var paths =		require('../config');
var	plumber =	require('gulp-plumber');
var	compass =	require('gulp-compass');

// Convert, minify and concat scss/css
gulp.task('styles', function() {

	gulp.src(paths.scss.files)                                     // File da esaminare
		.pipe(plumber())                                          // Controllo errori
		.pipe(compass({

			config_file:	paths.scss.config,                               // Leggo config.rb per compressione
			css: 			paths.scss.folder.css,                                        // Path CSS
			sass: 			paths.scss.folder.scss,                                      // Path SASS
			sourcemap: 		true
		}))
		.pipe(gulp.dest(paths.scss.folder.css));						  // Salvo in scss dest
});