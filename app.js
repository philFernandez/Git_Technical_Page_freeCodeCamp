// expandHamburger
(function() {
  let navbar = document.getElementById("navbar");
  navbar.addEventListener("click", expandHamburger);

  function expandHamburger() {
    let viewPortWidth = window.innerWidth;
    if (viewPortWidth <= 768) {
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
  }
})();

(function() {
  let navBar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    let viewPortWidth = window.innerWidth;
    if (viewPortWidth <= 768) {
      // if scrolling down, hide the navbar
      if (this.oldScroll < this.scrollY) {
        navBar.style.display = "none";
      } else {
        // if scrolling up, show the nav bar
        navBar.style.display = "flex";
      }

      this.oldScroll = this.scrollY;
    }
  });

  let links = document.getElementsByClassName("nav-link");
  for (let link of links) {
    link.addEventListener("click", hideNav);
  }

  // hide the nav bar when selecting a link
  function hideNav() {
    let viewPortWidth = window.innerWidth;
    if (viewPortWidth <= 768) {
      setTimeout(function() {
        navBar.style.display = "none";
      }, 60);
    }
  }
})();

// on window resize, make sure if we're in mobile mode,
// the nav's display property is set to flex. Else if we
// are in desktop mode ie > 768px wide, the nav's display
// property is in block

// (function() {
//   let navBar = document.getElementById("navbar");
//   window.addEventListener("resize", e => {
//     if (e.target.innerWidth >= 768) {
//       navBar.style.display = "block";
//     } else {
//       navBar.style.display = "flex";
//     }
//   });
// })();
