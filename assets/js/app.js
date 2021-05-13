$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    }); 
  });
  
jQuery(document).ready(function($) {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar');
  
      if (scrollPos > 50) {
        navbar.addClass('alt-color');
      } else {
        navbar.removeClass('alt-color');
      }
    });
  });
