const config = require('../gulp-config');

module.exports = {
    customCSS: () => {
        return config.gulp
            .src(config.cssCustomFiles, { allowEmpty: true })
            .pipe(config.sassGlob())
            .pipe(config.sass())
            .on('error', config.sass.logError)
            .pipe(config.autoprefixer(config.browserList))
            .pipe(config.rename({ basename: config.customFile }))
            .pipe(config.gulp.dest(config.cssDestination))
            .pipe(config.browserSync.stream())
    },
    vendorCSS: () => {
        return config.gulp
            .src(config.cssVendorfiles, { allowEmpty: true })
            .pipe(config.concat(config.vendorFile + '.css'))
            .pipe(config.gulp.dest(config.cssDestination))
            .pipe(config.browserSync.stream())
    }
}