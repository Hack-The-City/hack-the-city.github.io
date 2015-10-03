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
