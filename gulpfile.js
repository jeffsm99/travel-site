var gulp = require('gulp'),
	watch = require('gulp-watch'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	postcss = require('gulp-postcss');

gulp.task('default', function() {
	console.log("created a gulp task");
});

gulp.task('html', function() {
	console.log("html - imagine something useful here...");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});

});


