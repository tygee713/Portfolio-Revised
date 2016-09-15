$(document).ready(function() {
  $('body').scrollspy({ target: "#myNav", offset: 50 });
  // $('.navbar').css('bottom', $('#home').offset().top + $('#home').outerHeight(true) - 50 + 'px');
})

$('nav a').on('click', function(e) {
  e.preventDefault();
  var targetID = e.currentTarget.id + "Section";

  $('body').animate({
    scrollTop: $('#' + targetID).position().top - 50
  }, 500)
})

var num = $('#aboutSection').offset().top - 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= num) {
        $('#myNav').removeClass('navbar-fixed-bottom');
        $('#myNav').addClass('navbar-fixed-top');
    } 
    else {
         $('#myNav').removeClass('navbar-fixed-top');
         $('#myNav').addClass('navbar-fixed-bottom');
    }
});