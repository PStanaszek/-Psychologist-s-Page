(function sliderAnimation() {
    $('.slider').each(function () {
        var $this = $(this);
        var $group = $this.find('.slide-group');
        var $slides = $this.find('.slide');
        var buttonArray = [];

        var currentIndex = 0;

        var timeout;

        function move(newIndex) {
            var animateLeft, slideLeft;
            advance();


            if ($group.is(':animated') || currentIndex === newIndex) {
                return;
            }


            if (newIndex > currentIndex) {
                slideLeft = '100%';
                animateLeft = '-100%';
            } else { // Otherwise
                slideLeft = '-100%';
                animateLeft = '100%';
            }

            $slides.eq(newIndex).css({
                left: slideLeft,
                display: "flex",
                width: "100%"
            });

            $this.find('.slide span').eq(newIndex).addClass("animated zoomIn");

            $group.animate({
                left: animateLeft
            }, function () {
                $slides.eq(currentIndex).css({
                    display: 'none'
                });
                $slides.eq(newIndex).css({
                    left: 0
                });

                $group.css({
                    left: 0
                });
                currentIndex = newIndex;
            });
        }

        function advance() {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1);
                } else {
                    move(0);
                }
            }, 7000);
        }


        advance();


    });
})();

//smooth scroll to the section that was clicked on the navbar                                        
$(document).on('click', 'a[href^="#"]', function (e) {
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
    $('body, html').animate({
        scrollTop: (pos)
    });

});

var $navbarButton = $("button");
var $section = $("section");
$navbarButton.on("click", function () {
    $section.toggleClass("clicked")

});

//slide  offer's divs



/* .toggleClass("animated slieInLeft");*/



function callContactAnimate() {
    var $callDivsText = $(".call");
    $(".call span").hide();
    $callDivsText.on("mouseover, click", function () {
        $(".call span").fadeToggle();
        $callDivsText.toggleClass("clickedCall");

    });
};

callContactAnimate();



/*Contact Google Map coords 49.7390693,19.5799632,19.5*/

function initMap() {
    console.log("Maps ok")
    var position = {
        lat: 49.7390693,
        lng: 19.5799632
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: position
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: "Psycholog Daria Stanaszek Sucha Beskidzka Mickiewicza 43 "
    });
}
