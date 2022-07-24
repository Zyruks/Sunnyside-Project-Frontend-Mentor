/* Burger Menu JS*/

const burgerMenu = document.querySelector(".js-burger-menu-wrapper");
const nav = document.querySelector(".js-nav");
const burgerCheckBox = document.querySelector(".js-burger-menu__checkbox");

/**
 * If the checkbox is checked, remove the close-mobile-menu class and add the open-mobile-menu class.
 * If the checkbox is unchecked, add the close-mobile-menu class and remove the open-mobile-menu class
 */
function navToggle() {
  if (burgerCheckBox.checked) {
    nav.classList.remove("close-mobile-menu");
    nav.classList.add("open-mobile-menu");
  } else {
    nav.classList.add("close-mobile-menu");

    setTimeout(() => {
      nav.classList.remove("open-mobile-menu");
      nav.classList.remove("close-mobile-menu");
    }, 600);
  }
}

const aboutPage = document.querySelector(".js-page-about");
const servicesPage = document.querySelector(".js-page-services");
const projectPage = document.querySelector(".js-page-project");
const contactPage = document.querySelector(".js-page-contact");

aboutPage.addEventListener("click", () => {
  activePage(aboutPage, servicesPage, projectPage, contactPage);
});

servicesPage.addEventListener("click", () => {
  activePage(servicesPage, aboutPage, projectPage, contactPage);
});

projectPage.addEventListener("click", () => {
  activePage(projectPage, aboutPage, servicesPage, contactPage);
});

contactPage.addEventListener("click", () => {
  activePage(contactPage, aboutPage, servicesPage, projectPage);
});
/* Burger Menu JS End*/

function activePage(active, secondary, third, quart) {
  active.classList.add("nav__pages--active");
  secondary.classList.remove("nav__pages--active");
  third.classList.remove("nav__pages--active");
  quart.classList.remove("nav__pages--active");
}
