function initializeNavigation() {
  var options = document.querySelectorAll("header a");

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
      selectMenuOption(this);
    });
  }

  getSectionYPositions();
};

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
      error = -150;

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

$(window).on('scroll', function() {
  var scrollTimeout;

  if ($(window).width() >= 786) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkAndMoveNavbarPosition(), 250);
    recalculateNavbarPosition();
  }

  checkAndMoveNavbarPosition();

  updateMenuOptionSelection();
});


var deltaLocation;
var isFixed;

function checkAndMoveNavbarPosition() {
  
  recalculateNavbarPosition();

  if (!isFixed && $(window).scrollTop() > deltaLocation) {
    $('header').css({position: "fixed", top: "0", bottom: "100vh"});
    console.log('hell');
    isFixed = true;
  }
  else if (isFixed && $(window).scrollTop() <= deltaLocation ) {
    $('header').css({position: "absolute", top: $(window).height() - $('header').height() + "px", bottom: "0"});
    console.log('yeah');
    $('header').show();
    isFixed = false;
  }
};


function recalculateNavbarPosition() {
  deltaLocation= $(window).height() + $('header').height() - 95;
  // deltaLocation = $(window).height() - $('header').height();
  // console.log($('#navbar').height());
}
