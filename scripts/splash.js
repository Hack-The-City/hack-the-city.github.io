function initializeSplash() {
  initializeInputField();
}

$(window).load(function() {
	fadeInVideo();
});

$(window).resize(adjustBanner());


function fadeInVideo() {
     $('video').animate({opacity: '1'}, 800);	
}

function adjustBanner() {
  var banner = document.getElementById("entry-point");
  banner.style.height = window.innerHeight + "px";
}


function initializeInputField() {
  var input = document.getElementsByTagName("input")[0],
      submitButton = document.getElementsByTagName("button")[0];
  
  input.addEventListener('input', function() {
    var value = this.value,
        atSymbolPosition = value.indexOf("@"),
        hasAtSymbol = atSymbolPosition > 0,
        hasTextAfterAtSymbol = atSymbolPosition !== value.length - 1,
        hasDotAfterAtSymbol = value.indexOf(".") > atSymbolPosition,
        hasLettersBeforeDot = (value.indexOf(".") - 1) !== atSymbolPosition,
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
