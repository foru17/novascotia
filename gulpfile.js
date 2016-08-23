/**
 * 简单的构建工具脚手架
 */

var gulpSlash = require('gulp-slash'); //处理windows和unix文件夹斜杠

var gulp = require('gulp');
var requireDir = require('require-dir');
var plumber = require("gulp-plumber"); // 错误处理
var chalk = require('chalk'); // 美化日志

var paths = {
    assets: 'assets',
    sass: './src/css/**/*.scss',
    js: './src/js/**/*' //js文件相关目录
};

requireDir('./gulp');

gulp.task('watch', function() {
    console.log(chalk.green('[监听] 启动gulp watch自动编译'))
     gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['scripts']);

});
