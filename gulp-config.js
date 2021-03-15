module.exports = {
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    sass: require('gulp-sass'),
    sassGlob: require('gulp-sass-glob'),
    autoprefixer: require('gulp-autoprefixer'),
    rename: require("gulp-rename"),
    cleanCSS: require('gulp-clean-css'),
    change: require('gulp-change'),
    babel: require('gulp-babel'),
    concat: require('gulp-concat'),
    minify: require('gulp-minify'),

    htmlFiles: './src/**/*.html',
    phpFiles: './src/**/*.php',

    prodFiles: './src/*.+(png|xml|css|php|html|ico|jpg|svg|webmanifest|htaccess)',
    prodMainDestination: './dist/',

    cssCustomFiles: './src/assets/styles/custom/main.scss',
    cssVendorfiles: './src/assets/styles/vendor/*.css',
    cssDestination: './src/assets/styles/',
    prodCssDestination: './dist/assets/styles/',

    jsCustomModulesFiles: './src/assets/scripts/custom/modules/*.js',
    jsCustomPagesFiles: './src/assets/scripts/custom/pages/*.js',
    jsCustomGlobalFile: './src/assets/scripts/custom/global.js',
    jsVendorFiles: './src/assets/scripts/vendor/*.js',
    jsDestination: './src/assets/scripts/',
    prodJsDestination: './dist/assets/scripts/',

    watchCssCustom: './src/assets/styles/custom/**/*.scss',
    watchCssVendor: './src/assets/styles/vendor/*.css',
    watchJsCustom: './src/assets/scripts/custom/**/*.js',
    watchJsVendor: './src/assets/scripts/vendor/*.js',

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