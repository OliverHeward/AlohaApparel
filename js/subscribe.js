$(function() {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $(".subscribe").on("click", function() {
        $(".subscribe").text("Clicked"),
        alert("Thanks for subscribing!");
    })
});