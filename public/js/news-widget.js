/**
 * Created by elina on 7/24/2018.
 */

function addId(item, id) {
    var i = 0;
    $(item).each(function(){
        i++;
        $(this).attr('id', id+i);
    });
} // add id to viewed news and twit
var idNews = new addId('.blog-news__item', 'news');
var idTwitter = new addId('.twitter-widget__item', 'twitter');



var newsArray = [
    {
        date: 'Apr 21',
        title: 'Title1 What an Ecommerce theme',
        text: 'Text1 Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh'
    },
    {
        date: 'May 22',
        title: 'Title2 What an Ecommerce theme',
        text: 'Text2 Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh'
    },
    {
        date: 'Jun 17',
        title: 'Title3 What an Ecommerce theme',
        text: 'Text3 Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh'
    },
    {
        date: 'Jul 01',
        title: 'Title4 What an Ecommerce theme',
        text: 'Text4 Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh'
    },
    {
        date: 'Aug 13',
        title: 'Title5 What an Ecommerce theme',
        text: 'Text5 Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh'
    },
    {
        date: 'Aug 18',
        title: 'Title6 What an Ecommerce theme',
        text: 'Text6 Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh'
    }
]; // an Array for news
var twitterArray = [
    {
        twitterHref: 'https://twitter.com/billgates',
        twitterName: '@billgates',
        twitterText: 'We need a reliable, affordable, and accessible diagnostic for Alzheimer’s disease. ',
        twitterDate: 2
    },
    {
        twitterHref: 'https://twitter.com/elonmusk',
        twitterName: '@elonmusk',
        twitterText: 'Reports that I am a top donor to GOP are categorically false. I am not a top donor to any political party.',
        twitterDate: 5
    },
    {
        twitterHref: 'https://twitter.com/kanyewest',
        twitterName: '@kanyewest',
        twitterText: 'Music is an art form. ' ,
        twitterDate: 18
    },
    {
        twitterHref: 'https://twitter.com/beyonce',
        twitterName: '@beyonce',
        twitterText: 'Tune in now to NBC #ChimeforChange benefit concert.',
        twitterDate: 25
    }
] // an array for twitter
var counter = 0;
var randomNumber1, randomNumber2;

function randomNews(item1, item2, activeClass, arr) {
    setInterval(function () {
        randomNumber1 = Math.round( Math.random() * (arr.length-1) );
        randomNumber2 = Math.round( Math.random() * (arr.length-1) );
    }, 2000); //function for random take data from data array

    this.addContentToNews = function() {
        $(item1).toggleClass(activeClass).html(
            '<li class="blog-news__item">' +
            '<div class="blog-news__date">' + arr[randomNumber1].date + '</div>'+
            '<a class="blog-news__link">'+
            '<p class="blog-news__title">' + arr[randomNumber1].title + '</p>' +
            '<p class="blog-news__text">' + arr[randomNumber1].text + '</p>' +
            '</a>' +
            '</li>'
        );
        $(item2).toggleClass(activeClass).html(
            '<li class="blog-news__item">' +
            '<div class="blog-news__date">' + arr[randomNumber2].date + '</div>' +
            '<a class="blog-news__link">' +
            '<p class="blog-news__title">' +  arr[randomNumber2].title +'</p>' +
            '<p class="blog-news__text">' + arr[randomNumber2].text + '</p>' +
            '</a>' +
            '</li>'
        ) // generate content to news blog
    };
    this.AddContentToTwitter = function() {
        $(item1).toggleClass(activeClass).html (
        '<span class="twitter-widget__link">' +
        '<a href="' + arr[randomNumber1].twitterHref +'">' + arr[randomNumber1].twitterName + '</a>' + ' ' +
        arr[randomNumber1].twitterText +
        '</span>' +
        '<div class="twitter-widget__date">' + arr[randomNumber1].twitterDate + ' days ago' +
        '</div>'
        );
        $(item2).toggleClass(activeClass).html (
            '<span class="twitter-widget__link">' +
            '<a href="' + arr[randomNumber1].twitterHref +'">' + arr[randomNumber2].twitterName + '</a>' + ' ' +
            twitterArray[randomNumber2].twitterText +
            '</span>' +
            '<div class="twitter-widget__date">' + arr[randomNumber2].twitterDate + ' days ago' +
            '</div>'
        );  // generate content to twitter widget
    }
}

var newsChange = new randomNews('#news1', '#news2', 'blog-news__item-inactive', newsArray);
var twitterTwit = new randomNews('#twitter1', '#twitter2', 'blog-news__item-inactive', twitterArray);

function change() {
    newsChange.addContentToNews();
    twitterTwit.AddContentToTwitter();

    counter++;
    if (counter >= newsArray.length) {
        counter = 0;
    }
}
setTimeout(function() {
    setInterval(change, 2500);
}, 2500)
//change content every 5 seconds (2500 fadeOut, 2500 fadeIn)