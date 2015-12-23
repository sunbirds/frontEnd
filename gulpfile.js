'use strict';

var gulp = require('gulp');
var express = require('express');
var sass = require('gulp-sass');
var less = require('gulp-less');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var path = require('path');
// var reactify = require('reactify');
var react = require('gulp-react');
var R = require('react');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

var koa = require('koa');
var Jade = require('koa-jade');
var router = require('koa-router')();


gulp.task('default', ['watch','server']);

gulp.task('server', function() {
  // start express server by gulp
  // var server = express();
  // server.use(express.static('public'));
  // var serverport = 3000;
  // // Start webserver
  // server.listen(serverport);
  // Start live reload
  // lrserver.listen(livereloadport);
  var app = koa();

  app.use(require('koa-static')('public'));

  var jade = new Jade({
    viewPath: 'private/nest/views',
    debug: false,
    pretty: false,
    compileDebug: false,
    locals: {},
    basedir: '',
    helperPath: [
    ]
  })


  app.use(jade.middleware);

  router.get('/', function *(next) {
    this.render('index', {data:{
      title:'demo1',
      module: 'views/demo'
    }}, true)
  });

  router.get('/2', function *(next) {
    this.render('index', {data:{
      title:'demo2',
      module: 'views/demo2'
    }}, true)
  });

  // app.use(function* () {
  //   this.render('index', {}, true)
  // })

  app
    .use(router.routes())
    .use(router.allowedMethods());

  var port = '3000';
  app.listen(port);
  console.log("server start at:" + port)

});


gulp.task('sass', function(done) {
  gulp.src('./private/*/css/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer('Firefox 14'))
    .pipe(gulp.dest('./public/'))
    // .pipe(gulp.dest(function(file){
    //     var relative = file.relative.split("/");
    //     file.base = file.base + relative[0] + "/" + relative[1];
    //     var npath = file.base;
    //     var npath1 = npath.replace("private","public");
    //     var npath2 =  npath1.replace("scss","css");
    //     return npath2;
    // }))
    // .pipe(minifyCss({
    //   keepSpecialComments: 0
    // }))
    // gulp.pipe(rename({ extname: '.min.css' }))
    // .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('less', function () {
  return gulp.src('./private/*/css/*.less')
    .pipe(less({
      errLogToConsole: true
      // paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('jsx', function () {
return gulp.src('./private/*/js/*.jsx')
    .pipe(plumber({
        errorHandler: function(error) {
            gutil.log(
                gutil.colors.cyan('Plumber') + gutil.colors.red(' found unhandled error:\n'),
                error.toString()
            );
            this.emit('end');
        }
    }))
    .pipe(react())
    // .pipe(browserify({
    //   transform: [reactify]
    //   }))
    .pipe(plumber.stop())
    .pipe(rename({ extname: '.js' }))
    // .pipe(uglify())
    .pipe(gulp.dest('./public/'));
});

gulp.task('browserify', function() {
    // Single entry point to browserify 
    gulp.src('./public/*/js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./publish/'))
});

gulp.task('copyfile', function() {
    gulp.src('./public/**')
        .pipe(gulp.dest('./cordova/www/'))
});


gulp.task('watch', function() {
    gulp.watch('./private/*/css/*.scss', ['sass']);
    gulp.watch('./private/*/css/*.less', ['less']);
    gulp.watch('./private/*/js/*.jsx', ['jsx']);
    gulp.watch('./private/*/jsx/*.jsx', ['jsx']);
    gulp.watch('./lib/jsx/*.jsx', ['jsx']);
});

