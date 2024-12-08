// navbar.js
// Handles navigation bar interactions, such as toggling the hamburger menu.
console.log('navbar.js is loaded');

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // All sections
    const navLinks = document.querySelectorAll(".nav-link"); // All nav links
    const navbarBrand = document.querySelector(".navbar-brand"); // Navbar brand link
    const navbarCollapse = document.querySelector(".navbar-collapse"); // Collapsible menu

    // Function to show the target section and hide others
    const showSection = (targetId) => {
      sections.forEach((section) => {
        if (section.id === targetId) {
          section.classList.remove("d-none"); // Show target section
        } else {
          section.classList.add("d-none"); // Hide others
        }
      });
    };

    // Function to collapse the hamburger menu
    const collapseMenu = () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show"); // Collapse the menu
      }
    };

    // Add click event listeners to navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the target section's ID from the href attribute
        const targetId = link.getAttribute("href").replace("#", "");

        // Show the target section
        showSection(targetId);

        // Collapse the menu (if open)
        collapseMenu();

        // Update the active class for navigation links
        navLinks.forEach((nav) => nav.classList.remove("active"));
        link.classList.add("active");
      });
    });

    // Handle navbar brand link click
    navbarBrand.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Show the hero section
      showSection("home");

      // Collapse the menu (if open)
      collapseMenu();

      // Update the active class for navigation links
      navLinks.forEach((nav) => nav.classList.remove("active"));
    });

    // Ensure only the hero section is visible on initial load
    showSection("home");
    });

    const navLinkEls = document.querySelectorAll( '.nav-link' );

    navLinkEls.forEach( navLinkEl => {
        navLinkEl.addEventListener( 'click', () => {
            document.querySelector( '.active' )?.classList.remove( 'active' );
            navLinkEl.classList.add( 'active' );
        });
    });