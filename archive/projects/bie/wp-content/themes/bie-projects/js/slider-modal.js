( function( $ ) {

  const toggleModalClass = () => {
    $('.bie-slider-modal').toggleClass('is-active');
    $('.bie-slider-modal-overlay').toggleClass('is-active');
  }
  const closeModal = () => {
    $('.bie-slider-modal').removeClass('is-active');
    $('.bie-slider-modal-overlay').removeClass('is-active');

  }

  $('.bie-modal-btn .wp-block-media-text__media').on('click', toggleModalClass);
  $('.bie-modal-close, .bie-slider-modal-overlay').on('click', closeModal);

  $('#slider-modal').sliderPro({
      width: 900,
      arrows: true,
      autoHeight: true,
      autoplay: false,
      buttons: false,
      fadeArrows: false,
      updateHash: true
    });

}( jQuery ) );