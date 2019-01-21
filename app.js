// expandHamburger
(function() {
  let navbar = document.getElementById("navbar");
  navbar.addEventListener("click", expandHamburger);

  function expandHamburger() {
    let viewPortWidth = window.innerWidth;
    // make sure we are in mobile mode before doing any of the mobile nav things
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

// hide nav when scolling down; show nav when scolling up
(function() {
  let navBar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    let viewPortWidth = window.innerWidth;
    // make sure we are in mobile mode before doing any of the mobile nav things
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
      setTimeout(() => {
        navBar.style.display = "none";
      }, 60);
    }
  }
})();

// resize listener with throttling built in
(function() {
  let mobileNav = document.getElementById("mobile-nav");
  let navbar = document.getElementById("navbar");
  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler(e) {
    // ignore events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        actualResizeHandler(e);
      }, 66);
    }
  }

  // this is where you do the things
  function actualResizeHandler(e) {
    if (e.target.innerWidth > 768) {
      mobileNav.style.display = "none";
      navbar.style.display = "none";
    } else {
      navbar.style.display = "flex";
    }
  }
})();
