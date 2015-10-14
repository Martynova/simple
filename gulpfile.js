var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');// объединяет
var notify = require("gulp-notify");
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('default', [
    'watch',
   'connect'
]);

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['sass', 'concat']);
    gulp.watch('js/*.js', ['js']);
    gulp.watch('./*html', ['html']);
});

var assets = {
    css : [
        './dist/bootstrap.min.css',
        './dist/main.css'
    ],
    js: [
        './js/jquery-1.11.3.js',
        './js/one.js',
        './js/two.js',
        './js/three.js'
    ]
};

gulp.task('js', function(){
    gulp.src(assets.js)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
        .pipe(notify('JavaScript готов'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('sass', function () {
    gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(notify('css тоже готов'))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});


gulp.task('html', function(){
    gulp.src('./*.html')
        .pipe(notify('html тоже готов'))
        .pipe(connect.reload());
});


gulp.task('concat', function() {
    gulp.src('./css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/'));
});