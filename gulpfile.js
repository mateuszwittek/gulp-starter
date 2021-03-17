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
const vendorJS = require('./tasks/gulp-scripts').vendorJS;
const vendorCSS = require('./tasks/gulp-styles').vendorCSS;


const reloadChanges = () => {
    config.gulp.watch(config.htmlFiles, reloadServer),
        config.gulp.watch(config.phpFiles, reloadServer),
        config.gulp.watch(config.watchCssCustom, customCSS),
        config.gulp.watch(config.watchJsCustom, config.gulp.series(customJS, reloadServer)),
        config.gulp.watch(config.watchCssVendor, vendorCSS),
        config.gulp.watch(config.watchJsVendor, config.gulp.series(vendorJS, reloadServer))
};

const moveAssets = () => {
    return (prepareCSS(config.customFile), prepareCSS(config.vendorFile), prepareJS(config.customFile), prepareJS(config.vendorFile));
}

config.gulp.task('default', config.gulp.series(
    startServer,
    config.gulp.parallel(reloadChanges)
));

config.gulp.task('dist', config.gulp.series(
    moveMain,
    config.gulp.parallel(
        changeSrcCSS,
        changeSrcJS,
        moveAssets
    )
)
);