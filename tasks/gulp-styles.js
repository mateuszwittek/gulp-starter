const gulp = require('gulp');
const config = require('../gulp-config');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const browserSync = require('./gulp-server').browserSync; // instance of browserSync exported from gulp-server, required for immediately CSS injection
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');

module.exports = {
    customCSS: () => {
        return gulp
            .src(config.cssCustomFiles, {allowEmpty: true})
            .pipe(sassGlob())
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(autoprefixer(config.browserList))
            .pipe(gulp.dest(config.cssDestination))
            .pipe(browserSync.stream())
            .pipe(rename({ suffix: '.min' }))
            .pipe(cleanCSS())
            .pipe(gulp.dest(config.cssDestination))
            .pipe(browserSync.stream())

    }
}