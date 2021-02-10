window.addEventListener("scroll", naveffect);

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

function upbuttonon(){
    window.scroll({top: 0, behavior: 'smooth'})
}