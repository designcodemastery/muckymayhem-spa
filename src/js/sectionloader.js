document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Function to show a specific section
  function showSection(id) {
    sections.forEach((section) => {
      // Ensure the section exists before checking its style
      if (section.id === id) {
        section.style.display = "block"; // Show the section
      } else {
        section.style.display = "none"; // Hide other sections
      }

      // Only call getComputedStyle if section is present
      if (section) {
        try {
          const style = getComputedStyle(section);
          console.log(style.display); // Log to console if needed
        } catch (e) {
          console.error('Error getting computed style:', e);
        }
      }
    });
  }

  // Set up click listeners for navbar links
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor behavior
      const targetId = link.getAttribute("href").substring(1); // Extract the ID from href
      showSection(targetId);
    });
  });

  // On initial load, show only the hero section
  showSection("hero");
});
