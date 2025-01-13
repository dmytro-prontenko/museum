const mobileMenu = () => {
  const menuBtn = document.querySelector(".header__menu-btn");
  const closeBtn = document.querySelector(".mobile-menu__close-btn");
  const menu = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu__nav-link");
  const body = document.querySelector("body");

  function toggleMenu() {
    menu.classList.toggle("is-open");
    body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", menu.classList.contains("is-open"));
  }

  function handleKeyPress(e) {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      toggleMenu();
    }
  }

  function handleOutsideClick(e) {
    if (e.target === menu) {
      toggleMenu();
    }
  }

  menuBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
  menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));
  menu.addEventListener("click", handleOutsideClick);
  window.addEventListener("keydown", handleKeyPress);
};

export default mobileMenu;
