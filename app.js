const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation-list");
  const navList = document.querySelectorAll(".navigation-list li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = " ";
      } else {
        link.style.animation = `navListFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
