/**
 * MAIN BANNER SLICK SLIDER CONTROLLER
 */
$('.banner__slider').slick({
    arrows: false,
    slidesToShow: 1,
    cssEase: 'ease',
    speed: 500,
    dots: true,
    dotsClass: 'banner__dots'
});
var dots = $('.banner__dots');
dots.find('button').text(''); //remove numbers content from dots
dots.find('li').addClass('banner__dot'); //add class for dot

var i = 0
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
