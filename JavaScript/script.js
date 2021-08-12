let netherland = document.getElementById("one");
let spain = document.getElementById("two");
let france = document.getElementById("three");
let leftImage = document.getElementById("leftImage");
let head = document.getElementById("headText");

function onNetherlandClicked(){
    console.log("Netherland Clicked");
    leftImage.src = "../Images/netherlands.jpg";
    netherland.style.color = "black"
    spain.style.color = "grey"
    france.style.color = "grey"
    head.innerHTML = "Visiting the Venice of the north"
}
function onSpainClicked(){
    console.log("Spain Clicked");
    leftImage.src = "../Images/spain.jpg";
    netherland.style.color = "grey"
    spain.style.color = "black"
    france.style.color = "grey"
    head.innerHTML = "Visiting the pastlle city"
}
function onFranceClicked(){
    console.log("France Clicked");
    leftImage.src = "../Images/france.jpg";
    netherland.style.color = "grey"
    spain.style.color = "grey"
    france.style.color = "black"
    head.innerHTML = "Visiting the city of lights"
}
