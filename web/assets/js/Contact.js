const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".tourism-offices-tarjetita .slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

const slidesContainer2 = document.getElementById("slides-container-2");
const slide2 = document.querySelector(".contacts-accommodations-tarjetita .slide");
const prevButton2 = document.getElementById("slide-arrow-prev-2");
const nextButton2 = document.getElementById("slide-arrow-next-2");

nextButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft += slideWidth;
});
prevButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft -= slideWidth;
});