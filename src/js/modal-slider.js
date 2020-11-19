$(document).ready(function(){
    var button = $('#buttonA');
    var modal = $('#modal');
    var close = $('#closeA');
    var block = $('#content')

    button.on('click', function(){
        modal.addClass('modal__active');
        $('body').addClass('modal-open');

        $('.sliderA-A').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.sliderA-B',
            centerMode: true,
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 1366,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
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
      
          $('.sliderA-B').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.photo-arrows__left'),
            nextArrow: $('.photo-arrows__right'),
            fade: true,
            dots: false,
            asNavFor: '.sliderA-A'
          });
    });

    close.on('click', function() {
        modal.removeClass ('modal__active');
        $('.sliderA-A, .sliderA-B').slick('unslick');
        $('body').removeClass('modal-open');
    });
});




