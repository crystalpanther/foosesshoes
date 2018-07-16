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

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/sass/**/*.sass') // Берем источник
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/jquery-ui/jquery-ui.min.js'
    ])
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});
gulp.task('clean', function() {
    return del.sync('public'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') 
        .pipe(gulp.dest('public/img'));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('public/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('public/fonts'))

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('public/js'))

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('public'));

});


gulp.task('default', ['watch']);