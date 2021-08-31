var conf = require('./config.json');
var gulp = require('gulp');
var pug = require('gulp-pug');
var nunjucksRenderer = require('gulp-nunjucks-render');
//var nunjucksRenderer = require('gulp-nunjucks-html');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
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
        path: [conf.src.njk]
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
function images(){
    return gulp.src(conf.src.image + '/**/*.+(png|jpg|gif)')
    .pipe(gulp.dest(conf.dest.image))
    .pipe(browserSync.stream());
}
function fonts(){
    return gulp.src(conf.src.font + '/**/*.+(eot|ttf|woff|woff2)')
    .pipe(gulp.dest(conf.dest.font))
    .pipe(browserSync.stream());
}
function kitchensink() {
    return gulp.src(conf.kitchensink.src)
        .pipe(plumber())
        .pipe(concat('kitchensink.js'))
        .pipe(gulp.dest(conf.dest.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(conf.dest.js))
        .pipe(browserSync.stream());
};
function serve() {
    browserSync.init({
      server: {
        baseDir: "./",
        proxy: "localhost",
        index: "dashboard.html"
      }
    });
   };
  
   function servelocal() {
    browserSync.init({
      server: {
        baseDir: "./",
        proxy: "localhost",
        index: "indexpage.html"
      }
    });
   }; 

function watch(){
    gulp.watch(conf.src.sass + '*.scss', styles);
    gulp.watch(conf.src.pug + '*.pug', html);
    gulp.watch(conf.src.njk + '*.njk', nunjuck);
    gulp.watch(conf.src.js + '*.js', scripts);
    gulp.watch(conf.src.image + '/*.+(png|jpg|gif)', images);
    gulp.watch(conf.src.font + '/*.+(eot|ttf|woff|woff2)', fonts)
}

gulp.task('default', gulp.series(nunjuck, styles, images, fonts, scripts, html, serve, watch));
gulp.task('rupaai', gulp.series(nunjuck, styles, images, fonts, scripts, html, servelocal, watch)); 
