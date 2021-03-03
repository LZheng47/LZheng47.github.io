//Challenge 3: Create the init() function to display each of the pizzas along with their titles using the wireframe provided 
function init(){
    output = document.getElementById("output");
    output2 = document.getElementById("output2");
    output3 = document.getElementById("output3");
    let build = ""
    for(let x = 1; x <= 5; x++){
        build +=`   <div class="card1 cards" id="pizza${x}">`
        build +=`       <img src="images/title${x}.png" class="titles">`
        build +=`       <img src="images/pizza${x}.jpg" class="foods">`
        build +=`       <a href="images/pizza${x}.jpg" target="_blank">`
        build +=`           View`
        build +=`       </a>`
        build +=`   </div>`
    }
    output.innerHTML = build;

    build = ""
    for(let x = 1; x <= 5; x++){
        build +=`   <div class="card2 cards" id="burger${x}">`
        build +=`       <img src="images/burgertitle${x}.png" class="titles">`
        build +=`       <img src="images/burger${x}.jpg" class="foods">`
        build +=`       <a href="images/burger${x}.jpg" target="_blank">`
        build +=`           View`
        build +=`       </a>`
        build +=`   </div>`
    }
    output2.innerHTML = build;

    build = ""
    for(let x = 1; x <= 5; x++){
        build +=`   <div class="card3 cards" id="sushi${x}">`
        build +=`       <img src="images/sushititle${x}.png" class="titles">`
        build +=`       <img src="images/sushi${x}.jpg" class="foods">`
        build +=`       <a href="images/sushi${x}.jpg" target="_blank">`
        build +=`           View`
        build +=`       </a>`
        build +=`   </div>`
    }
    output3.innerHTML = build;
}

// Challenge 4: Using style.css, add styling to each of the "cards".

//Challenge 5: Save images of 5 other pieces of food in the images folder.

//Challenge 6: Using cooltext.com (or some other text generating resource), produce title images for each of the new pieces of food you add in Challenge 5

//Challenge 7: Modify the init() function to display the new food under the all the pizza.

/*Challenge Bonus: Add some interesting CSS effects to your site. Possible suggestions,
1) Add CSS to the hyperlinks to make them look like buttons
2) Add some CSS filters and hover effects to the images.
3) Add a third set of food images.
*/