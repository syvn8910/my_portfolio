const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav__item");

function setActiveNav() {
  let current = "";

  sections.forEach(section => {const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 500) {
      current =section.getAttribute("id");
    }
  });

  if (window.scrollY < 100) {
    current = "about";
  }

  navItems.forEach(item => {item.classList.remove("active");

    const link = item.querySelector("a");

    if (link.getAttribute("href") === "#" + current) {
      item.classList.add("active");
    }
  })
}

window.addEventListener("scroll", setActiveNav);

window.addEventListener("load", setActiveNav);