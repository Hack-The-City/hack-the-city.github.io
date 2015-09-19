	var scrollTimeout;
	$(window).on('scroll', function() {
    if ($(window).width() >= 786) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkAndMoveNavbarPosition(), 250);
    }
  });

  /* move the nav bar as appropriate */
  var isFixed = false;
  var navbarHeight;
  var deltaLocation;
  recalculateNavbarPosition();
  function checkAndMoveNavbarPosition() {
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
    navbarHeight = $('#navbar').outerHeight();
    deltaLocation = $('#splash').outerHeight() - navbarHeight;
  }
});