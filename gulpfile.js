const config = require('./gulp-config');
//tasks
const startServer = require('./tasks/gulp-server').server;
const reloadServer = require('./tasks/gulp-server').reload;
const customCSS = require('./tasks/gulp-styles').customCSS;
const moveMain = require('./tasks/gulp-dist').moveMain;
const changeSrcCSS = require('./tasks/gulp-dist').changeSrcCSS;
const prepareCSS = require('./tasks/gulp-dist').prepareCSS;
const customJS = require('./tasks/gulp-scripts').customJS;
const changeSrcJS = require('./tasks/gulp-dist').changeSrcJS;
const prepareJS = require('./tasks/gulp-dist').prepareJS;


const reloadChanges = () => {
    config.gulp.watch(config.htmlFiles, reloadServer),
        config.gulp.watch(config.phpFiles, reloadServer),
        config.gulp.watch(config.watchCssCustom, customCSS),
        config.gulp.watch(config.watchJsCustom, customJS)
};

config.gulp.task('default', config.gulp.series(
    startServer,
    config.gulp.parallel(reloadChanges)
));

config.gulp.task('dist', config.gulp.series(
    moveMain,
    config.gulp.parallel(
        changeSrcCSS,
        changeSrcJS,
        prepareCSS,
        prepareJS
    )
)
);