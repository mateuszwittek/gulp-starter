module.exports = {
    htmlFiles: './src/**/*.html',
    phpFiles: './src/**/*.php',

    prodFiles: './src/*.+(png|xml|css|php|html|ico|jpg|svg|webmanifest|htaccess)',
    prodMainDestination: './dist/',

    cssCustomFiles: './src/assets/styles/custom/main.scss',
    cssVendorfiles: './src/assets/styles/vendor/*.css',
    cssDestination: './src/assets/styles/',
    prodCssDestination: './dist/assets/styles/',

    jsCustomFiles: './src/assets/scripts/custom/*.js',
    jsVendorFiles: './src/assets/scripts/vendor/*.js',
    jsDestination: './src/assets/scripts/',
    prodJsDestination: './dist/assets/scripts/',

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
    },

    browserList: [
		'last 2 version',
		'> 1%',
		'ie >= 11',
		'last 2 Android versions',
		'last 2 ChromeAndroid versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'last 2 Safari versions',
		'last 2 iOS versions',
		'last 2 Edge versions',
		'last 2 Opera versions'
	]
};