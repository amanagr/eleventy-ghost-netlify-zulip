const { watch, src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

function cssTask() {
return src('./styles/main.scss', { allowEmpty: true })
    .pipe(sass({ outputStyle: 'compressed'})).on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('css'));
}

function watchFiles() {
watch('./**/*.scss', parallel(cssTask));
};

exports.default = parallel(cssTask, watchFiles);
