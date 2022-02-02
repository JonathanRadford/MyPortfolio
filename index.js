const project1 = document.getElementById("Project-Text1");
const project2 = document.getElementById("Project-Text2");
const project3 = document.getElementById("Project-Text3");
const project4 = document.getElementById("Project-Text4");

function myFunction(x) {
  x.classList.toggle("change");
}

const changeClass = () => {
  const navbar = document.getElementById("navbar-container");
  const NavbarLinks = document.getElementById("Navbar__Links");
  if (navbar.className == "container change") {
    NavbarLinks.className = "smallNav";
  } else {
    NavbarLinks.className = "navbar";
  }
};

// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
