(function($) {

    $(document).ready(function() {

        $('.main-carousel').flickity({
            freeScroll: true,
            cellAlign: '50px',
            // wrapAround: true,
            groupCells: 2,
            contain: true,
        });

    });


})(jQuery)

var counter = 0;

$(function() {

    $(".buy-button").click(function() {
        counter++;

        $("#cart-counter").text(counter);
        $(this).text('Added To Basket').css('background', '#e2574c');
    });

});