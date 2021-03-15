const config = require('../gulp-config');

const performChangeCSS = (content) => {
    return content.replace('custom.css', 'custom.min.css');
}

const performChangeJS = (content) => {
    return content.replace('custom.js', 'custom.min.js');
}

module.exports = {
    moveMain: () => {
        return config.gulp
            .src(config.prodFiles)
            .pipe(config.gulp.dest(config.prodMainDestination));
    },
    changeSrcCSS: () => {
        return config.gulp
            .src(config.prodMainDestination + 'header.php')
            .pipe(config.change(performChangeCSS))
            .pipe(config.gulp.dest(config.prodMainDestination));
    },
    changeSrcJS: () => {
        return config.gulp
            .src(config.prodMainDestination + 'footer.php')
            .pipe(config.change(performChangeJS))
            .pipe(config.gulp.dest(config.prodMainDestination));
    },
    prepareCSS: () => {
        return config.gulp
            .src(config.cssDestination + config.customFile + '.css', { allowEmpty: true })
            .pipe(config.rename({ suffix: '.min' }))
            .pipe(config.cleanCSS())
            .pipe(config.gulp.dest(config.prodCssDestination))
    },
    prepareJS: () => {
        return config.gulp
            .src(config.jsDestination + config.customFile + '.js', { allowEmpty: true })
            .pipe(config.minify(({
                ext: {
                    min: '.min.js'
                },
                noSource: true
            })))
            .pipe(config.gulp.dest(config.prodJsDestination))
    }
}