const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-fixed", window.scrollY > 60);
});
