/**
 * MAIN BANNER SLICK SLIDER CONTROLLER
 */
$('.banner__slider').slick({
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
                dots: false,
                arrows: true
            }
        }
    ]
});
// $('.banner__dots').slick({
//     slidesToShow: 3,
//     slidesToScroll: 0,
//     asNavFor: '.banner__slider',
//     focusOnSelect: true,
//
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: "unslick"
//         }
//     ]
// });
// $('.banner__dots').find('.slick-slide').removeClass('slick-active');
// $('.banner__dots').find('.slick-slide').eq(0).addClass('slick-active');


function resziseWindow() {
    var width = $(window).width();
    var i = 0;

    if (width > 728) {
        var dots = $('.banner__dots');
        $('.banner__dot').each(function () {
            i++;
            $(this).attr('id', 'dot'+i);
        }); //add id for every dot in dots

        dots.find('button').text(''); //remove numbers content from dots
        dots.find('li').addClass('banner__dot'); //add class for dot
        dots.find('#dot1').html(
            '<div class="banner__line"> <span class="banner__inline"></span></div>'+
            '<div class="banner__title">Pink Shoes</div>'+
            '<div class="banner__text">Now af $145,99</div>'
        ); //add html content to first dot
        dots.find('#dot2').html(
            '<div class="banner__line"> <span class="banner__inline"></span></div>'+
            '<div class="banner__title">Anna Field</div>'+
            '<div class="banner__text">Limited Edition</div>'
        ); //add html content to second dot
        dots.find('#dot3').html(
            '<div class="banner__line"> <span class="banner__inline"></span></div>'+
            '<div class="banner__title">Prada</div>'+
            '<div class="banner__text">Summer is coming</div>'
        ); //add html content to third dot
        dots.find('button').addClass('banner__line'); //add custom class to dot button
    }

}


/**
 * SEARCH FORM
 */
function search(search, searchBtn, searchInput) {
    var availableTags = [
        "men shoes",
        "kids",
        "women shoes"
    ];

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
/**
 * INTERFACE
 */
search('.search', '.search__button', '.search__input');
var addToFav = new count('.add-to-favorite-count', '.add-to-favorite');
var addToCard = new count('.add-to-cart-count', '.add-to-cart');
addToFav;
addToCard;
loginPopup();
mobileMenu();


function news(itemClass, dateClass, titleCLass, textCLass)
{
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

