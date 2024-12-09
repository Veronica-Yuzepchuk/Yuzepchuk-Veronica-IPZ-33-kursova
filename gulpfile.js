"use strict";

const { src, dest, watch, series, parallel } = require("gulp");
const gulp = require("gulp");

const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const concat = require("gulp-concat");
const removeComments = require("gulp-strip-css-comments");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const rigger = require("gulp-rigger");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const del = require("del");
const browserSync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");

const srcPath = "src/";
const distPath = "dist/";

const paths = {
    build: {
        html: distPath,
        css: distPath + "assets/css/",
        js: distPath + "assets/js/",
        images: distPath + "assets/images/",
    },
    src: {
        html: srcPath + "*.html",
        css: srcPath + "assets/scss/*.scss",
        js: srcPath + "assets/js/*.js",
        images: srcPath + "assets/images/**/*.{jpeg,png,svg,ico,webp,webmanifest,xml,jpg,json}",
    },
    watch: {
        html: srcPath + "**/*.html",
        css: srcPath + "assets/scss/**/*.scss",
        js: srcPath + "assets/js/**/*.js",
        images: srcPath + "assets/images/**/*.{jpeg,png,svg,ico,webp,webmanifest,xml,json}",
    },
    clean: "./" + distPath,
};

function serve() {
    browserSync.init({
        server: {
            baseDir: "./" + distPath,
        },
    });
}

function html() {
    return src(paths.src.html, { base: srcPath })
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
                minifyCSS: true,
            })
        )
        .pipe(dest(paths.build.html))
        .pipe(browserSync.reload({ stream: true }));
}

function css() {
    return src(paths.src.css, { base: srcPath + "assets/scss/" })
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        .pipe(dest(paths.build.css))
        .pipe(
            cssnano({
                zindex: false,
                discardComments: {
                    removeAll: true,
                },
            })
        )
        .pipe(removeComments())
        .pipe(
            rename({
                suffix: ".min",
                extname: ".css",
            })
        )
        .pipe(dest(paths.build.css))
        .pipe(browserSync.reload({ stream: true }));
}

function js(){
    return src(paths.src.js, {base : srcPath+ "assets/js/"})
    .pipe(rigger())
    .pipe(dest(paths.build.js))
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min",
        extname: ".js"
    }))
    .pipe(dest(paths.build.js))
    .pipe(browserSync.reload({stream: true}));
}

function images() {
    return src(paths.src.images, { base: srcPath + "assets/images/", encoding: false })
        .pipe(imagemin())
        .pipe(dest(paths.build.images))
        .pipe(browserSync.reload({ stream: true }));
}

function clean() {
    return del(paths.clean);
}

function watcher() {
    watch(paths.watch.html, html);
    watch(paths.watch.css, css);
    watch(paths.watch.js, js);
    watch(paths.watch.images, images);
}

const build = series(clean, parallel(html, css, js, images));
const dev = series(build, parallel(watcher, serve));

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.dev = dev;
exports.default = dev;