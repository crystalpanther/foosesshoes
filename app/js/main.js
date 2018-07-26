/**
 * MAIN BANNER SLICK SLIDER CONTROLLER
 */
$('.banner__slider').slick({
    arrows: false,
    slidesToShow: 1,
    cssEase: 'ease',
    speed: 500,
    dots: true,
    prevArrow: '.nav-prev',
    nextArrow: '.nav-next',
    appendDots: '.dots-container',
    dotsClass: 'banner__dots',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: true
            }
        }
    ]
});
$('.banner-products__slider').slick({
    arrows: false,
    slidesToShow: 1,
    cssEase: 'ease',
    speed: 500,
    dots: false,
    prevArrow: '.nav-prev',
    nextArrow: '.nav-next',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true
            }
        }
    ]
});

/**
 * FUNCTION ADD STYLE TO SLICK SLIDER DOTS
 */
function dotsSlider() {
    $('.banner__dots').children('li').addClass('banner__dot');
    var i = 0;
    var j = 0;
    var target, content;
    $('.banner__dot').each(function(){
        i++;
        $(this).attr('data-attr', 't'+i);
    });
    $('.banner__dot-text').each(function(){
        j++;
        $(this).attr('id', 't'+j);
    });
    $('.banner__dot-text:first-of-type').addClass('banner__dot-text-active');
    $('.banner__dot').click(function() {
        target =  $(this).attr('data-attr');
        content = '#'+target;
        $(content).addClass('banner__dot-text-active');
        $(content).siblings('div').removeClass('banner__dot-text-active');
    });
}
/**
 * REFRESH PAGE WHEN A WINDOW HAVE A DESKTOP SIZE FOR RELOAD DOT SLIDER FUNCTION
 */
$(function(){
    $(window).resize(function() {
        if($(window).width()>768) {
            location.reload();
        }
    });
});
/**
 * SEARCH FORM
 * @param search
 * @param searchBtn
 * @param searchInput
 * @param availableTags
 */
function search(search, searchBtn, searchInput, availableTags) {
    $(searchInput).autocomplete({
        source: availableTags,
        appendTo: search,
        autoFocus: true
    });
    $('.ui-menu-item').addClass('result');
    $('.ui-menu > li').addClass('result__item');

    $(searchBtn).click(function(){
        $(this).siblings(searchInput).toggleClass('search__input-active');
    });
    $(searchInput).blur(function(){
        $(this).removeClass('search__input-active');
    });
}
/**
 * COUNTER FUNCTION
 * @param counterNumber
 * @param countButton
 */
function count(counterNumber, countButton) {
    var count = 0;
    $(countButton).click(function(){
        count++;
        $(counterNumber).text(count);
    });
}
/**
 * LOGIN POPUP
 *
 */
function loginPopup() {
    var buttonOpen = $('.login-register__button'),
        buttonClose = $('.login__close');
        popup = $('.login-popup');

    buttonOpen.click(function(){
        popup.addClass('login-popup-active');
    });
    buttonClose.click(function () {
        popup.removeClass('login-popup-active');
    });
}
/**
 * MOBILE MENU
 */
function mobileMenu () {
    var openBtn = $('.menu-mobile__button');
    var menuMobile = $('.nav-mobile');
    var closeBtn = $('.nav-mobile__top');

    openBtn.click(function(){
        menuMobile.addClass('nav-mobile-active');
    });
    closeBtn.click(function(){
        menuMobile.removeClass('nav-mobile-active');
    });
}
/**
 * MAGNIFIC POPUP
 */
$('.flickr-widget__item').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});

function news(itemClass, dateClass, titleCLass, textCLass)  {
    $.ajax({
        url: '../news.json',
        success: function (data) {
            function autoupdate() {
                setTimeout(function(){
                    $(itemClass).addClass('blog-news__item-inactive');
                    $(dateClass).text('');
                    $(titleCLass).text('');
                    $(textCLass).text('');
                    setTimeout(function(){
                        $(itemClass).removeClass('blog-news__item-inactive');
                        $(dateClass).text(data.news1.date);
                        $(titleCLass).text(data.news1.title);
                        $(textCLass).text(data.news1.content);
                        setTimeout(autoupdate, 1500);
                    }, 1000)
                }, 2500)
            }
            $(function(){
                setTimeout(autoupdate, 0);
            });
        },
        error: function(textStatus, XHR) {

        }
    });
}
// news('.blog-news__item', '.blog-news__date', '.blog-news__title', '.blog-news__text');

function getEmail() {
    $('.subscribe__button').click('on', function(){
        var emailVal = $('.subscribe__field').val() + '';

        var dataEmail = {
            'email' : emailVal
        };
        $.ajax({
            url: 'email.php',
            data: {json: JSON.stringify(dataEmail)},
            success: function (data) {
                console.log(data);
                $('.subscribe').find('.subscribe__field').css('display: none');
                $('.subscribe').find('.subscribe__button').css('display: none');
                $('.subscribe').text('Thank you!');
            },
            error: function(textStatus, XHR) {
                console.log(XHR + ' ' + textStatus);
                $('.subscribe').text('Sorry, something wrong. Please, try again');
            }
        });
    });
}
getEmail();
/**
 * DROPDOWN MENU FUNCTION
 * @param dropdown
 * @param classActive
 */
function dropdownMenu(dropdown, classActive) {
    $(dropdown).on('touchstart', function(e) {
        'use strict'; //satisfy code inspectors
        var link = $(this); //preselect the link
        if (link.hasClass(classActive)) {
            return true;
        } else {
            link.addClass(classActive);
            $(dropdown).not(this).removeClass(classActive);
            e.preventDefault();
            return false; //extra, and to make sure the function has consistent return points
        }
    });
}
/**
 * CUSTOM CSS STYLE FOR SORT BY ...
 * @param select
 */
function customStyleSelect(select){
    $(select).niceSelect();
}

/**
 * VIEW PRODUCTS AS
 * @param buttonList
 * @param buttonGrid
 * @param productPage
 * @param classList
 * @param classGrid
 */

function contentToGrid(buttonList, buttonGrid, productPage, classList, classGrid) {
    $(buttonList).on('click', function() {
        if ($(productPage).hasClass(classGrid)){
            $(productPage).removeClass(classGrid);
            $(productPage).addClass(classList);
        }
    });
    $(buttonGrid).on('click', function() {
        if ($(productPage).hasClass(classList)){
            $(productPage).removeClass(classList);
            $(productPage).addClass(classGrid);
        }
    });
}


var form = $('.subscribe__form');
form.onsubmit = function(evt){
    evt.preventDefault();
    console.log(form.find('.subscribe__field').val());
    var jobj={email: form.find('.subscribe__field').val()}; //JSON object
    console.log(JSON.stringify(jobj));

};

/**
 * INTERFACE
 */
search('.search', '.search__button', '.search__input', [
    "men shoes",
    "kids",
    "women shoes"
]); //search function
var addToFav = new count('.add-to-favorite-count', '.add-to-favorite'); //add to favorite
var addToCard = new count('.add-to-cart-count', '.add-to-cart'); //add to cart
loginPopup(); //login
dotsSlider(); //dots slick slider
mobileMenu(); // mobile menu
var dropdownProducts = new dropdownMenu('.shop-by__dropdown', 'hover'); //dropdown menu for products page
customStyleSelect('.view-as__select', '.view-as__option'); // style for <select>-<option> html tag
contentToGrid('.view-as__list','.view-as__grid','.product__line', 'product__line-list', 'product__line-grid'); //product page content change view
