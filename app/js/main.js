/**
 * MAIN BANNER SLICK SLIDER CONTROLLER
 */
$('.banner__slider').slick({
    arrows: false,
    slidesToShow: 1,
    cssEase: 'ease',
    speed: 500,
    dots: true,
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
var dots = $('.banner__dots');
dots.find('button').text(''); //remove numbers content from dots
dots.find('li').addClass('banner__dot'); //add class for dot

var i = 0;
$('.banner__dot').each(function () {
    i++;
    $(this).attr('id', 'dot'+i);
}); //add id for every dot in dots
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
 * INTERFACE
 */
search('.search', '.search__button', '.search__input');
var addToFav = new count('.add-to-favorite-count', '.add-to-favorite');
var addToCard = new count('.add-to-cart-count', '.add-to-cart');

loginPopup();
mobileMenu();


