function init(){
    let navright = document.getElementById("navright");
    let build = "";

    for(let x = 1; x <= 4; x++){
        build += `<a href="mp${x}.html">`
        build += `  <h4> MARKING PD ${x} </h4>`
        build += `</a>`
    }
    navright.innerHTML = build;
    //mp3 setup    
    mpcomfortable(2, 3, 5, 31, 3);
    mpcomfortable(3, 3, 1, 36, 3);
    let mprows3_a = document.querySelectorAll(".mprows3 a");
    for(let x = 0; x < mprows3_a.length; x++){
        randompos(mprows3_a[x], 300, 800, 200, 600);
    }
}
