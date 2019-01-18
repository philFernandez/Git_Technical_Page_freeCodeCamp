function expandHamburger(e) {
  // get the div which hold the links
  let mobileNav = document.getElementById("mobile-nav");
  // get the links themselves
  // let links = document.getElementsByTagName("a");
  let links = document.getElementsByClassName("nav-link");

  // if the navigation menu is already being shown, then hide it
  if (mobileNav.style.width == "97.5vw") {
    for (link of links) {
      link.style.display = "none";
    }
    mobileNav.style.cssText = "width: 0; height: 0; border: 0";

    // else if the navigation menu is hidden then show it
  } else {
    for (link of links) {
      link.style.display = "block";
    }
    mobileNav.style.cssText =
      "width: 97.5vw; height: 56rem; border: 0.5rem solid black;";
  }
}

let navigationBar = document.getElementById("navbar");
function handleNav(e) {
  if (navigationBar.style["display"] === "flex") {
    navigationBar.style.display = "none";
  } else {
    navigationBar.style.display = "flex";
  }
  console.log(navigationBar.style["display"]);
}

window.addEventListener("click", handleNav);
