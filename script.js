// Custom JavaScript
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '.navbar',
    offset: 50
  })

  // Collapse navbar on click
  $(".navbar-collapse a").click(function() {
    $(".navbar-collapse").collapse('hide');
  });
});