/*

    * Used AI assistance during debugging, code review and improvements.
    * Used Claude AI for debugging and implementing scrollTop functionality.
    * Used as template code from my past projects completed  during my bootcamp with TripleTen
    * Used Normalize.css by Nicholas Gallagher 

*/

// Menu Modal Toggle
const form_box = document.querySelector(".contact-form_box");
const form_succes = document.querySelector(".contact-form__feedback");
const contact_form = document.getElementById("contact-form");
const contact_message = document.getElementById("contact-message");
const contact_email = document.getElementById("contact-email");
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

contact_form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("Wired up!");
  //   console.log("Email", contact_email.value, "Message", contact_message.value);
  if (
    contact_message.value.trim() === "" ||
    contact_email.value.trim() === ""
  ) {
    return (form_succes.textContent =
      "Please enter a valid email  and a valid message!");
  }

  console.log(contact_message.value.trim(), contact_email.value.trim());
  form_succes.textContent = "Thank you for your message! 😄";
  form_box.classList.add("contact-form_box-hidden");
});

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
