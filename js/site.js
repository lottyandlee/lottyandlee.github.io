$(function() {
  $('.page-scroll').bind('click', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 700, 'easeInOutExpo');
    e.preventDefault();
  });
});

$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

$('body').scrollspy({
  offset: 35,
  target: '.navbar'
});
