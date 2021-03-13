const gulp = require('gulp');
const config = require('../gulp-config');

const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const change = require('gulp-change');
const merge = require('merge-stream');

function performChange(content) {
    return content.replace('custom.css', 'custom.min.css');
}

module.exports = {
    moveMain: () => {
        const moveAll = gulp
        .src([config.prodFiles, '!./src/header.php'])
        .pipe(gulp.dest(config.prodMainDestination));

        const changeSrc = gulp.src('./dist/header.php')
        .pipe(change(performChange))
        .pipe(gulp.dest(config.prodMainDestination));

        return merge(moveAll, changeSrc);
    },
    prepareCSS: () => {
        return gulp
        .src(config.cssDestination + 'custom.css', {allowEmpty: true})
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.prodCssDestination))
    }
}