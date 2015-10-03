(function(){
  // alert("hi");
})();

//This creates a better transition then in document ready.
$(window).load(function() {
     $('video').animate({opacity: '1'}, 800);
});

var scrollTimeout;

$(window).on('scroll', function() {
  // console.log("SCROLLING...");
  if ($(window).width() >= 786) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkAndMoveNavbarPosition(), 250);
    recalculateNavbarPosition();
  }
});


var isFixed = false;
var navbarHeight;
var deltaLocation;

function checkAndMoveNavbarPosition() {
  recalculateNavbarPosition();
  if (!isFixed && $(window).scrollTop() > deltaLocation) {
    $('header').css({position: "fixed", top: "0px", bottom: ""});
    isFixed = true;
  }
  else if (isFixed && $(window).scrollTop() < deltaLocation) {
	$('header').css({position: "absolute", top: "", bottom: "0px"});
    isFixed = false;
    $('header').show();
  }
}


function recalculateNavbarPosition() {
  deltaLocation = $(window).height() - $('navbar').height()-50;
  // console.log($('#navbar').height());
}

$(window).resize(adjustBanner());

function adjustBanner() {
  var banner = document.getElementById("entry-point");
  banner.style.height = window.innerHeight + "px";

}
