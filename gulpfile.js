//tasks
const startServer = require('./tasks/gulp-server.js').server;
const reloadServer = require('./tasks/gulp-server.js').reload;

const gulp = require("gulp");

gulp.task('default', startServer);