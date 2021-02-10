function init(){
    let navright = document.getElementById("navright");
    let build = "";

    for(let x = 1; x <= 4; x++){
        build += `<a href="mp${x}.html">`
        build += `  <h4> MARKING PD ${x} </h4>`
        build += `</a>`
    }
    navright.innerHTML = build;

    //mp1 setup
    mpcomfortable(1, "mpas1", 15, 1, 1);
    let mprows1_a = document.querySelectorAll(".mprows1 a");
    for(let x = 0; x < mprows1_a.length; x++){
        randompos(mprows1_a[x], 250, 1461, 250, 401)
    }
    mprows1_a[4].innerHTML = "T1Exam1Review";

}