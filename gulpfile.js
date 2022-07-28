const gulp = require('gulp')
const html_min = require('gulp-htmlmin')
const css_min = require('gulp-cssmin')
const terser = require('gulp-jsmin')
const img_min = require('gulp-imagemin')

function html () {
    return gulp.src('index.html')
        .pipe(html_min({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));
}

function css () {
    return gulp.src('css/main.css')
        .pipe(css_min())
        .pipe(gulp.dest('build/css'));
}

function js () {
    return gulp.src('js/*.js')
        .pipe(terser())
        .pipe(gulp.dest('build/js'));
}

function image () {
    return gulp.src('images/*')
        .pipe(img_min())
        .pipe(gulp.dest('build/images'));
}
 
exports.html = html
exports.css = css
exports.js = js
exports.image = image