var   	gulp = 		require('gulp'),
		browserSync = require('browser-sync').create(),
		less = 		require("gulp-less"),
      	notify = 	require('gulp-notify'),
      	plumber = 	require('gulp-plumber'),
      	pug = 		require('gulp-pug');

gulp.task("server", ['less','pug'],function () {
	browserSync.init({
		server: { baseDir: './docs' }
	});
      gulp.watch('**/*.html').on('change', browserSync.reload);
	gulp.watch('js/**/*.js').on('change', browserSync.reload);
      gulp.watch('less/**/*.less', ['less'] );
      gulp.watch('pug/**/*.pug', ['pug'] );
});



gulp.task('pug', () => {
    return gulp.src('./pug/*.pug')
      .pipe(plumber({
            errorHandler: notify.onError(function(err){
                  return {
                        title: 'Pug',
                        message: err.message
                  }
            })
      }))
      .pipe(pug({
            pretty: true
      }))
      .pipe(gulp.dest('./docs'))
      .pipe(browserSync.stream());
});

gulp.task('less', () => {
    return gulp.src('./less/**/main.less')
      .pipe(plumber({
            errorHandler: notify.onError(function(err){
                  return {
                        title: 'Styles',
                        message: err.message
                  }
            })
      }))
      .pipe(less())
      .pipe(gulp.dest('./docs/css'))
      .pipe(browserSync.stream());
});

gulp.task('default', ["server"]);