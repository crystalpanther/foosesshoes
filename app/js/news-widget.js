/**
 * Created by elina on 7/24/2018.
 */

function blogNews() {
    var i = 0;
    $('.blog-news__item').each(function(){
        i++;
        $(this).attr('id', 'news'+i);
    });
}
blogNews();


var articles = {
    "News1": [
        {
            "date": "11 Apr",
            "title": "Title1",
            'text': 'Text1'
        },
        {
            "date": "15 May",
            "title": "Title2",
            'text': 'Text2'
        },
        {
            "date": "25 May",
            "title": "Title1",
            'text': 'Text3'
        }
    ],
    "News2": [
        {
            "date": "12 Apr",
            "title": "Title1",
            'text': 'Text2'
        },
        {
            "date": "15 June",
            "title": "Title2",
            'text': 'Text3'
        },
        {
            "date": "18 July",
            "title": "Title1",
            'text': 'Text4'
        }
    ]
};
var date = $('.blog-news__date');
var title = $('.blog-news__title');
var text = $('.blog-news__text');
var news1 = $('#news1');
var news2 = $('#news2');

var arr = [
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
];
var counter = 0;

setInterval(change, 2500);
function change() {
    if (counter % 2 == 0) {
        news1.find(date).text(arr[counter].date);
        news1.find(title).text(arr[counter].title);
        news1.find(text).text(arr[counter].text);
    }
    else {
        news2.find(date).text(arr[counter].date);
        news2.find(title).text(arr[counter].title);
        news2.find(text).text(arr[counter].text);
    }
    counter++;
    if (counter >= arr.length) {
        counter = 0;
    }
}

