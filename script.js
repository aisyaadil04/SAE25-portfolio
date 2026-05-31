// Mobile menu
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Project filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category;

      if (selectedFilter === "all" || categories.includes(selectedFilter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Cursor glow effect
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });

  window.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
}

// Smooth page transition
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

const internalLinks = document.querySelectorAll("a[href]");

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    const isInternalPage =
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !href.startsWith("mailto:") &&
      !link.hasAttribute("download");

    if (isInternalPage) {
      event.preventDefault();

      document.body.classList.remove("page-loaded");
      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});