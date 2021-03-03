let index_ = localStorage.getItem("index_path");
let mp = localStorage.getItem("mp");
function init(){
    let navright = document.getElementById("navright");
    let build = "";

    for(let x = 1; x <= 4; x++){
        build += `<a href="mp${x}.html">`
        build += `  <h4> MARKING PD ${x} </h4>`
        build += `</a>`
    }
    navright.innerHTML = build;
    
    let middle = document.getElementById("middle");
    let infodisplay = document.getElementById("infodisplay");
    let middleh = document.getElementById("middleh");
    infodisplay.style.maxHeight = `${middle.offsetHeight - middleh.offsetHeight - 60}px`;
    infodisplay.style.maxWidth = `${window.innerWidth - 270}px`;

    let left = document.getElementById("left");
    let rsrcdisplay = document.getElementById("rsrcdisplay");
    let lefth = document.getElementById("lefth");
    rsrcdisplay.style.maxHeight = `${left.offsetHeight - lefth.offsetHeight - 60}px`;

    fetch("term.json")
    .then(function(response){
        return response.text();
    }).then(function(data){
        let rsrc_data = JSON.parse(data);

        function rsrcpath(mp, lessonnum, srcnum){
            return eval(`rsrc_data.mp${mp}.lessons.lesson${lessonnum}.resources[${srcnum}]`);
        }
        function rsrclength(mp, lessonnum){
            return eval(`rsrc_data.mp${mp}.lessons.lesson${lessonnum}.resources.length`);
        }

        function rsrclist(mp, lessonnum){
            build = "";
            for(let num = 0; num < rsrclength(mp,lessonnum); num++){
                build += `<div onclick="change_display(this)">`;
                build += `     ${rsrcpath(mp,lessonnum,num)}`;
                build += `</div>`;
            }
            rsrcdisplay.innerHTML = build;
        }
        rsrclist(mp, `${index_}_1`);

        function buildfolders(){
            for(let index = 2; index < keyamt; index++){
                let ob = lesson[Object.keys(lesson)[index]];
                build = "";
                build += `<div class="folder">`;
                build += `  <p>${Object.keys(lesson)[index]}</p>`;
                build += `  <span class="folderitems">`;

                for(let index = 0; index < ob.length; index++){
                    build += `      <div onclick="change_display(this)">`;
                    build += `          ${ob[index]}`;
                    build += `      </div>`;
                }
                build += `  </span>`;
                build += `</div>`;
                rsrcdisplay.innerHTML += build;
            }
        }

        let lesson = eval(`rsrc_data.mp3.lessons.lesson${index_}_1`);
        let keyamt = Object.keys(lesson).length;
        if(keyamt > 2){
            buildfolders()
        }
        
        // console.log(rsrc_data.mp3.lessons.lesson31_1[Object.keys(rsrc_data.mp3.lessons.lesson31_1)[1]]);
        // More efficient way to handling arrays in objects where with [n], the nth key's value will be returned
    });

    

    if(index_ >= 36){
        let term = 3;
        start(term);
    }else{
        let term = 2;
        start(term);
    }

    function start(term){
        fetch(`mp${mp}_resources/WDT${term}_Lesson${index_}_1/index.html`)
        .then(function(response){
            return response.text();
        }).then(function(data){
            document.getElementById("infodisplay").innerHTML = `<xmp id="xmp">${data}</xmp>`;
            document.getElementById("middleh").innerHTML = `WDT${term}_Lesson${index_}_1/index.html`;
            document.getElementById("rsrcdisplay").children[0].setAttribute("id","active");
        });

        let start = document.getElementById("start");
        start.href = `mp${mp}_resources/WDT${term}_Lesson${index_}_1/index.html`;
    }
}

window.addEventListener("resize", function(){
    let middle = document.getElementById("middle");
    let infodisplay = document.getElementById("infodisplay");
    let middleh = document.getElementById("middleh");

    infodisplay.style.maxHeight = `${middle.offsetHeight - middleh.offsetHeight - 60}px`;
    infodisplay.style.maxWidth = `${window.innerWidth - 270}px`;

    let left = document.getElementById("left");
    let rsrcdisplay = document.getElementById("rsrcdisplay");
    let lefth = document.getElementById("lefth");

    rsrcdisplay.style.maxHeight = `${left.offsetHeight - lefth.offsetHeight - 60}px`;
});

function change_display(obj){
    let parent = obj.parentNode;
    let rsrcdisplay = document.getElementById("rsrcdisplay");

    for(let index = 0; index < rsrcdisplay.children.length; index++ ){
        rsrcdisplay.children[index].removeAttribute("id");
        
        if(rsrcdisplay.children[index].classList.contains("folder")){
            for(let x = 0; x < rsrcdisplay.children[index].children[1].children.length; x++){
                rsrcdisplay.children[index].children[1].children[x].removeAttribute("id");
            }
        }
    }

    obj.setAttribute("id","active");

    fetch("term.json")
    .then(function(response){
        return response.text();
    }).then(function(data){
        let rsrc_data = JSON.parse(data);
        let obj_index = Array.prototype.indexOf.call(parent.children, obj);
        let mppath = eval(`rsrc_data.mp${mp}.path`);
        let lessonpath = eval(`rsrc_data.mp${mp}.lessons.lesson${index_}_1.path`);
        let rsrcpath = eval(`rsrc_data.mp${mp}.lessons.lesson${index_}_1.resources[${obj_index}]`);

        if(parent.classList.contains("folderitems")){
            let folder1 = parent.parentNode.children[0].innerText;
            let item = obj.innerText;
            let path = `${mppath}${lessonpath}${folder1}${item}`;
            getrsrc(path);
        }else{
            let path = `${mppath}${lessonpath}${rsrcpath}`;
            getrsrc(path);
        }

        

        function getrsrc(path){
            let infodisplay = document.getElementById("infodisplay");
            if(path.split('.')[1] == "jpg" || path.split('.')[1] == "png" || path.split('.')[1] == "jpeg"){
                build = `<img src="${path}" style="max-width:80%; margin:auto; padding:20px;">`;
                infodisplay.style.display = "flex";
                infodisplay.style.backgroundColor = "black";
                infodisplay.innerHTML = build;
                
            }else{
                fetch(path)
                .then(function(response){
                    return response.text();
                }).then(function(data){
                    infodisplay.style.removeProperty("display");
                    infodisplay.style.removeProperty("background-color");
                    infodisplay.innerHTML = `<xmp id="xmp">${data}</xmp>`;
                });
            }

            document.getElementById("middleh").innerHTML = obj.innerHTML;
        }
    });
}