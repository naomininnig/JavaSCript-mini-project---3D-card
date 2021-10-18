//movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items 
const title = document.querySelector('.title');
const sardines = document.querySelector('.sardines ');
const purches = document.querySelector('.purches button');
const description = document.querySelector('.info ');
const sizes = document.querySelector('.sizes');


//moving animation Event
//2 divides the window in to 2 
container.addEventListener('mousemove',(e)=> {
    let xAxis = (window.innerWidth / 2 - e.pageX )/ 10; 
    let yAxis = (window.innerHeight / 2 - e.pageY)/ 10;
    card.style.transform = `rotateY(${xAxis}deg)`
});

//Animate in
container.addEventListener('mouseenter',e => {
    card.style.transition = 'all 0.5s ease';
// Popout effect
title.style.transform = "translateZ(200px)";
sardines.style.transform = "translateZ(200px) rotateZ(45deg)";
description.style.transform = "translateZ(125px)";
sizes.style.transform = "translateZ(100px)";
purches.style.transform = "translateZ(100px)";
});

//Animate out
    container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//Popback effect
    title.style.transform = "translateZ(0px)";
    sardines.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purches.style.transform = "translateZ(0px)";
});

//Ingridiantes Calculation 

//function Conversion of Measurement Units
function type(amount, type){
    let conversion;
    if(type == "weight") {
        conversion = "g"
    }else if(type == "liquid"){
        conversion = "ml"
    }else{
        conversion = ""
    }
    let output = [amount, conversion]
    return output
}

//ingridiantes object
let FishAndChips = {
    "Sardines Aux Aromates": type(120, "weight"),
    "Flour": type(300,"weight"),
    "Baking powder" : type(0.5,"weight"),
    "Honey": type(1,"liquid"),
    "Lager Beer": type(300,"liquid"),
    "Cold Water": type(150,"liquid"),
    "Potatoes (Waxy)": type(2, null),
}

// html text output
let ulEmptyDivCard = document.querySelector(".ulEmptyDiv");

//Calculation of recipe by amount of people
function recipe(recipe,amount){
    let arr = [];
    for (const [name, value] of Object.entries(recipe)){
         arr.push(`<li>${name + " " + value[0] * amount + " " + value[1]}</li>`);
    }
    ulEmptyDivCard.innerHTML = arr.join('');
}

//display new card
let btn = document.querySelectorAll(".sizes button");
let sizesDiv = document.querySelector(".sizes");
let purchesDiv =  document.querySelector(".purches");
let h3Div = document.querySelector(".displayNoneH3");

//for each amount of people recipe amount display btn
btn.forEach(element => {
    element.addEventListener("click", () => {
        sizesDiv.style.display = "none";
        purchesDiv.style.display = "none";
        h3Div.style.display = "none";
        let portions = element.getAttribute("data-anchor");
        recipe(FishAndChips, portions);
        backBtn.style.display = "block";
    })
})
//back to main card button display
let backBtn = document.querySelector(".back");








