/// <binding Clean='clean' />
'use strict';

// process.env.BROWSERIFYSHIM_DIAGNOSTICS=1

var gulp = require("gulp"),
    argv = require('yargs').argv,
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    gulpif = require("gulp-if"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    less = require("gulp-less"),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    browserifyShim = require('browserify-shim'),
    typescript = require("gulp-typescript"),
    runSequence = require('run-sequence'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');

//
// Configuration
//

var paths = {
    source: "./src/",
    output: "./dist/"
};

var build = {
    input: {
        files: {
            // Source to compile
            ts: [
                paths.source + '**/*.ts',
                paths.source + '**/*.tsx'
            ],
            
            // Styles
            styles: paths.source + "styles/**/*.css",
            stylesMin: paths.source + "styles/**/*.min.css",
            less: [paths.source + "styles/**/*.less"],
            app_less: [paths.source + "styles/**.less"],
            
            // Scripts
            scripts: paths.source + "scripts/**/*.js",
            scriptsMin: paths.source + "scripts/**/*.min.js",
            vendor_js: [
                // 'history',
                'react',
                'react-dom',
                'react-router',
                'react-router-dom'
            ],
            extern_js: [
                'node_modules/q/q.js',
            ],
            polyfill_js: [
                paths.source + 'polyfills/Object.assign.js'
            ],
            
            // Miscellaneous files to copy
            public: [paths.source + 'public/**/*'],
        }
    },
    output: {
        files: {
            styles: paths.output + "styles/site.css",
            scripts: paths.output + "scripts/site.js"
        },
        dirs: {
            ts: paths.output,
            images: paths.output + 'images',
            root: paths.output,
            styles: paths.output + 'styles',
            scripts: paths.output + 'scripts',
            polyfills: paths.output + 'polyfills',
            views: paths.output + 'views'
        }
    },
    other: {
        clean: ['output/*', 'build/*'],
        output_typings: 'output/typings',
        // An intermediate file; output from tsx, input to bundle.
        client_js: [paths.output + 'client.js']
    }
};

//
// Setup
//

var typescriptProject = typescript.createProject("tsconfig.json");

var minify = argv.production || argv.staging;

//
// Basic tasks
//

gulp.task("clean", function (cb) {
    rimraf(paths.output, cb);
});

gulp.task("scripts", function () {
    return gulp.src([build.input.files.scripts, "!" + build.input.files.scriptsMin], { base: "." })
        .pipe(concat(build.output.files.scripts))
        .pipe(gulpif(minify, uglify()))
        .pipe(gulpif(minify, rename({ suffix: '.min' })))
        .pipe(gulp.dest("."));
});

gulp.task("styles", function () {
    return gulp.src([build.input.files.styles, "!" + build.input.files.stylesMin])
        .pipe(concat(build.output.files.styles))
        .pipe(gulpif(minify, cssmin()))
        .pipe(gulp.dest("."));
});

gulp.task('less', function () {
    return gulp.src(build.input.files.app_less)
        .pipe(gulpif(!minify, sourcemaps.init()))
        .pipe(less()).on('error', function (err) {
            console.error(err);
            this.emit('end'); // emit the end event, to properly end the task.
        })
        .pipe(gulpif(!minify, sourcemaps.write()))
        .pipe(gulpif(minify, cssmin()))
        .pipe(gulpif(minify, rename({ suffix: '.min' })))
        .pipe(gulp.dest(build.output.dirs.styles));
});

//
// Compilation and packaging
//

gulp.task('typescript', function () {
    return gulp
        .src(build.input.files.ts)
        .pipe(typescriptProject())
        .pipe(gulp.dest(build.output.dirs.ts));
});

gulp.task('vendor', function() {
    return browserify({
            insertGlobals: true,
        })
        .transform(browserifyShim)
        .require(build.input.files.vendor_js)
        .bundle()
            .on('error', console.error.bind(console)) 
        .pipe(source('vendor.js'))
        // http://stackoverflow.com/questions/24992980/how-to-uglify-output-with-browserify-in-gulp
        // Convert from streaming to buffered vinyl file object for uglify
        .pipe(gulpif(minify, buffer()))
        .pipe(gulpif(minify, uglify()))
        .pipe(gulpif(minify, rename({ suffix: '.min' })))
        .pipe(gulp.dest(build.output.dirs.scripts));
});

gulp.task('app', function() {
    return browserify({
            insertGlobals: true,
            entries: build.other.client_js
        })
        .transform(browserifyShim)
        .external(build.input.files.vendor_js)
        // .add(build.input.files.polyfill_js)
        .bundle()
            .on('error', console.error.bind(console)) 
        .pipe(source('app.js'))
        // http://stackoverflow.com/questions/24992980/how-to-uglify-output-with-browserify-in-gulp
        // Convert from streaming to buffered vinyl file object for uglify
        .pipe(gulpif(minify, buffer()))
        .pipe(gulpif(minify, uglify()))
        .pipe(gulpif(minify, rename({ suffix: '.min' })))
        .pipe(gulp.dest(build.output.dirs.scripts));
});

//
// Copy tasks
//

gulp.task('public', function() {
    return gulp.src(build.input.files.public)
        .pipe(gulp.dest(build.output.dirs.root));
});

gulp.task('extern', function () {
    return gulp.src(build.input.files.extern_js)
        .pipe(gulp.dest(build.output.dirs.scripts));
});

gulp.task('polyfills', function() {
    return gulp.src(build.input.files.polyfill_js)
        .pipe(gulp.dest(build.output.dirs.polyfills));
});

gulp.task('copy', gulp.parallel('public', 'scripts', 'styles' /* 'extern', 'polyfills' */));

gulp.task('compile', 
    gulp.series(
        gulp.parallel('typescript', 'less'),
        gulp.parallel('vendor', 'app')));

gulp.task('recompile', gulp.series('typescript', 'app'));

gulp.task('watch', function() {
    gulp.watch(build.input.files.ts, gulp.series('recompile'));
    gulp.watch(build.input.files.styles, gulp.series('styles'));
    gulp.watch(build.input.files.less, gulp.series('less'));
});

// The default task (called when running 'gulp' from the command line).
gulp.task('default', gulp.parallel('copy', 'compile'));
