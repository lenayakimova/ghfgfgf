
$(document).ready(function(){
      $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        prevArrow: $('.slider-arrow__top'),
        nextArrow: $('.slider-arrow__bottom'),
        vertical: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider-arrows__left'),
        nextArrow: $('.slider-arrows__right'),
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
      });

      $('.i').click(function(){
        var $this = $(this);
        $('.active__slide').removeClass('active__slide');
        $this.addClass('active__slide');
      });
  });



