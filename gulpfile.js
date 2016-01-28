
var gulp =    		require('gulp'),
    uglify =  		require('gulp-uglify'),
    concat = 		require('gulp-concat'),
	compass = 		require('gulp-compass'),
	plumber = 		require('gulp-plumber'),
    livereload = 	require('gulp-livereload');


// Define default task for gulp
gulp.task('default',['scripts', 'styles', 'watch']);


// Minify and concat angular app
gulp.task('scripts', function() {

	// log
	console.log('Working on scripts');


	gulp.src('src/App/**/*.js')				// Get all file in the folder App
		.pipe(concat('app.js'))				// Concat all file in once
		//.pipe(uglify())						// Minify the code
		.pipe(gulp.dest('src/assets/js'))	// Put file into js folder
		.pipe(livereload());				// Reload page
});

// Convert, minify and concat scss/css
gulp.task('styles', function() {
  
	// log
	console.log('Working on scripts');


	gulp.src('src/assets/scss/**/*.scss')                                     // File da esaminare
		.pipe(plumber())                                          // Controllo errori
		.pipe(compass({
			config_file: 'config.rb',                               // Leggo config.rb per compressione
			css: 'src/assets/css',                                        // Path CSS
			sass: 'src/assets/scss',                                      // Path SASS
			sourcemap: true
		}))
		.pipe(gulp.dest('src/assets/css'));						  // Salvo in scss dest
});

// Watch tasks
gulp.task('watch', function(){

	// Listen for livereload
	var server = livereload.listen();

	// For every app change, reload js and refresh page
	gulp.watch('src/App/**/*.js', ['scripts']);
});