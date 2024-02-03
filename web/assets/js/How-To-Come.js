const botonPlane=document.getElementById("plane");
const infoPlane=document.getElementById("plane-div");

botonPlane.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#plane-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(botonPlane.classList.contains("collapsed")){
        botonPlane.classList.remove("collapsed");
        infoPlane.style.height=maxHeight+"px";
        infoPlane.classList.add("show");
    }
    else{
        botonPlane.classList.add("collapsed");
        infoPlane.style.height=0+"px";
        infoPlane.classList.remove("show");
    }
});

const botonBoat=document.getElementById("boat");
const infoBoat=document.getElementById("boat-div");

botonBoat.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#boat-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(botonBoat.classList.contains("collapsed")){
        botonBoat.classList.remove("collapsed");
        infoBoat.style.height=maxHeight+"px";
        infoBoat.classList.add("show");
    }
    else{
        botonBoat.classList.add("collapsed");
        infoBoat.style.height=0+"px";
        infoBoat.classList.remove("show");
    }
});

const botonCar=document.getElementById("car");
const infoCar=document.getElementById("car-div");

botonCar.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#car-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(botonCar.classList.contains("collapsed")){
        botonCar.classList.remove("collapsed");
        infoCar.style.height=maxHeight+"px";
        infoCar.classList.add("show");
    }
    else{
        botonCar.classList.add("collapsed");
        infoCar.style.height=0+"px";
        infoCar.classList.remove("show");
    }
});

const botonTrain=document.getElementById("train");
const infoTrain=document.getElementById("train-div");

botonTrain.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#train-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(botonTrain.classList.contains("collapsed")){
        botonTrain.classList.remove("collapsed");
        infoTrain.style.height=maxHeight+"px";
        infoTrain.classList.add("show");
    }
    else{
        botonTrain.classList.add("collapsed");
        infoTrain.style.height=0+"px";
        infoTrain.classList.remove("show");
    }
});

const botonBus=document.getElementById("bus");
const infoBus=document.getElementById("bus-div");

botonBus.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#bus-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(botonBus.classList.contains("collapsed")){
        botonBus.classList.remove("collapsed");
        infoBus.style.height=maxHeight+"px";
        infoBus.classList.add("show");
    }
    else{
        botonBus.classList.add("collapsed");
        infoBus.style.height=0+"px";
        infoBus.classList.remove("show");
    }
});

const botonTaxi=document.getElementById("taxi");
const infoTaxi=document.getElementById("taxi-div");

botonTaxi.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#taxi-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(botonTaxi.classList.contains("collapsed")){
        botonTaxi.classList.remove("collapsed");
        infoTaxi.style.height=maxHeight+"px";
        infoTaxi.classList.add("show");
    }
    else{
        botonTaxi.classList.add("collapsed");
        infoTaxi.style.height=0+"px";
        infoTaxi.classList.remove("show");
    }
});

const botonBicycle=document.getElementById("bicycle");
const infoBicycle=document.getElementById("bicycle-div");

botonBicycle.addEventListener("click", () => {
    var maxHeight=0;
    document.querySelectorAll("#bicycle-div p").forEach(element => {
        maxHeight+=(element.clientHeight+20);
    });
    if(botonBicycle.classList.contains("collapsed")){
        botonBicycle.classList.remove("collapsed");
        infoBicycle.style.height=maxHeight+"px";
        infoBicycle.classList.add("show");
    }
    else{
        botonBicycle.classList.add("collapsed");
        infoBicycle.style.height=0+"px";
        infoBicycle.classList.remove("show");
    }
});