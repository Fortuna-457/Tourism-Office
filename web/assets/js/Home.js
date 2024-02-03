const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide-img");
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
const slide2 = document.querySelector(".section-4-slide-img");
const prevButton2 = document.getElementById("slide-arrow-prev-2");
const nextButton2 = document.getElementById("slide-arrow-next-2");
var position=1;
document.getElementById(position).style.fill="#007336";

nextButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft += slideWidth;
  document.getElementById(position).style.fill="#d1d9e0";
  if((position+1)>0 && (position+1)<9){
    position+=1;
  }
  document.getElementById(position).style.fill="#007336";
});
prevButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft -= slideWidth;
  document.getElementById(position).style.fill="#d1d9e0";
  if((position-1)>0 && (position-1)<9){
    position-=1;
  }
  document.getElementById(position).style.fill="#007336";
});