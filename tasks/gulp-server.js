const gulp = require('gulp');
const config = require('../gulp-config');

const browserSync = require('browser-sync').create();

module.exports = {
    browserSync: browserSync,
    server: (cb) => {
        browserSync.init(config.serverConfig);
        cb();
    },
    reload: (cb) => {
        browserSync.reload();
        cb();
    }
}