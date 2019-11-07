$(function() {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    nav: true,
    navClass:['slider__nav--left', 'slider__nav--right'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});
