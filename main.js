//movnebt animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items 
const title = document.querySelector('.title');
const sardines = document.querySelector('.sardines ');
const purches = document.querySelector('.purches button');
const description = document.querySelector('.info ');
const sizes = document.querySelector('.sizes');


//moving animation Event
container.addEventListener('mousemove', (e)=> {
    let xAxis = (window.innerWidth / 2 - e.pageX )/ 15;
    let yAxis = (window.innerHeight / 2 - e.pageY)/ 15;
    card.style.transform = `rotateY(${xAxis}deg)rotateX(${yAxis}deg)`
});

//Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
// Popout effect
title.style.transform = "translateZ(200px)";
sardines.style.transform = "translateZ(200px) rotateZ(45deg)";
description.style.transform = "translateZ(125px)";
sizes.style.transform = "translateZ(100px)";
purches.style.transform = "translateZ(100px)";
});


//Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback effect
    title.style.transform = "translateZ(0px)";
    sardines.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purches.style.transform = "translateZ(0px)";
});
