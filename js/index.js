import mobileMenu from "./mobile-menu.js";

document.addEventListener("DOMContentLoaded", () => {
  mobileMenu();
});

document.addEventListener("DOMContentLoaded", function () {
  const callBtn = document.querySelector(".header__call-btn");
  const contactsSection = document.querySelector("#contacts");

  callBtn.addEventListener("click", function () {
    // Перевіряємо ширину екрану
    if (window.innerWidth < 1024) {
      // Плавний скрол до секції контактів
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Додаємо обробник зміни розміру вікна
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      // Якщо розмір екрану став більшим за 1024px,
      // переконуємося що контакти приховані
      const contacts = document.querySelector(".header__contacts");
      contacts.style.opacity = "0";
      contacts.style.visibility = "hidden";
    }
  });
});
