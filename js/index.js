(function($) {
  
  function setAnimate() {
    TweenMax.set('section.introduce h1', {
      opacity: 0,
      y: 50,
    })

    TweenMax.set('section.introduce .part:nth-of-type(1) .info,section.introduce .part:nth-of-type(2) .pic,section.introduce .part:nth-of-type(3) .info,section.introduce .part:nth-of-type(4) .pic,section.introduce .part:nth-of-type(5) .info', {
      opacity: 0,
      x: 100,
    })

    TweenMax.set('section.introduce .part:nth-of-type(1) .pic,section.introduce .part:nth-of-type(2) .info,section.introduce .part:nth-of-type(3) .pic,section.introduce .part:nth-of-type(4) .info,section.introduce .part:nth-of-type(5) .pic', {
      opacity: 0,
      x: -100,
    })
    
    TweenMax.set('section.certification h1', {
      opacity: 0,
      y: 50,
    })
    
    TweenMax.set('section.certification .box .pic', {
      opacity: 0,
      y: 50,
    })

  }
  function doAnimate() {
    var controller = new ScrollMagic.Controller();
    // ------------------------------------------------------------------------------------------------------

    var itemTween1 = new TimelineMax()
      .add(TweenMax.to('section.introduce h1', 1, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))

    var itemScene1 = new ScrollMagic.Scene({
      triggerElement: "section.introduce h1",
      offset: -100, //指標位移
      triggerHook: .5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween1)
      // .addIndicators({ name: "item01" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween2 = new TimelineMax()
      .add(TweenMax.to('section.introduce .part:nth-of-type(1) .info', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('section.introduce .part:nth-of-type(1) .pic', 0.5, { opacity: 1, x: 0, y: 0,delay:-0.5, ease: Power1.easeOut }))

    var itemScene2 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(1)",
      offset: 0, //指標位移
      triggerHook: .6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween2)
      // .addIndicators({ name: "item02" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween3 = new TimelineMax()
      .add(TweenMax.to('section.introduce .part:nth-of-type(2) .info', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('section.introduce .part:nth-of-type(2) .pic', 0.5, { opacity: 1, x: 0, y: 0,delay:-0.5, ease: Power1.easeOut }))

    var itemScene3 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(2)",
      offset: 0, //指標位移
      triggerHook: .6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween3)
      // .addIndicators({ name: "item03" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween4 = new TimelineMax()
      .add(TweenMax.to('section.introduce .part:nth-of-type(3) .info', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('section.introduce .part:nth-of-type(3) .pic', 0.5, { opacity: 1, x: 0, y: 0,delay:-0.5, ease: Power1.easeOut }))

    var itemScene4 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(3)",
      offset: 0, //指標位移
      triggerHook: .6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween4)
      // .addIndicators({ name: "item04" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween5 = new TimelineMax()
      .add(TweenMax.to('section.introduce .part:nth-of-type(4) .info', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('section.introduce .part:nth-of-type(4) .pic', 0.5, { opacity: 1, x: 0, y: 0,delay:-0.5, ease: Power1.easeOut }))

    var itemScene5 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(4)",
      offset: 0, //指標位移
      triggerHook: .6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween5)
      // .addIndicators({ name: "item05" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween6 = new TimelineMax()
      .add(TweenMax.to('section.introduce .part:nth-of-type(5) .info', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('section.introduce .part:nth-of-type(5) .pic', 0.5, { opacity: 1, x: 0, y: 0,delay:-0.5, ease: Power1.easeOut }))

    var itemScene6 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(5)",
      offset: 0, //指標位移
      triggerHook: .6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween6)
      // .addIndicators({ name: "item06" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

      var itemTween7 = new TimelineMax()
      .add(TweenMax.to('section.certification h1', 1, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))

      var itemScene7 = new ScrollMagic.Scene({
      triggerElement: "section.certification h1",
      offset: -100, //指標位移
      triggerHook: .5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween7)
      // .addIndicators({ name: "item07" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

      var itemTween8 = new TimelineMax()
    .add(TweenMax.staggerTo('section.certification .box .pic', .5, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.2))

      var itemScene8 = new ScrollMagic.Scene({
      triggerElement: "section.certification .box",
      offset: 0, //指標位移
      triggerHook: .5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween8)
      // .addIndicators({ name: "item08" }) // 指標顯示
      .addTo(controller);
  }


  $(document).ready(function() {
    var productLength = $('#product-carousel figure').length
    $('#dot-carousel').append($('#product-carousel').html())
    productOwl = $('#product-carousel').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      nav: false,
      center: false,
      dots: false,
      mouseDrag: false,
      touchDrag: false
    })

    dotOwl = $('#dot-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: productLength,
      nav: false,
      center: true,
      dots: false,
      onInitialized: function (e) {
        productOwl.trigger("to.owl.carousel", [0]);
      },
    })

    for(let i = 0;i< productLength;i++){
      $(".dot-box .product"+(i+1)).on("click", function () {
        dotOwl.trigger("to.owl.carousel", [i]);
      });
    }
    
    dotOwl.on("changed.owl.carousel", function (e) {
      productOwl.trigger("to.owl.carousel", [e.item.index % productLength]);
    });
    
    $('.buy-btn').on('click', function() {
      $('html,body').animate({ scrollTop: $('section.prodcut').offset().top-$('section.prodcut').height()/4 }, 500);
    })

    var isShowProductInfo = false;
    $('section.product-info .btn').on('click',function () {
      if(isShowProductInfo){
        $('section.product-info .info .content').removeClass('open')
        $(this).text('展開資訊')
        isShowProductInfo = false
      }else{
        $('section.product-info .info .content').addClass('open')
        $(this).text('收合資訊')
        isShowProductInfo = true
      }
    })

    let carouselArr=[];
    for (let i = 0; i <$('.carousel-box').length; i++) {
      carouselArr[i] = $('.carousel-box').eq(i).owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        nav: false,
        center: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
          769:{
            items: 3
          }
        }
      })
      $('section.carousel').eq(i).find('.arrow-left').on('click',function () {
        carouselArr[i].trigger('prev.owl.carousel');
      })
      $('section.carousel').eq(i).find('.arrow-right').on('click',function () {
        carouselArr[i].trigger('next.owl.carousel');
      })
    }

    setAnimate();
    doAnimate();

  });
})($);
