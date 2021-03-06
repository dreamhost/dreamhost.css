var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS    = require('gulp-clean-css');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');

var dist = {
	fileName: 'dreamhost',
	path: './dist/'
};

/*
	## gulp serve
	1. Run the BrowserSync server at http://localhost:9999
	2. Compile .scss and inject into browser
	3. Live-reload .html
*/

function serve() {
	browserSync.init({
		server: "./",
		port: 9999,
		open: false
	});

	gulp.watch("./src/js/*.js", js);
	gulp.watch("./src/scss/**/*.scss", styles);
	gulp.watch("./**/*.html").on('change', browserSync.reload);
}

exports.serve = serve;

/*
	## gulp styles
	1. Compile sass
	2. Add minified, versioned(TODO) file to /dist folder
	3. Inject into browser with BrowserSync
*/

function styles() {
	return gulp.src('./src/scss/*.scss')
	.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
	.pipe(gulp.dest('./src/css/'))
	.pipe(browserSync.stream());
}

exports.styles = styles;

/*
	## gulp js
	Compile js for distribution. Use version from package.json.
	Place the following files in /dist/:
	1. main.js
*/

function js() {
	return gulp.src('./src/js/*.js')
	.pipe(browserSync.reload({stream: true}))
}

exports.js = js;

function jsDist() {
	return gulp.src('./src/js/*.js')
		.pipe(concat(dist.fileName + '.js'))
		.pipe(gulp.dest(dist.path + 'js'))
		.pipe(uglify())
		.pipe(rename(dist.fileName + '.min.js'))
		.pipe(gulp.dest(dist.path + 'js'))
}

exports.jsDist = jsDist;

function cssDist() {
	return gulp.src('./src/scss/*.scss')
		.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
		.pipe(prefix({browsers: ['last 4 versions']}))
		.pipe(rename(dist.fileName + '.css'))
		.pipe(gulp.dest(dist.path + 'css'))
		.pipe(cleanCSS())
		.pipe(rename(dist.fileName + '.min.css'))
		.pipe(gulp.dest(dist.path + 'css'))
}

exports.cssDist = cssDist;

/*
	## gulp dist
	Compile css for distribution. Use version from package.json.
	Place the following files in /dist/:
	1. dreamhost.[version].css
	2. dreamhost.[version].min.css
*/

gulp.task('dist', gulp.series(jsDist, cssDist));

// gulp.task('dist', ['css-dist', 'js-dist'], function() {
// 	return; // This just runs css-dist and js-dist
// })

/*
	## gulp
	The default gulp task will run the server which watches,
	compiles and updates HTML and SCSS.
*/
var build = gulp.parallel(styles, js, serve);
gulp.task('default', build);
