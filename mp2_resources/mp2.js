function init(){
    let navright = document.getElementById("navright");
    let build = "";

    for(let x = 1; x <= 4; x++){
        build += `<a href="mp${x}.html">`
        build += `  <h4> MARKING PD ${x} </h4>`
        build += `</a>`
    }
    navright.innerHTML = build;
    
    //mp2 setup    
    mpcomfortable(2, 2, 15, 17, 2);
    let mprows2_a = document.querySelectorAll(".mprows2 a");
    for(let x = 0; x < mprows2_a.length; x++){
        randompos(mprows2_a[x], 300, 600, 200, 550)
    }
    mprows2_a[0].innerHTML = "Country_Website";
    mprows2_a[0].href = "Country_Website.html";
    mprows2_a[8].href = "https://docs.google.com/document/d/17vBzivAfZkNMjpTBSs8QfKjoOI9q2zjONnNVui3KdZU/edit";
    mprows2_a[11].innerHTML = "T2_23-27QAMReview";
    mprows2_a[11].href = "WD_T2_Lesson23_27QAMReview.html";
    for(let x = 12; x < mprows2_a.length; x++){
        mprows2_a[x].innerHTML = `T2_Lesson${x+16}`;
        mprows2_a[x].href = `WD_T2_Lesson${x+16}_1.html`;
    }
}