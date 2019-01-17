function expandHamburger(e) {
  let mobileNav = document.getElementById("mobile-nav");
  let links = document.getElementsByTagName("a");

  if (mobileNav.style.width == "75%") {
    for (link of links) {
      link.style.display = "none";
    }

    mobileNav.style.width = "0";
    mobileNav.style.height = "0";
  } else {
    for (link of links) {
      link.style.display = "block";
    }
    mobileNav.style.width = "75%";
    mobileNav.style.height = "700px";
  }
}
