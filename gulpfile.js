var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var stylelint 	= require('gulp-stylelint');
var package     = require('./package.json');

/*

  ## gulp serve

  1. Run the BrowserSync server at http://localhost:9999
  2. Compile .scss and inject into browser
  3. Live-reload .html

*/

gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./",
        port: 9999,
        open: false
    });

    gulp.watch("./scss/**/*.scss", ['styles']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});

/*

  ## gulp styles

  1. Lint scss and log errors to console
  2. Compile sass
  3. Add minified, versioned(TODO) file to /dist folder
  4. Inject into browser with BrowserSync

*/

gulp.task('styles', function () {
  return gulp.src('./scss/*.scss')
    .pipe(stylelint({
    	failAfterError: false,
      	reporters: [{formatter: 'string', console: true}]
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

/*

  ## gulp

  The default gulp task will run the server which watches,
  compiles and updates HTML and SCSS.

*/

gulp.task('default', ['serve']);
