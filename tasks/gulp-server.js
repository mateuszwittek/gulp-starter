const config = require('../gulp-config.js');
const browserSync = require('browser-sync').create();

module.exports = {
    server: (cb) => {
        browserSync.init(config.serverConfig);
        cb();
    },
    reload: (cb) => {
        browserSync.reload();
    }

}