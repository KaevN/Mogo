const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const webp = require('gulp-webp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const imageMin = require("gulp-imagemin");

function styles() {
    return gulp.src('./source/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
        cascade:false,
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest('./build'));
};

function js() {
    return gulp.src('./source/js/**/*.js')
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest('./build'));
};

function watch() {
    gulp.watch('./source/src/**/*.scss', styles);
}

function clean() {
    return del(['./build/*'])
}

function images() {
    return gulp.src('source/img/**/*.png')
    .pipe(imageMin([
        imageMin.optipng({optimizationLevel: 5})
    ]))
      .pipe(gulp.dest("./build/img"));
};

gulp.task('webp', () =>
    gulp.src('./build/img/content/**/*.png')
        .pipe(webp())
        .pipe(gulp.dest('./build/img/webp'))
);


gulp.task('styles', styles);
gulp.task('js', js);
gulp.task('watch', watch);
gulp.task('images', images)
gulp.task('build', gulp.series(clean, styles, js));



