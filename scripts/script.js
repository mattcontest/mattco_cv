/*

    * Used AI assistance during debugging, code review and improvements.
    * Used Claude AI for debugging and implementing scrollTop functionality.
    * Used as template code used in past projects completed with during my bootcamp by TripleTen
    * Used Normalize.css by Nicholas Gallagher 

*/

// Menu Modal Toggle
const audio = document.querySelector(".welcome__bip");
const scrollTop = document.querySelector(".scroll_up");
const logo_btn = document.querySelector(".header__logo-icon");
const mobileBtn = document.querySelector(".header__menu-mobile");
const mobileBtn_icon = document.querySelector(".header__menu-mobile-icon");
const closeBtn = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const modalLinks = document.querySelectorAll(".modal__link");
const themeToggle = document.querySelector(".nav__toggle");
const modalThemeToggle = document.querySelector(".modal__theme-toggle");
const body = document.body;
const mattco_logo = document.querySelector(".header__logo-icon");
// const mobileBtn_dark_icon = document.querySelector(".modal__theme-toggle-icon");
let hasPlayed = false;

// document.addEventListener("click", () => {
//   audio.play();
// });

// Scrolling Up Functionality
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTop.classList.add("scroll_up-visible");
  } else {
    scrollTop.classList.remove("scroll_up-visible");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Opening modal once we click on the mobile menu (sandiwch bar)
mobileBtn.addEventListener("click", () => {
  modal.classList.add("modal_is_open");
  console.log("Modal has been opened");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal_is_open");
  console.log("Modal has been closed!");
});

modalLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modal.classList.remove("modal_is_open");
  });
  console.log("Clicking on a link, and closing modal");
});

// Also allowing to close modal one clicking outside of modal__content

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modal_is_open");
  }
  console.log("Clicking in the mod");
});

function toggleTheme() {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  mattco_logo.src = isDark
    ? "./assets/mattco_logo_dark.svg"
    : "./assets/mattco_logo.svg";

  mobileBtn_icon.src = isDark
    ? "./assets/modal_dark_menu.svg"
    : "./assets/menu.svg";

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Loading set preference
if (localStorage.getItem("theme") == "dark") {
  body.classList.add("dark");
  console.log("Loading Dark Mode as per saved preference");
}

themeToggle.addEventListener("click", () => {
  audio.play();
  toggleTheme();
});
modalThemeToggle.addEventListener("click", (e) => {
  audio.play();
  toggleTheme();
  modal.classList.remove("modal_is_open");
});
