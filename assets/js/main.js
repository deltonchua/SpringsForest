// Side Navbar
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const sideNav = document.querySelector(".side-navbar");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  body.classList.toggle("overlay");
  sideNav.classList.toggle("show-nav");
};

// Image Gallery
const imgButton = document.querySelector("i.fa-camera");
const mainContent = document.querySelector("main");
const imgGallery = document.querySelector(".img-gallery");
imgButton.onclick = () => {
  mainContent.style.display == "none"
    ? (mainContent.style.display = "block")
    : (mainContent.style.display = "none");
  body.classList.toggle("overlay2");
  imgGallery.classList.toggle("show-img");
};
