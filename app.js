var hasBeenClicked = false;

function expandHamburger(e) {
  let mobileNav = document.getElementById("mobile-nav");
  if (!hasBeenClicked) {
    mobileNav.style.width = "75%";
    mobileNav.style.height = "700px";
    hasBeenClicked = true;
  } else {
    mobileNav.style.width = "0";
    mobileNav.style.height = "0";
    hasBeenClicked = false;
  }
}
