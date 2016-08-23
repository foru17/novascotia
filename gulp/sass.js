
//引入 gulp
var gulpSlash = require('gulp-slash'); //处理windows和unix文件夹斜杠
var gulp = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require("gulp-plumber");
var csscomb = require('gulp-csscomb');

// 设置相关路径
var paths = {
    sass: 'src/css/**.scss',
    css: 'assets/css'
};

// sass task
gulp.task('sass', function(cb) {
    //对scss文件进行编译
    gulp.src(paths.sass)
        .pipe(gulpSlash())
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(csscomb())
        .pipe(sourcemaps.write({
            sourceRoot: paths.sass
        }))
        .pipe(gulp.dest(paths.css))
        cb()
});
