document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function showSection(id) {
    sections.forEach((section) => {
      if (section.id === id) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }

      // Ensure the section is an element before checking computed style
      if (section) {
        const style = getComputedStyle(section);
        console.log(style.display);
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });

  showSection("hero");
});

