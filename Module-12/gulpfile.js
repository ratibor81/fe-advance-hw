const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('js', () => {
    gulp.src('./js/*.js')
    .pipe(babel({
          presets: ['env'],
        }))
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
});