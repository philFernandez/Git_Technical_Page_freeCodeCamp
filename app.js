function expandHamburger(e) {
  let mobileNav = document.getElementById("mobile-nav");
  let links = document.getElementsByTagName("a");

  if (mobileNav.style.width == "100vw") {
    for (link of links) {
      link.style.display = "none";
    }
    mobileNav.style.cssText = "width: 0; height: 0;";
  } else {
    for (link of links) {
      link.style.display = "block";
    }
    mobileNav.style.cssText = "width: 100vw; height: 560px;";
  }
}
