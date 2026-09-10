/* =========================================
   CROWN LAB JAVASCRIPT
========================================= */

console.log("Crown Lab JS Connected 🚀");


/* =========================================
   FADE-IN ANIMATION
========================================= */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.15
  }
);


fadeElements.forEach((element) => {

  observer.observe(element);

});


/* =========================================
   NAVIGATION
========================================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

  link.addEventListener("click", function () {

    navLinks.forEach((navLink) => {

      navLink.classList.remove("active");

    });

    this.classList.add("active");

  });

});


/* =========================================
   UPDATE ACTIVE NAV LINK WHILE SCROLLING
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection = section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {

      link.classList.add("active");

    }

  });

});


/* =========================================
   CLOSE MOBILE / OTHER INTERACTIONS
========================================= */

console.log("Crown Lab 2.0 is ready ✅");