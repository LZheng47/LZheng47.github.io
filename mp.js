window.addEventListener("mouseout", mainhroff);

function mainhron(){
    let mainhr = document.getElementById("mainhr");
    mainhr.style.maxWidth = "600px";
}


function mainhroff(){
    let mainhr = document.getElementById("mainhr");
    mainhr.style.maxWidth = "560px";
}


function mpcomfortable(t, mpnum, ASamt, c, classnum){
    let mpas = document.getElementById(mpnum);
    let build = "";
    let ASamtExtra = 0;

    while(ASamt % 5 > 0){
        ASamt -= 1;
        ASamtExtra += 1;
    }

    let count = c-1;

    for(let x = 1; x <= ASamt/5; x++){
        build += `<div class="mprows mprows${classnum}">`
        count += 1
        build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:1"> T${t}_Lesson${count} </a>`

        count += 1
        build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:2"> T${t}_Lesson${count} </a>`
        build += `</div>`
        build += `<div class="mprows mprows${classnum}">`

        count += 1
        build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:2"> T${t}_Lesson${count} </a>`

        count += 1
        build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:1"> T${t}_Lesson${count} </a>`
        build += `</div>`
        build += `<div class="mprows mprows${classnum}">`

        count += 1
        build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:1"> T${t}_Lesson${count} </a>`
        build += `</div>`
    }

    if(ASamtExtra == 4 || ASamtExtra == 2){
        for(let x = 0; x < 1; x++){
            build += `<div class="mprows mprows${classnum}">`
            count += 1
            build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:1"> T${t}_Lesson${count} </a>`
            count += 1
            build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:2"> T${t}_Lesson${count} </a>`
            build += `</div>`
        }
        if(ASamtExtra == 4){
            for(let x = 0; x < 1; x++){
                build += `<div class="mprows mprows${classnum}">`
                count += 1
                build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:2"> T${t}_Lesson${count} </a>`
                count += 1
                build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:1"> T${t}_Lesson${count} </a>`
                build += `</div>`
            }
        }
    }

    if(ASamtExtra == 3 || ASamtExtra == 1){
        for(let x = 0; x < 1; x++){
            build += `<div class="mprows mprows${classnum}">`
            count += 1
            build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:1"> T${t}_Lesson${count} </a>`

            if(ASamtExtra == 3){
                count += 1
                build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:2"> T${t}_Lesson${count} </a>`
                build += `</div>`
                build += `<div class="mprows mprows${classnum}">`
                count += 1
                build += `  <a href="WD_T${t}_Lesson${count}_1.html" target="_blank" style="flex:1"> T${t}_Lesson${count} </a>`
            }

            build += `</div>`
        }
    }

    mpas.innerHTML = build;
}

function randompos(obj, x1, x2, y1, y2){
    let xpos_ = Math.floor(Math.random()*x2) + x1;
    let ypos_ = Math.floor(Math.random()*y2) + y1;

    obj.style.backgroundPosition = `${-xpos_}px ${-ypos_}px`;
}
