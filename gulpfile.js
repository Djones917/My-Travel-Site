// Note: you don't have to use 'var' on the 'watch' variable. Just type it out and separate both variables with a comma!
// Remember you have to add these packages with npm and gulp!
var gulp = require('gulp'),
watch = require('gulp-watch'), // example var watch.
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');


//notice gulp default!
gulp.task('default', function(){
	console.log("You created a gulp task!");
});

//notice gulp html you are setting up tasks for gulp doing this and it will watch them until you stop them!
gulp.task('html', function(){
	console.log("Imagine something useful being done to your html here!");
});

//cssImport should be at the beginning!
gulp.task('styles', function(){
	//console.log("Imagine Sass or PostCSS running here!");
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});