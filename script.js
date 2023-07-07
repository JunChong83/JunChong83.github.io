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
    offset: 10
  })

  // Collapse navbar on click
  $(".navbar-collapse a").click(function() {
    $(".navbar-collapse").collapse('hide');
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


  // Project
  $(document).ready(function() {
    var showMoreBtn = $('#show-more-btn');
    var hiddenCards = $('.col-lg-4:hidden');
    
    // Initially hide the additional cards
    hiddenCards.hide();
    
    // Show more cards when the button is clicked
    showMoreBtn.click(function() {
      hiddenCards.slice(0, 3).slideDown();
      hiddenCards = $('.col-lg-4:hidden');
      
      // Hide the "Show More" button if no more hidden cards
      if (hiddenCards.length === 0) {
        showMoreBtn.hide();
      }
    });
  });
  
  // Contact
  $("#contact-form").submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "send-message.php",
      data: formData,
      success: function() {
        $("#contact-form").trigger("reset");
        alert("Your message has been sent!");
      },
      error: function() {
        alert("Sorry, there was a problem submitting your message. Please try again later.");
      }
    });
  });

  // Footer
  var footer = $('footer');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      footer.fadeIn();
    } else {
      footer.fadeOut();
    }
  });

  // Files
  var downloadLinks = document.querySelectorAll('a[download]');
  downloadLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });
});
  