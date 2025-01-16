const mobileMenu = () => {
  const menuBtn = document.querySelector(".header__menu-btn");
  const closeBtn = document.querySelector(".mobile-menu__close-btn");
  const menu = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu__nav-link");

  // Зберігаємо початкову позицію скролу
  let scrollPosition = 0;

  const openMenu = () => {
    menu.classList.add("is-open");
    menuBtn.setAttribute("aria-expanded", "true");

    // Зберігаємо поточну позицію скролу
    scrollPosition = window.pageYOffset;

    // Фіксуємо body
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");

    // Відновлюємо скрол body
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");

    // Відновлюємо позицію скролу
    window.scrollTo(0, scrollPosition);
  };

  const toggleMenu = () => {
    if (menu.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target === menu) {
      closeMenu();
    }
  };

  menuBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", closeMenu);
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
  menu.addEventListener("click", handleOutsideClick);
  window.addEventListener("keydown", handleKeyPress);

  menuBtn.setAttribute("aria-expanded", "false");

  const cleanup = () => {
    // Відновлюємо стилі body при очищенні
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");

    menuBtn.removeEventListener("click", toggleMenu);
    closeBtn.removeEventListener("click", closeMenu);
    menu.removeEventListener("click", handleOutsideClick);
    window.removeEventListener("keydown", handleKeyPress);
    menuLinks.forEach((link) => link.removeEventListener("click", closeMenu));
  };

  return cleanup;
};

export default mobileMenu;
