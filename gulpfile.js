const gulp = require("gulp");
const minify = require("gulp-minify");
const concat = require("gulp-concat");
const insert = require("gulp-insert");
const clean = require("gulp-clean");

gulp.task("build", function() {
  return gulp
    .src("temp/**/*.js")
    .pipe(concat("vscode-icons.js"))
    .pipe(
      insert.transform(function(contents, file) {
        return `(function(global) { 
var exports = {};
if(typeof global === "object") {
	global.vscodeIcons = exports;
} 
if ( typeof module === "object" && typeof module.exports === "object" ) {
	module.exports = exports;
}
function require() {
	return exports;
}
${contents}
})(typeof window !== "undefined" ? window : this);
`;
      })
    )
    .pipe(minify())
    .pipe(gulp.dest("dist"));
});

gulp.task("clean", ["build"], function() {
  gulp.src("temp", { read: false }).pipe(clean());
});

gulp.task("default", ["build", "clean"]);
