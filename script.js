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

// Optional: add a hover effect to project images
/*
const projectImages = document.querySelectorAll('.project-image');
projectImages.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.style.opacity = '0.8';
  });
  image.addEventListener('mouseleave', () => {
    image.style.opacity = '1';
  });
});