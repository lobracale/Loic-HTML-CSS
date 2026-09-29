document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  if (burger && menu) {
    const toggleMenu = () => {
      const isOpen = menu.classList.toggle("show");
      burger.setAttribute("aria-expanded", String(isOpen));
    };

    burger.addEventListener("click", toggleMenu);

    burger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (!burger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove("show");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  const articles = document.querySelectorAll("article");
  const showArticles = () => {
    articles.forEach((article) => {
      const rect = article.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        article.classList.add("fade-in");
      }
    });
  };

  if (articles.length) {
    window.addEventListener("scroll", showArticles);
    showArticles();
  }
});
