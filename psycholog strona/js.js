//slider
$('.slider').each(function() {              // For every slider
  var $this   = $(this);                    // Current slider
  var $group  = $this.find('.slide-group'); // Get the slide-group (container)
  var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
  var buttonArray  = [];                    // Create array to hold navigation buttons
  var currentIndex = 0;                     // Hold index number of the current slide
  var timeout;                              // Sets gap between auto-sliding

  function move(newIndex) {          // Creates the slide from old to new one
    var animateLeft, slideLeft;      // Declare variables

    advance();                       // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }


    if (newIndex > currentIndex) {   // If new item > current
      slideLeft = '100%';            // Sit the new slide to the right
      animateLeft = '-100%';         // Animate the current group to the left
    } else {                         // Otherwise
      slideLeft = '-100%';           // Sit the new slide to the left
      animateLeft = '100%';          // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
      
    $this.find('.slide span').eq(newIndex).addClass("animated zoomIn");

    $group.animate( {left: animateLeft}, function() {    // Animate slides and
      $slides.eq(currentIndex).css( {display: 'none'} ); // Hide previous slide      
      $slides.eq(newIndex).css( {left: 0} );// Set position of the new item
        
      $group.css( {left: 0} );               // Set position of group of slides
      currentIndex = newIndex;               // Set currentIndex to the new image
    });
  }

  function advance() {                     // Used to set 
    clearTimeout(timeout);                 // Clear previous timeout
    timeout = setTimeout(function() {      // Set new timer
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1);            // Move to next slide
      } else {                             // Otherwise
        move(0);                           // Move to the first slide
      }
    }, 7000);                              // Milliseconds timer will wait
  }


  advance();                          // Script is set up, advance() to move it


});
//smooth scroll to the section that was clicked on the navbar                                        
  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    var $offerDivs = $('div[id="offeDiv"]');

    $offerDivs.toggleClass("animated fadeIn"); 
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: (pos)});
      
});

var $navbarButton = $("button");
var $section = $("section");
$navbarButton.on("click", function(){
    $section.toggleClass("clicked")
    
});

//slide  offer's divs


   
   /* .toggleClass("animated slieInLeft");*/



function callContactAnimate(){  
var $callDivsText = $(".call");
$(".call span").hide();
$callDivsText.on( "mouseover, click", function(){
    $(".call span").fadeToggle();
    $callDivsText.toggleClass("clickedCall");

 });
};

callContactAnimate();



/*Contact Google Map coords 49.7390693,19.5799632,19.5*/

function initMap() {
    console.log("Maps ok")
        var position = {lat: 49.7390693, lng: 19.5799632};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: position
        });
        var marker = new google.maps.Marker({
          position: position,
          map: map,
          title:"Psycholog Daria Stanaszek Sucha Beskidzka Mickiewicza 43 "
        });
      }