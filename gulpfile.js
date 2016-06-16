// gulp ===================
// used for build managemnt, css pre-processing, browser reloads, etc.
// paths are declared from the current directory
var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var karma = require('karma').Server;
var inject = require('gulp-inject');
var beautify = require('gulp-jsbeautifier');
var stylish = require('jshint-stylish');
var protractor = require('gulp-protractor').protractor;

var defaultTasks = ['format', 'unit', 'jshint'];

gulp.task('ci', ['unit', 'jshint']);
gulp.task('default', defaultTasks); // run gulp in terminal to automate
gulp.task('start', defaultTasks); // run gulp in terminal to automate
gulp.task('test', ['unit', 'e2e']);

gulp.task('css', function() { // task to compile scss to css
    gulp.src('client/src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('client/src/scss'));
});

gulp.task('jshint', function() { // task to generate output from code analysis
    return gulp.src([
            'client/src/**/*.js',
            'client/test/**/*.js',
            'server/**/*.js',
            'server/**/*.json',
            '*.js',
            '*.json'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
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

gulp.task('unit', function() { // task to load karma/jasmine and run specs
    new karma({
        configFile: __dirname + '/client/test/karma.conf.js',
        singleRun: true
    }).start();
});

gulp.task('e2e', function() { // task to load karma/jasmine and run specs
    gulp.src([])
        .pipe(protractor({
            configFile: __dirname + '/client/test/protractor.conf.js'
        })).on('error', function(e) {
            throw e;
        });
});

gulp.task('inject', function() { // task to read css and lib directories, add css/js import statements to html pages
    return gulp.src('client/src/index.html')
        .pipe(inject(
            gulp.src([
                'client/src/**/*.js',
                'client/lib/**/*min.js'
            ]), {
                relative: false
            }))
        .pipe(gulp.dest('client/src'))
        .pipe(inject(
            gulp.src([
                'client/src/scss/**/*.css',
                'client/lib/**/*min.css'
            ]), {
                relative: false
            }))
        .pipe(gulp.dest('client/src'));
});

gulp.task('watch', function() { // task to run styles task on file change
    gulp.watch('client/src/scss/*.scss', ['css', 'reload']);
    gulp.watch([
        'client/src/**/*.html',
        'client/src/**/*.js'
    ], ['reload']);
    gulp.watch([
        'client/src/**/*.js'
    ], ['test']);
});

gulp.task('format', function() {
    gulp.src([
            'client/src/**/*.js',
            'client/test/**/*.js',
            'client/src/**/*.html',
            'client/src/scss/**/*.css',
            'client/src/scss/**/*.scss',
            'server/**/*.json',
            'server/**/*.js',
            '*.js'
        ], {
            base: './'
        })
        .pipe(beautify())
        // to view output, add: .pipe(beautify.reporter())
        .pipe(gulp.dest('./'));
});

module.exports = gulp;