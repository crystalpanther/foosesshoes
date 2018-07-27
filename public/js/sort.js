/**
 * Created by elina on 7/24/2018.
 */
function addData() {
    $('.product__card').each(function () {
        var priceNumber = $(this).find('.price__number').text().replace('$', '').replace(',', '.');
        parseFloat(priceNumber);

        $(this).attr('data-price', priceNumber);
    });
}
addData();


$(document).on("change", ".view-as__select", function() {
    var sortingMethod = $(this).val();

    if(sortingMethod == 'SortByPrice')
    {
        sortProductsPriceAscending();
    }
    else if(sortingMethod == 'SortAlphabetically')
    {
        sortProductsByAlphabet();
    }
    else if (sortingMethod == 'SortByAvailability') {
        sortByAvailability();
    }

});

function sortProductsPriceAscending()
{
    var products = $('.product__card');
    products.sort(function(a, b) {
        return $(a).data("price") - $(b).data("price");
    });

    $(".product__line").html(products);
}
function sortProductsByAlphabet()
{
    var products = $('.product__card');
    products.sort(function(a, b) {
        var keyA = $(a).find('.product__name').text();
        var keyB = $(b).find('.product__name').text();
        return (keyA > keyB) ? 1 : 0;
    });
    $(".product__line").html(products);
}
function sortByAvailability() {
    var products = $('.product__card');
    products.sort(function(a, b) {
        return $(a).data("availbl") < $(b).data("availbl");
    });
    $(".product__line").html(products);
}