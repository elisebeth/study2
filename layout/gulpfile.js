const gulp = require("gulp");
const stylus = require("gulp-stylus");

gulp.task("cmp", () => {
  gulp.src("./styles/styles.styl").pipe(stylus()).pipe(gulp.dest("./styles"));
});
