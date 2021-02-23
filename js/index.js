(function($) {

  $(document).ready(function() {
    productOwl = $('#product-carousel').owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      nav: false,
      center: false,
      dots: true,
    })

  });
})($);
