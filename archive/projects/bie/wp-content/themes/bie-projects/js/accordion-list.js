(function ($) {
  const toggleModalClass = (event) => {
    $(event.target).toggleClass('is-active');
    $(event.target).children('ul').slideToggle(300);
  }

  $('.bie-accordion-list > li').on('click', toggleModalClass);
}(jQuery));