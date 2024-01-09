/*
Hide header on scroll down & show on scroll up
*/

const header = document.getElementById("header");
let lastPos = document.documentElement.scrollTop;

window.addEventListener(
  "scroll",
  () => {
    const currPos = document.documentElement.scrollTop;

    if (currPos > lastPos) {
      if (currPos > header.offsetHeight) {
        header.classList.add("-translate-y-full");
        header.classList.remove("shadow-md");

        // close the open menu if page was scrolled
        if (!menu.classList.contains("hidden")) {
          togglingMenu();
        }
      }
    } else {
      header.classList.remove("-translate-y-full");
      header.classList.add("shadow-md");
    }

    lastPos = currPos;
  },
  false
);

/*
Toggle the menu when pressed on hamburger button
Only on mobile devices
*/

const menu = document.getElementById("menu");
const searchBox = document.getElementById("search");
const menuToggle = document.getElementById("menu-toggle");

const togglingMenu = () => {
  menu.classList.toggle("hidden");
};

const listenMenuLinks = () => {
  menu.addEventListener(
    "click",
    (event) => {
      // Check if the clicked element is an "a" tag
      if (event.target.tagName === "A" && !menu.classList.contains("hidden")) {
        togglingMenu();
      }
    },
    { once: true }
  );
};

const clickMenu = () => {
  togglingMenu();
  if (!menu.classList.contains("hidden")) {
    listenMenuLinks();
  }
};

menuToggle.addEventListener("click", clickMenu, false);

/*
Lazy load images
*/

window.onload = () => {
  const lazyImages = document.querySelectorAll('[loading="lazy"]');
  lazyImages.forEach((elem) => {
    elem.setAttribute("loading", "eager");
  });
};
