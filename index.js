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
