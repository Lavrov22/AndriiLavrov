
(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-button"),
    closeMenuBtn: document.querySelector(".close"),
    menu: document.querySelector(".menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
  }
})();