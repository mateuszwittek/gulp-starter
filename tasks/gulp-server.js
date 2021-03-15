const config = require('../gulp-config');

module.exports = {
    server: (cb) => {
        config.browserSync.init(config.serverConfig);
        cb();
    },
    reload: (cb) => {
        config.browserSync.reload();
        cb();
    }
}