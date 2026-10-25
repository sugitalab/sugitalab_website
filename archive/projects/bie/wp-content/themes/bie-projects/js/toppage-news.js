( function( $ ) {
  var dsbNews = $(".bie-info-news-area");
  $.ajax({ url: "news/", dataType: "html" }).then(function (data) {
    var news = $($.parseHTML(data));
    var ninsert = 0;
    news.find("dl").each(function (i, dl) {
      $(dl).find("dt,dd").each(function (j, item) {
        if (ninsert <= 6) {
          $(item).appendTo(dsbNews);
          if (item.tagName == "DD") {
            ninsert++;
          }
        } else {
          return false;
        }
      });
    });
  });
}( jQuery ) );