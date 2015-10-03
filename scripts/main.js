(function(){
  initializeNavigation();
  getSectionYPositions();
})();

function initializeNavigation() {
  var options = document.querySelectorAll("header a");

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
      selectMenuOption(this);
    });
  }
}

function selectMenuOption(option) {
  var options = document.querySelectorAll("header a");

  for (var j = 0; j < options.length; j++) {
    options[j].classList.remove("active");
  }
  option.classList.add("active");
}
var aboutYPos, faqYPos, sponsorsYPos;

function getSectionYPositions() {
  var splash = 0,
      about = document.getElementById("about"),
      faq = document.getElementById("faq"),
      sponsors = document.getElementById("sponsors");

  aboutYPos = $(about).offset().top;
  faqYPos = $(faq).offset().top;
  sponsorsYPos = $(sponsors).offset().top;
}

function updateMenuOptionSelection() {
  var options = document.querySelectorAll("header a"),
      aboutOption = options[0],
      faqOption = options[1],
      sponsorsOption = options[2],
      registerOption = options[3],
      error = 250;

  if ($(window).scrollTop() < aboutYPos + error) {
    selectMenuOption(registerOption);
  } else if ($(window).scrollTop() < faqYPos + error) {
    selectMenuOption(aboutOption);
  } else if ($(window).scrollTop() < sponsorsYPos + error) {
    selectMenuOption(faqOption);
  } else {
    selectMenuOption(sponsorsOption);
  }
}

$(window).resize(adjustBanner());

function adjustBanner() {
  var banner = document.getElementById("entry-point");
  banner.style.height = window.innerHeight + "px";
}












/*//
// Initial script
*///

//This creates a better transition then in document ready.
$(window).load(function() {
     $('video').animate({opacity: '1'}, 400);
});

var scrollTimeout;

$(window).on('scroll', function() {
  // console.log("SCROLLING...");
  if ($(window).width() >= 786) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkAndMoveNavbarPosition(), 250);
    recalculateNavbarPosition();
  }
  updateMenuOptionSelection();
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


