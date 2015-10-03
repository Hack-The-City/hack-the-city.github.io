(function(){
  initializeNavigation();
  getSectionYPositions();

  initializeInputField();

  initializeFaq();
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

function initializeInputField() {
  var input = document.getElementsByTagName("input")[0],
      submitButton = document.getElementsByTagName("button")[0];
  
  input.addEventListener('input', function() {
    var value = this.value,
        atSymbolPosition = value.indexOf("@"),
        hasAtSymbol = atSymbolPosition > 0,
        hasTextAfterAtSymbol = atSymbolPosition !== value.length - 1;
        hasDotAfterAtSymbol = value.indexOf(".") > atSymbolPosition;
        hasLettersBeforeDot = (value.indexOf(".") - 1) !== atSymbolPosition;
        dotIsNotLast = value.indexOf(".") !== value.length - 1;

    if (hasAtSymbol && 
        hasTextAfterAtSymbol &&
        hasDotAfterAtSymbol &&
        hasLettersBeforeDot &&
        dotIsNotLast) {
      submitButton.disabled = false;
      submitButton.classList.remove("invalid");
      submitButton.classList.add("valid");
    } else {
      submitButton.disabled = true;
      submitButton.classList.remove("valid");
      submitButton.classList.add("invalid");
    }
  });
}

function initializeFaq() {
  var about = document.getElementById("faq-about"),
      travel = document.getElementById("faq-travel"),
      hacking = document.getElementById("faq-hacking"),
      other = document.getElementById("faq-other"),
      options = [about, travel, hacking, other];

  about.addEventListener('click', function() {filterFaqBy("about");});
  travel.addEventListener('click', function() {filterFaqBy("travel");});
  hacking.addEventListener('click', function() {filterFaqBy("hacking");});
  other.addEventListener('click', function() {filterFaqBy("other");});

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
      for (var j = 0; j < options.length; j++) {
        options[j].classList.remove("selected");
      }
      this.classList.add("selected");
    });
  }
}

function filterFaqBy(filter) {
  switch(filter){
    case "about":
      showFaqsRelatingTo("about");
      break;
    case "travel":
      showFaqsRelatingTo("travel");
      break;
    case "hacking":
      showFaqsRelatingTo("hacking");
      break;
    case "other":
      showFaqsRelatingTo("other");
      break;
    default:
      break;
  }
}

function showFaqsRelatingTo(className) {
  var faq_all = document.getElementsByClassName("faq-all"),
      class_faqs = document.getElementsByClassName("faq-" + className);

  hideUnrelatedFaqs();

  for (var i = 0; i < faq_all.length; i++) {
    faq_all[i].style.display = 'inline-block';
  }

  for (var j = 0; j < class_faqs.length; j++) {
    class_faqs[j].style.display = 'inline-block';
  }
}

function hideUnrelatedFaqs() {
  var faqs = document.getElementsByClassName("faq");

  for (var i = 0; i < faqs.length; i++) {
    faqs[i].style.display = 'none';
  }
}


function selectMenuOption(option) {
  var options = document.querySelectorAll("header a");

  for (var j = 0; j < options.length; j++) {
    options[j].classList.remove("active");
  }
  option.classList.add("active");
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


