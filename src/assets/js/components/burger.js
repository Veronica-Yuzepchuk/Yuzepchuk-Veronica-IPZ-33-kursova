document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const header = document.querySelector(".header");
  const menu = document.querySelector(".header__menu");
  const overlay = document.createElement("div");
  const menuRight = document.querySelector(".header__menu-right");

  overlay.classList.add("header__overlay");
  document.body.appendChild(overlay);

  function closeMenu() {
      header.classList.remove("active");
      burger.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
      menuRight.prepend(iconsBox);
      iconsBox.classList.remove("active");
  }

  burger.addEventListener("click", function (e) {
      e.stopPropagation();
      const isActive = header.classList.toggle("active");
      burger.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("no-scroll");

      if (isActive) {
          menu.appendChild(iconsBox);
          iconsBox.classList.add("active");
      } else {
          closeMenu();
      }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
          closeMenu();
      }
  });

  menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" || e.target.closest(".menu-item")) {
          closeMenu();
      }
  });
});
