//referencia gulp
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    strip = require('gulp-strip-debug');

var files = [
    "assets/js/app.js",
    "assets/js/controllers.js",
    "assets/js/controllers/*.js",
    "assets/js/service.js"
];

gulp.task('concatenar', function () {
    gulp.src(files)
    .pipe(strip())
    .pipe(uglify({mangle:false}))
    .pipe(concat('dist.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('dev', function () {
    gulp.src(files)
    //.pipe(strip())
    //.pipe(uglify({ mangle: false }))
    .pipe(concat('dist.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('default', function () {
    gulp.start('dev');
    //Aqui viene lo que hace la tarea
    gulp.watch(files, function () {
        gulp.start('dev');
    });
});

gulp.task('prod', function () {
    //Aqui viene lo que hace la tarea
    gulp.watch(files, function () {
        gulp.start('concatenar');
    });
});