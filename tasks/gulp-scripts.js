const config = require('../gulp-config');

module.exports = {
    customJS: () => {
        return config.gulp
            .src([config.jsCustomGlobalFile, config.jsCustomPagesFiles, config.jsCustomModulesFiles], { allowEmpty: true })
            .pipe(config.babel({
                presets: ['@babel/env']
            }))
            .pipe(config.concat(config.customFile + '.js'))
            .pipe(config.gulp.dest(config.jsDestination))
    },
    vendorJS: () => {
        return config.gulp
            .src(config.jsVendorFiles, { allowEmpty: true })
            .pipe(config.concat(config.vendorFile + '.js'))
            .pipe(config.gulp.dest(config.jsDestination))
    }
}