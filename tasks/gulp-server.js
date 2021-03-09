const gulp = require('gulp');

const config = require('../gulp-config.js');
const browserSync = require('browser-sync').create();

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');


module.exports = {
    server: (cb) => {
        browserSync.init(config.serverConfig);
        cb();
    },
    reload: (cb) => {
        browserSync.reload();
        cb();
    },
    customCSS: () => {
        return gulp
            .src(config.cssCustomFiles, {allowEmpty: true})
            .pipe(sassGlob())
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(gulp.dest(config.cssDestination))
            .pipe(browserSync.stream());
    }
}