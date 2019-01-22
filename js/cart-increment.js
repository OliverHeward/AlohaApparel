var itemCount = 0;

$('.buy-button').click(function (){
  itemCount ++;
  $('.cart').html(itemCount).css('display', 'block');
}); 

$('.clear').click(function() {
  itemCount = 0;
  $('#itemCount').html('').css('display', 'none');
  $('#cartItems').html('');
}); 