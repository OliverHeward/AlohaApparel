$('.buy-button').parent('button').click(function() {
     var count = parseInt($('.inc').text())++1;
     $('.inc').text(count);
 });