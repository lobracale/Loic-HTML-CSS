console.log("Hello, World!");
// navigation
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Toggle menu on click
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
  const expanded = burger.getAttribute("aria-expanded") === "true" || false;
  burger.setAttribute("aria-expanded", String(!expanded));
});

// Optionnel : Fermer le menu quand on clique à l'extérieur
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
    burger.setAttribute("aria-expanded", "false");
  }
});
// Affiche chaque section lorsque l'utilisateur fait défiler la page
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll("article");

  function handleScroll() {
    articles.forEach((article) => {
      const rect = article.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        article.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
