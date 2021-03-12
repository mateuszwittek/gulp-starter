const gulp = require("gulp");
const config = require('./gulp-config');
//tasks
const startServer = require('./tasks/gulp-server').server;
const reloadServer = require('./tasks/gulp-server').reload;
const customCSS = require('./tasks/gulp-styles').customCSS;

const reloadChanges = () => {
    gulp.watch(config.htmlFiles, reloadServer),
    gulp.watch(config.phpFiles, reloadServer),
    gulp.watch(config.watchCssCustom, customCSS)
};

gulp.task('default', gulp.series(
    startServer,
    gulp.parallel(reloadChanges)
));