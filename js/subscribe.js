var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

$(function() {
    $(".subscribe").on("click", function() {
    	$(this).val() = regex,
        $(".subscribe").text("Clicked"),
        alert("Thanks for subscribing!");
    })
});