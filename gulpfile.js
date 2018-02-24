// Note: you don't have to use 'var' on the 'watch' variable. Just type it out and separate both variables with a comma!
var gulp = require('gulp'),
watch = require('gulp-watch'); // example var watch.

//notice gulp default!
gulp.task('default', function(){
	console.log("You created a gulp task!");
});

//notice gulp html you are setting up tasks for gulp doing this and it will watch them until you stop them!
gulp.task('html', function(){
	console.log("Imagine something useful being done to your html here!");
});

gulp.task('styles', function(){
	console.log("Imagine Sass or PostCSS running here!");
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});