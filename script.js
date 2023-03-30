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

$(document).ready(function() {
    // Smooth scrolling on click
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 100
        }, 1000);
      }
    });
    
    // Filter projects
    $('.filter-btn').on('click', function() {
      var category = $(this).attr('data-category');
      
      $('.project').fadeOut(500);
      
      setTimeout(function() {
        if(category == 'all') {
          $('.project').fadeIn(500);
        } else {
          $('.' + category).fadeIn(500);
        }
      }, 500);
    });
  });
  