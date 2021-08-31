var conf = require('./config.1.json');
var gulp = require('gulp');
var pug = require('gulp-pug');
var nunjucksRenderer = require('gulp-nunjucks-render');
//var nunjucksRenderer = require('gulp-nunjucks-html');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

function html(){
    return gulp.src(conf.src.pug + '/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(conf.dest.html))
        .pipe(browserSync.stream());
};
function nunjuck() {
    return gulp.src(conf.src.njk + "/**/*.njk")
      .pipe(nunjucksRenderer({
        path: ['src/views/']
      }))
      .pipe(gulp.dest(conf.dest.html));
};

function styles() {
    return gulp.src(conf.src.sass + '/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(conf.dest.css))
        .pipe(browserSync.stream());
};
function scripts(){
    return gulp.src(conf.src.js + '/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(conf.dest.js))
    .pipe(browserSync.stream());
};

function serve() {
    browserSync.init({
      server: {
        baseDir: "./",
        proxy: "localhost",
        index: "content/html/indexpage.html"
      }
    });
   };
  
function watch(){
    gulp.watch(conf.src.sass + '/*.scss', styles);
    gulp.watch(conf.src.pug + '/*.pug', html);
    gulp.watch(conf.src.njk + '/*.njk', nunjuck);
    gulp.watch(conf.src.js + '/*.js', scripts);
}

gulp.task('default', gulp.series(nunjuck,  styles, scripts, html, serve, watch));
