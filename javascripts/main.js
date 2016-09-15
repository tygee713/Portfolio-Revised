$(document).ready(function() {
  $('body').scrollspy({ target: "#myNav", offset: 50 });
  var homeheight = $(window).height();
  $('#home').css('height', homeheight - 50 + 'px');
})

$('nav a').on('click', function(e) {
  e.preventDefault();
  var targetID = e.currentTarget.id + "Section";

  $('body').animate({
    scrollTop: $('#' + targetID).position().top + 1
  }, 500)
})

$(window).bind('scroll', function () {
  var num = $('#aboutSection').offset().top - 50; //number of pixels before fixing nav bar to top
    if ($(window).scrollTop() >= num) {
        $('#myNav').removeClass('navbar-fixed-bottom');
        $('#myNav').addClass('navbar-fixed-top');
        $('#aboutSection').css('margin-top', '50px');
    } 
    else {
         $('#myNav').removeClass('navbar-fixed-top');
         $('#myNav').addClass('navbar-fixed-bottom');
         $('#aboutSection').css('margin-top', '0px');
    }
});