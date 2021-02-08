window.addEventListener("scroll", naveffect);

function init(){
    let mp = document.getElementById("mp");
    let build = "";

    for(let x = 1; x <= 4; x++){ 
        build += `<a href="mp${x}.html">`
        build += `  <h3> Marking Period ${x} </h3>`
        build += `</a>`
    }
    
    mp.innerHTML = build;
}

function naveffect(){
    let ypos = window.scrollY * 0.3;
    let nav = document.getElementById("nav_");
    let upbutton = document.getElementById("upbutton");
    nav.style.backgroundPositionY = `-${ypos}px`;

    if(window.scrollY == 0){
        upbutton.style.transform = "translate(200px, 200px)";
    }
    else{
        upbutton.style.transform = "translate(0px)";
    }
}

window.addEventListener("mouseout", mainhroff);

function mainhron(){
    let mainhr = document.getElementById("mainhr");
    mainhr.style.maxWidth = "510px";
}

function mainhroff(){
    let mainhr = document.getElementById("mainhr");
    mainhr.style.maxWidth = "470px";
}

function upbuttonon(){
    window.scroll({top: 0, behavior: 'smooth'})
}