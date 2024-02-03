const itineraries=document.getElementById("route-1-itineraries");

const route1Boton1=document.getElementById("route-1-itinerary-1");
const route1Info1=document.getElementById("route-1-itinerary-1-div");

route1Boton1.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#route-1-itinerary-1-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(route1Boton1.classList.contains("collapsed")){
        route1Boton1.classList.remove("collapsed");
        route1Info1.style.height=maxHeight+"px";
        route1Info1.classList.add("show");
        itineraries.style.overflowY="scroll";
    }
    else{
        route1Boton1.classList.add("collapsed");
        route1Info1.style.height=0+"px";
        route1Info1.classList.remove("show");
        itineraries.style.overflow="hidden";
    }
});
const route1Boton2=document.getElementById("route-1-itinerary-2");
const route1Info2=document.getElementById("route-1-itinerary-2-div");

route1Boton2.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#route-1-itinerary-2-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(route1Boton2.classList.contains("collapsed")){
        route1Boton2.classList.remove("collapsed");
        route1Info2.style.height=maxHeight+"px";
        route1Info2.classList.add("show");
        itineraries.style.overflowY="scroll";
    }
    else{
        route1Boton2.classList.add("collapsed");
        route1Info2.style.height=0+"px";
        route1Info2.classList.remove("show");
        itineraries.style.overflow="hidden";
    }
});
const route1Boton3=document.getElementById("route-1-itinerary-3");
const route1Info3=document.getElementById("route-1-itinerary-3-div");

route1Boton3.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#route-1-itinerary-3-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(route1Boton3.classList.contains("collapsed")){
        route1Boton3.classList.remove("collapsed");
        route1Info3.style.height=maxHeight+"px";
        route1Info3.classList.add("show");
        itineraries.style.overflowY="scroll";
    }
    else{
        route1Boton3.classList.add("collapsed");
        route1Info3.style.height=0+"px";
        route1Info3.classList.remove("show");
        itineraries.style.overflow="hidden";
    }
});
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".route-1-slide-img");
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




const itineraries2=document.getElementById("route-2-itineraries");

const route2Boton1=document.getElementById("route-2-itinerary-1");
const route2Info1=document.getElementById("route-2-itinerary-1-div");

route2Boton1.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#route-2-itinerary-1-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(route2Boton1.classList.contains("collapsed")){
        route2Boton1.classList.remove("collapsed");
        route2Info1.style.height=maxHeight+"px";
        route2Info1.classList.add("show");
        itineraries2.style.overflowY="scroll";
    }
    else{
        route2Boton1.classList.add("collapsed");
        route2Info1.style.height=0+"px";
        route2Info1.classList.remove("show");
        itineraries2.style.overflow="hidden";
    }
});
const route2Boton2=document.getElementById("route-2-itinerary-2");
const route2Info2=document.getElementById("route-2-itinerary-2-div");

route2Boton2.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#route-2-itinerary-2-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(route2Boton2.classList.contains("collapsed")){
        route2Boton2.classList.remove("collapsed");
        route2Info2.style.height=maxHeight+"px";
        route2Info2.classList.add("show");
        itineraries2.style.overflowY="scroll";
    }
    else{
        route2Boton2.classList.add("collapsed");
        route2Info2.style.height=0+"px";
        route2Info2.classList.remove("show");
        itineraries2.style.overflow="hidden";
    }
});
const route2Boton3=document.getElementById("route-2-itinerary-3");
const route2Info3=document.getElementById("route-2-itinerary-3-div");

route2Boton3.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#route-2-itinerary-3-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(route2Boton3.classList.contains("collapsed")){
        route2Boton3.classList.remove("collapsed");
        route2Info3.style.height=maxHeight+"px";
        route2Info3.classList.add("show");
        itineraries2.style.overflowY="scroll";
    }
    else{
        route2Boton3.classList.add("collapsed");
        route2Info3.style.height=0+"px";
        route2Info3.classList.remove("show");
        itineraries2.style.overflow="hidden";
    }
});
const route2Boton4=document.getElementById("route-2-itinerary-4");
const route2Info4=document.getElementById("route-2-itinerary-4-div");

route2Boton4.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#route-2-itinerary-4-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(route2Boton4.classList.contains("collapsed")){
        route2Boton4.classList.remove("collapsed");
        route2Info4.style.height=maxHeight+"px";
        route2Info4.classList.add("show");
        itineraries2.style.overflowY="scroll";
    }
    else{
        route2Boton4.classList.add("collapsed");
        route2Info4.style.height=0+"px";
        route2Info4.classList.remove("show");
        itineraries2.style.overflow="hidden";
    }
});
const slidesContainer2 = document.getElementById("slides-container-2");
const slide2 = document.querySelector(".route-2-slide-img");
const prevButton2 = document.getElementById("slide-arrow-prev-2");
const nextButton2 = document.getElementById("slide-arrow-next-2");

nextButton2.addEventListener("click", () => {
  const slideWidth2 = slide2.clientWidth;
  slidesContainer2.scrollLeft += slideWidth2;
});
prevButton2.addEventListener("click", () => {
  const slideWidth2 = slide2.clientWidth;
  slidesContainer2.scrollLeft -= slideWidth2;
});



const itineraries3=document.getElementById("route-3-itineraries");

const route3Boton1=document.getElementById("route-3-itinerary-1");
const route3Info1=document.getElementById("route-3-itinerary-1-div");

route3Boton1.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#route-3-itinerary-1-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(route3Boton1.classList.contains("collapsed")){
        route3Boton1.classList.remove("collapsed");
        route3Info1.style.height=maxHeight+"px";
        route3Info1.classList.add("show");
        itineraries3.style.overflowY="scroll";
    }
    else{
        route3Boton1.classList.add("collapsed");
        route3Info1.style.height=0+"px";
        route3Info1.classList.remove("show");
        itineraries3.style.overflow="hidden";
    }
});
const slidesContainer3 = document.getElementById("slides-container-3");
const slide3 = document.querySelector(".route-3-slide-img");
const prevButton3 = document.getElementById("slide-arrow-prev-3");
const nextButton3 = document.getElementById("slide-arrow-next-3");

nextButton3.addEventListener("click", () => {
    const slideWidth3 = slide3.clientWidth;
    slidesContainer3.scrollLeft += slideWidth3;
});
prevButton3.addEventListener("click", () => {
    const slideWidth3 = slide3.clientWidth;
    slidesContainer3.scrollLeft -= slideWidth3;
});