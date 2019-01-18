// expandHamburger
(function() {
  let navbar = document.getElementById("navbar");
  navbar.addEventListener("click", expandHamburger);

  function expandHamburger() {
    // get the div which hold the links
    let mobileNav = document.getElementById("mobile-nav");
    // get the links themselves
    // let links = document.getElementsByTagName("a");
    let links = document.getElementsByClassName("nav-link");

    // if the navigation menu is already being shown, then hide it
    if (mobileNav.style.width == "97.5vw") {
      for (let link of links) {
        link.style.display = "none";
      }
      mobileNav.style.cssText = "width: 0; height: 0; border: 0";

      // else if the navigation menu is hidden then show it
    } else {
      for (let link of links) {
        link.style.display = "block";
      }
      mobileNav.style.cssText =
        "width: 97.5vw; height: 56rem; border: 0.5rem solid black;";
    }
  }
})();

(function() {
  let navBar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    // console.log(this.oldScroll < this.scrollY);
    if (this.oldScroll < this.scrollY) {
      navBar.style.display = "flex";
    } else {
      // navBar.style.display = "none";
    }

    this.oldScroll = this.scrollY;
  });

  let links = document.getElementsByClassName("nav-link");
  for (let link of links) {
    link.addEventListener("click", hideNav);
  }

  function hideNav() {
    setTimeout(function() {
      navBar.style.display = "none";
    }, 60);
  }
})();
