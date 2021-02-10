function init(){
    let mp = document.getElementById("mp");
    let build = "";

    for(let x = 1; x <= 4; x++){ 
        build += `<a href="mp${x}.html">`
        build += `  <h3> MARKING<br>PERIOD ${x} </h3>`
        build += `</a>`
    }

    mp.innerHTML = build;
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

/*
function init(){
    let mp = document.getElementById("mp");
    let build = `<div>`;

    for(let x = 1; x <= 2; x++){ 
        build += `<a href="mp${x}.html">`
        build += `  <h3> MARKING<br>PERIOD ${x} </h3>`
        build += `</a>`
    }
    build += `</div>`;
    build += `<div>`;
    
    for(let x = 3; x <= 4; x++){ 
        build += `<a href="mp${x}.html">`
        build += `  <h3> MARKING<br>PERIOD ${x} </h3>`
        build += `</a>`
    }
    build += `</div>`;

    mp.innerHTML = build;
}
*/