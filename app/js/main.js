$('.banner__slider').slick({
    arrows: false,
    slidesToShow: 1,
    cssEase: 'ease',
    speed: 500,
    dots: true,
    dotsClass: 'banner__dots'
});
var dots = $('.banner__dots');

dots.find('li').addClass('banner__dot');
dots.find('li').html(
    '<div class="banner__line"> <span class="banner__inline"></span></div>'+
    '<div class="banner__title">Prada</div>'+
    '<div class="banner__text">Summer is coming</div>'
);
dots.find('button').text('');
dots.find('button').addClass('banner__line');
dots.find('.banner__dot ').each(function() {
    if($(this).hasClass('slick-active')) {
        $(this).find('.banner__inline').addClass('banner__inline-active');
        $(this).find('.banner__title').addClass('banner__title-active');
        $(this).find('.banner__text').addClass('banner__text-active');
    }
    else {
        $(this).find('.banner__inline').removeClass('banner__inline-active');
    }
});