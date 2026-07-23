// Tab filtering 
// Grab all the tab buttons and all the article cards
const tabButtons = document.querySelectorAll(".tab-btn");
const articleCards = document.querySelectorAll(".article-card");

// shows only the matching articles
tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    // Remove "active" from every tab, then add it to the one clicked
    tabButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    // Loop through the article cards and hide the ones that don't match
    articleCards.forEach(function (card) {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Scroll reveal animation 
// Every element with the "reveal" class starts hidden (see style.css).
// This watches the page and adds "in-view" once a section scrolls into
// sight, which triggers the fade + rise transition.
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(function (el) {
  revealObserver.observe(el);
});