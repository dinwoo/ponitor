(function($) {

  $(document).ready(function() {
    $('.product-num').on('keyup',function (e) {
      console.log(e.keyCode)
      if((e.keyCode<48||e.keyCode>57)&&e.keyCode!=8){
        $(this).val(1);
      }
    })
    $('.minus').on('click',function () {
      var $el = $(this).parent().find('.product-num');
      var num = $el.val()==1?1:$el.val()-1;
      $el.val(num);
    })
    $('.plus').on('click',function () {
      var $el = $(this).parent().find('.product-num');
      $el.val(parseInt($el.val())+1);
    })

  });
})($);
