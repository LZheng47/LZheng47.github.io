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
    let mpas = document.getElementById(`mpas${mpnum}`);
    let body = document.getElementsByTagName("body")[0];
    let build = "";
    let ref = "";
    let ASamtExtra = 0;

    if(mpnum == 3 || mpnum == 4){
        ref = "files_viewer.html";
    }else{
        ref = '';
    }

    body.setAttribute("data-mp", mpnum);
    mp = body.getAttribute("data-mp");
    localStorage.setItem("mp", mp);

    while(ASamt % 5 > 0){
        ASamt -= 1;
        ASamtExtra += 1;
    }

    let count = c-1;
    
    for(let x = 1; x <= ASamt/5; x++){
        build += `<div class="mprows mprows${classnum}">`
        
        count++
        build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:1"> T${t}_Lesson${count} </a>`

        count++
        build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:2"> T${t}_Lesson${count} </a>`
        
        build += `</div>`
        build += `<div class="mprows mprows${classnum}">`

        count++
        build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:2"> T${t}_Lesson${count} </a>`

        count++
        build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:1"> T${t}_Lesson${count} </a>`
        build += `</div>`
        build += `<div class="mprows mprows${classnum}">`

        count++
        build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:1"> T${t}_Lesson${count} </a>`
        build += `</div>`
    }

    if(ASamtExtra == 4 || ASamtExtra == 2){
        for(let x = 0; x < 1; x++){
            build += `<div class="mprows mprows${classnum}">`
            count++
            build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:1"> T${t}_Lesson${count} </a>`
            count++
            build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:2"> T${t}_Lesson${count} </a>`
            build += `</div>`
        }
        if(ASamtExtra == 4){
            for(let x = 0; x < 1; x++){
                build += `<div class="mprows mprows${classnum}">`
                count++
                build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:2"> T${t}_Lesson${count} </a>`
                count++
                build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:1"> T${t}_Lesson${count} </a>`
                build += `</div>`
            }
        }
    }

    if(ASamtExtra == 3 || ASamtExtra == 1){
        for(let x = 0; x < 1; x++){
            build += `<div class="mprows mprows${classnum}">`
            count++
            build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:1"> T${t}_Lesson${count} </a>`

            if(ASamtExtra == 3){
                count++
                build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:2"> T${t}_Lesson${count} </a>`
                build += `</div>`
                build += `<div class="mprows mprows${classnum}">`
                count++
                build += `  <a href="${ref}" onclick="pathway(this)" data-pathway="${count}" style="flex:1"> T${t}_Lesson${count} </a>`
            }

            build += `</div>`
        }
    }
    mpas.innerHTML = build;

    /*
    for(let x = 0; x < mpas.getElementsByTagName("div").length; x++){
        for(let index = 0; index < mpas.getElementsByTagName("div")[x].getElementsByTagName("a").length; index++){
            console.log(mpas.getElementsByTagName("div")[x].getElementsByTagName("a")[index].getAttribute("data-pathway"));
        }
    }*/
}

let index_path = "";

function pathway(obj){
    index_path = obj.getAttribute("data-pathway");
    localStorage.setItem("index_path", index_path);
}

function randompos(obj, x1, x2, y1, y2){
    let xpos_ = Math.floor(Math.random()*x2) + x1;
    let ypos_ = Math.floor(Math.random()*y2) + y1;

    obj.style.backgroundPosition = `${-xpos_}px ${-ypos_}px`;
}
