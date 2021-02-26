(function($) {

  function countSubTotal(_this) {
    var price = parseInt($(_this).parents('.product-list').find('.price-num').html());
    var num = parseInt($(_this).parent().find('.product-num').val());
    $(_this).parents('.product-list').find('.subtotal-num').html(price*num)
  }

  $(document).ready(function() {
    $('.product-num').on('keyup',function (e) {
      countSubTotal($(this))
    })
    $('.minus').on('click',function () {
      countSubTotal($(this))
    })
    $('.plus').on('click',function () {
      countSubTotal($(this))
    })

  });
})($);
