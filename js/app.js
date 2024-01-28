// Animaciones
document.addEventListener("DOMContentLoaded", function () {
  gsap.from("header", {
    opacity: 0,
    duration: 1,
    aese: "power2.inOut",
  });

  gsap.from(".logo", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    aese: "bounce.out",
  });

  gsap.from(".nav__link", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    aese: "power2.inOut",
    delay: 1,
  });

  gsap.from(".buttons-group__button", {
    scale: 0,
    duration: 1,
    stagger: 0.3,
    aese: "elastic.out(1, 0.3)",
    delay: 1.5,
  });

  gsap.from(".box", {
    opacity: 0,
    duration: 1,
    aese: "power2.inOut",
    delay: 2,
  });

  gsap.from(".content", {
    x: -100,
    opacity: 0,
    duration: 1,
    aese: "power2.inOut",
    delay: 2.5,
  });

  gsap.from(".cards__card", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    aese: "power2.inOut",
    delay: 3,
  });

  gsap.from(".social", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    aese: "power2.inOut",
    delay: 4,
  });
});

// Mostrar/Ocultar menu

let nav = document.querySelector("nav");
let buttonMenu = document.querySelector(".button-menu");

buttonMenu.addEventListener("click", function () {
  nav.classList.toggle("active");
  changeIcon();
});

function changeIcon() {
  let iconBtnMenu = document.querySelector(".button-menu i");

  if (iconBtnMenu.classList.contains("ri-menu-3-line")) {
    iconBtnMenu.classList.remove("ri-menu-3-line");
    iconBtnMenu.classList.add("ri-close-line");
  } else {
    iconBtnMenu.classList.remove("ri-close-line");
    iconBtnMenu.classList.add("ri-menu-3-line");
  }
}
