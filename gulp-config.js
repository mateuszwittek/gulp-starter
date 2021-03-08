module.exports = {
    htmlFiles: './src/**/*.html',
    phpFiles: './src/**/*.php',
    cssCustomFiles: './src/assets/styles/custom/main.scss',
    cssVendorfiles: './src/assets/styles/vendor/*.css',
    jsCustomFiles: './src/assets/scripts/custom/*.js',
    jsVendorFiles: './src/assets/scripts/vendor/*.js',
    watchCssCustom: './src/assets/styles/custom/**/*.scss',
	watchCssVendor: './src/assets/styles/vendor/*.css',
	watchJsCustom: '/src/assets/scripts/custom/**/*.js',
	watchJsVendor: '/src/assets/scripts/vendor/*.js',
    vendorFile: 'vendor',
    customFile: 'custom',
    serverConfig: {
        proxy: 'http://localhost/wlasne/gulp-template/src/',
        injectChanges: true,
        browser: 'chrome',
        watchEvents: ['change', 'add']
    }
};