const gulp = require('gulp'),
      plug = require('gulp-load-plugins')({ lazy: true }),

      browserify = require('browserify'),
      babelify = require('babelify'),
      babel = require('babel-core/register'),
      source = require('vinyl-source-stream'),

      sass = require('gulp-ruby-sass'),
      minifyCss = require('gulp-minify-css'),
      rename = require('gulp-rename'),
      imagemin = require('gulp-imagemin'),
      uglify = require('gulp-uglify');

const paths = {
  app: './app/app.jsx',
  styles: './app/styles/*.scss',
  babel_files: './*/*.jsx'
};

gulp.task('babelify', function () {
  return browserify({
    extensions: ['.jsx', '.js'],
    entries: './app/app.jsx'
  })
    .transform(babelify.configure({ ignore: /(node_modules)/ }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'));
});

// Compile SCSS files
gulp.task('sass', function() {
  return sass(paths.styles)
    .on('error', sass.logError)
    .pipe(gulp.dest('./styles/'))
    .pipe(minifyCss({
        keepSpecialComments: 0
    }))
    .on('error', function(err) {console.log("You messed up your CSS: " + err.message); })
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./public/'));
});

// Compress PNG images
gulp.task('compress-png', function() {
  return gulp.src(paths.images)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./public/imgs/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.babel_files, ['babelify']);
  gulp.watch(paths.app, ['babelify']);
  gulp.watch(paths.styles, ['sass']);
});

gulp.task('build',['sass', 'babelify', 'watch']);
