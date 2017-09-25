var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var sass = require("gulp-sass");
var nodemon = require('gulp-nodemon');

var paths = {
	jsSource: ['public/src/**/*.js'],
	sassSource: ['public/**/*.sass'], // Change sass to scss if you want to work with it instead.
	indexSource: ['public/**/*.html', 'public/**/*.css'],
	imageSource: ['public/images/**.*'],
	server: 'server/index.js'
};

gulp.task('serve', function() {
	nodemon({
		'script': paths.server
	});
});

gulp.task('sass', function() {
	gulp.src(paths.sassSource)
		.pipe(sass())
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
	gulp.src(paths.jsSource)
		.pipe(annotate())
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('index', function() {
	gulp.src(paths.indexSource)
		.pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
	gulp.src(paths.imageSource)
		.pipe(gulp.dest('./dist/images'));
});

gulp.task('build', ['js', 'sass', 'index', 'images']);

gulp.task('watch', function() {
	gulp.watch(paths.jsSource, ['js']);
	gulp.watch(paths.sassSource, ['sass']);
	gulp.watch(paths.indexSource, ['index']);
});

gulp.task('default', ['build', 'watch']);
gulp.task('dev', ['build', 'watch', 'serve']);