$(document).ready(function() {
  $('body').scrollspy({ target: "#myNav", offset: 50 });
})

$('nav a').on('click', function(e) {
  e.preventDefault();
  var targetID = e.currentTarget.id + "Section";

  $('body').animate({
    scrollTop: $('#' + targetID).position().top + 1
  }, 500)
})

var num = $('#aboutSection').offset().top - 50; //number of pixels before fixing nav bar to top

$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= num) {
        $('#myNav').removeClass('navbar-fixed-bottom');
        $('#myNav').addClass('navbar-fixed-top');
        $('#aboutSection').css('margin-top', '50px');
        console.log($('#aboutSection').offset().top);

    } 
    else {
         $('#myNav').removeClass('navbar-fixed-top');
         $('#myNav').addClass('navbar-fixed-bottom');
         $('#aboutSection').css('margin-top', '0px');
         console.log($('#aboutSection').offset().top);
    }
});