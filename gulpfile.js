// gulp ===================
// used for build managemnt, css pre-processing, browser reloads, etc.
var gulp 		     = require('gulp');
var sass 		     = require('gulp-sass');
var jshint       = require('gulp-jshint');
var browserSync  = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var karma        = require('karma').Server;
var inject       = require('gulp-inject');
var angularfs    = require('gulp-angular-filesort')

gulp.task('default', ['css','test']); // run gulp in terminal to automate
gulp.task('start', ['init','css','watch']); // run gulp in terminal to automate

gulp.task('css', function() { // task to compile scss to css
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('jshint', function() { // task to generate output from code analysis
  return gulp.src([
      'app/js/**/*.js',
      '*.js'
      ])
			.pipe(jshint())
			.pipe(jshint.reporter('gulp-jshint-html-reporter', {
			  filename: __dirname + '/jshint/output.html',
			  createMissingFolders : true  
			}));
});

gulp.task('init', function() { // task to initialize browser
  browserSync.init({
    server: {
      baseDir: './app'
    },
  });
});

gulp.task('reload', function() { // task to reload browser
  browserSync.reload();
});

gulp.task('test', function(){ // task to load karma/jasmine and run specs
  new karma({
    configFile: __dirname + '/config/karma.conf.js',
    singleRun: true
  }).start();
});

gulp.task('inject', function(){ // task to read css and lib directories, add css/js import statements to html pages
  return gulp.src('./app/index.html')
           .pipe(inject(
               gulp.src([
                  './app/js/**/*.js',
                  './app/services/**/*.js',
                  './app/lib/**/*min.js',
                  '!./app/js/models/*.js'
                ]).pipe(angularfs(),{read: false}), {relative: true}))
           .pipe(gulp.dest('./app'))
           .pipe(inject(
               gulp.src([
                  './app/css/**/*.css',
                  './app/lib/**/*min.css',
                  '!'
                ]), {relative: true}))
           .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() { // task to run styles task on file change
    gulp.watch('scss/**/*.scss',['css','reload']);
    gulp.watch([
      'app/**/*.html',
      'app/js/*.js'],
    ['reload']);
    gulp.watch('test/**/*.js', ['test']);
});

module.exports = gulp;