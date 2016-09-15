$(document).ready(function() {
  var homeheight = $(window).height();
  $('#home').css('height', homeheight - 50 + 'px');
  $('body').scrollspy({ target: "#myNav", offset: 50 });
})

$('nav a').on('click', function(e) {
  e.preventDefault();
  var targetID = e.currentTarget.id + "Section";

//if statements fix issue where animation would go too far in the about section due to the navbar height
  if (targetID == "aboutSection") {
    if ($(window).scrollTop() > $('#aboutSection').offset().top) {
      $('body').animate({
        scrollTop: $('#' + targetID).position().top + .01
      }, 500)
    }
    else
    {
      $('body').animate({
        scrollTop: $('#' + targetID).position().top - 50
      }, 500)
    }
  }
  else {
    $('body').animate({
      scrollTop: $('#' + targetID).position().top + .01
    }, 500)
  }
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