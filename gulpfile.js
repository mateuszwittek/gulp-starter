const config = require('./gulp-config.js');
//tasks
const startServer = require('./tasks/gulp-server.js').server;
const reloadServer = require('./tasks/gulp-server.js').reload;
const customCSS = require('./tasks/gulp-server.js').customCSS;

const gulp = require("gulp");




const reloadChanges = () => {
    gulp.watch(config.htmlFiles, reloadServer),
    gulp.watch(config.phpFiles, reloadServer),
    gulp.watch(config.watchCssCustom, customCSS)
};

gulp.task('default', gulp.series(
    startServer,
    gulp.parallel(reloadChanges)
));