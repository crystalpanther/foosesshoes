/**
 * Created by elina on 7/4/2018.
 */
var gulp         = require('gulp'),
    sass =         require('gulp-sass'),
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'),
    del          = require('del'),
    autoprefixer = require('gulp-autoprefixer')
    rename       = require('gulp-rename'); // Подключаем библиотеку для переименования файлов

gulp.task('sass', function(){
    return gulp.src([
        'app/sass/**/style.sass',
        'app/sass/**/products.sass',
        'app/sass/**/mobile.sass'
    ])
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('css', function(){
    return gulp.src([
        'app/libs/slick/slick.css',
        'app/libs/magnific-popup/magnific-popup.css'
    ])
        .pipe(concat('plugins.css'))
        .pipe(gulp.dest('app/css'))
});
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/jquery.min.js',
        'app/libs/jquery-ui/jquery-ui.min.js',
        'app/libs/slick/slick.min.js',
        'app/libs/magnific-popup/jquery.magnific-popup.min.js'
    ])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
gulp.task('clean', function() {
    return del.sync('public');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') 
        .pipe(gulp.dest('public/img'));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts', 'css'], function() {
    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('public/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('public/fonts'))

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('public/js'))

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('public'));

});


gulp.task('default', ['watch', 'build']);