var gulpSlash = require('gulp-slash'); //处理windows和unix文件夹斜杠

var gulp = require('gulp');
var rename = require('gulp-rename');
var chalk = require('chalk'); //美化日志
var plumber = require("gulp-plumber");
var stylish = require("jshint-stylish");
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');


// 设置相关路径
var paths = {
    js: 'src/js/**/*.js', //js文件相关目录
    des: 'assets/js'
};

gulp.task('scripts', function(cb) {
    gulp.src(paths.js)
        .pipe(gulpSlash())
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(eslint({
            rules: {
                'strict': 2
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(gulp.dest(paths.des))
    cb()
});
