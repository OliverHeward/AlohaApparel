var counter = 0;

$(function() {

    $(".buy-button").click(function() {
        counter++;

        $("#cart-counter").text(counter);
        $(this).text('Added To Basket').css('background', '#e2574c');
    })

});