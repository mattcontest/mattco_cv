// Menu Modal Toggle

const mobileBtn = document.querySelector(".header__menu-mobile");
const closeBtn = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const modalLinks = document.querySelectorAll(".modal__link");
const themeToggle = document.querySelector(".nav__toggle");
const modalThemeToggle = document.querySelector(".nav__toggle");
const body = document.body;

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
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Loading set preference
if (localStorage.getItem("theme") == "dark") {
  body.classList.add("dark");
}

themeToggle.addEventListener("click", toggleTheme);
modalThemeToggle.addEventListener("click", toggleTheme);
