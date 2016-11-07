var gulp = require('gulp'),
	less = require('gulp-less'),
	tip = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	html2js = require('./index')
    
gulp.task('html2js', function(){
    return gulp.src('templates/**/*.html')
        .pipe(html2js())
})

gulp.task('watch', ['html2js'], function(){
    gulp.watch('templates/**/*.html', ['html2js'])
})


gulp.task('LessToCcss', function(){
	gulp.src('style/**/*.less')
	    .pipe(plumber({errorHandle:tip.onError('error:<%=error.message%>')}))
	    .pipe(less())
 	    .pipe(gulp.dest('style/'))

})
gulp.task('watchLess', function () {
	gulp.watch('style/**/*.less',['LessToCcss'])
})


gulp.task('html2js', function(){
    return gulp.src('templates/**/*.html')
    	.pipe(plumber({errorHandle:tip.onError('error:<%=error.message%>')}))
        .pipe(html2js())
})

gulp.task('watch', ['html2js'], function(){
    gulp.watch('templates/**/*.html', ['html2js'])
})

gulp.task('default',['watch','watchLess'])
