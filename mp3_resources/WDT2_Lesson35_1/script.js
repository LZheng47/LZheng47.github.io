// Challenge 2: Create an array, "images" which contains the images for at least three products per category you decide to have in your store.
let images = ["camila - cry for me.jpg", "camila - nbts.jpg", "camila - she loves control.jpg", "kehlani - nights like this.jpg", "kehlani - butterfly.jpg", "kehlani - love language.jpg", "halsey - strangers.jpg", "halsey - hold me down.jpg", "halsey - graveyard.png", "bebe rexha - knees.png", "bebe rexha - i got you.jpg", "bebe rexha - (not) the one.jpg"];

// Challenge 3: Create an array, "titles" which contains the title for product in your store
let title = ["Cry For Me", "Never Be The Same", "She Loves Control", "Nights Like This", "Butterfly", "Love Language", "Strangers", "Hold Me Down", "Graveyard", "Knees", "I Got You", "(Not) The One"];

// Challenge 4: Create an array, "prices" which contains the prices for product in your store
let prices = ["37.19", "22.99", "28.89", "28.15", "24.99", "27.59", "24.79", "31.21", "29.37", "21.11", "23.19", "25.29"];
// Challenge 5: Create an array, "categories" which labels each product you are selling into a category 
let categories = ["Camila Cabello", "Camila Cabello", "Camila Cabello", "Kehlani", "Kehlani", "Kehlani", "Halsey", "Halsey", "Halsey", "Bebe Rexha", "Bebe Rexha", "Bebe Rexha"];

let genres = ["Pop/Rock", "Pop", "Pop", "Pop/R&B", "R&B", "R&B", "Pop/Rock", "Pop/Rock", "Pop", "Pop", "Pop", "Pop"];

let release = ["2019", "2017", "2018", "2019", "2019", "2019", "2017", "2015", "2019", "2018", "2016", "2017"];

let info = ['"Cry For Me" was about a relationship that Camila was in when she was 16 years old.', 'Camila stated that NBTS was about "finding someone you really love and being forever changed by that person."', `"She Loves Control" is the third track off Camila's album, "Camila".`, '"Nights Like This" features the artist, Ty Dolla Sign, and has over 315 million streams on Spotify.', `"Butterfly" is the 8th track of Kehlani's "While We Wait" album`, `"Love Language" explains a story of a couple willing to learn the other's language despite a language barrier.`, `"Strangers" features the artist,  Lauren Jauregui, who is a former member of Fifth Harmony.`, `"Hold Me Down" has been certified Platinum by RIAA, on June 9, 2020.`, `"Graveyard" reached the Top 40 in fifteen different countries worldwide.`, `"Knees" is about yearning for a lover to admit to their fading connection and to be freed.`, `"I Got You" has a tempo of 98 beats per minute, played in a key of A minor.`, `"(Not) The One" is the 4th track from the album, "All Your Fault: Pt. 2".`];

// Challenge 5: Create the function, init() which will display "cards" for each of the products.  For each "card" must incorporate all the information store in the arrays.
function init(){
    let output = document.getElementById("output");
    output.innerHTML = ``;
    let cardsperrow = 4;
    let cardcount = 0;
    let cardremainder = images.length % cardsperrow;

    for(let x = 0; x < (images.length-cardremainder)/cardsperrow; x++){
        buildcards(cardcount, cardsperrow, output);
        cardcount += cardsperrow;
    }
    if(cardremainder != 0){
        buildcards(cardcount,cardremainder, output);
    }
}

function buildcards(cardcount, cardsperrow, output){
    let build = `<div class="cardrow">`;
    for(let index = 0; index < cardsperrow; index++){
        build += `<a href="images/${images[cardcount]}" target="_blank"> <div class="card">`;
        build += `  <div class="cardpos">`;
        build += `      <div class="cardfront">`;
        build += `          <img src="images/${images[cardcount]}">`;
        build += `      </div>`;
        build += `      <div class="cardback">`;
        build += `          <h3> ${title[cardcount]} </h3>`;
        build += `          <h4> Artist: ${categories[cardcount]} </h4>`;
        build += `          <h4> Release Year: ${release[cardcount]} </h4>`;
        build += `          <h4 class="genre"> Genre(s): ${genres[cardcount]} </h4>`;
        build += `          <h5> Purchase for $${prices[cardcount]}! </h5>`;
        build += `          <p> Extra Info: ${info[cardcount]}! <p>`;
        build += `      </div>`;
        build += `  </div>`;
        build += `</div> </a>`;
        cardcount++;
    }
    build += `</div>`;

    output.innerHTML += build;
}

// Challenge 6: Create the function, selectFood() which will display "cards" for foods in the categories specified by the user.  
function selectCategory(obj){
    let selected = obj.value;

    if(selected == "ALL"){
        init();
        document.getElementById("count").innerHTML = ``;
    }else{
        let output = document.getElementById("output");
        output.innerHTML = ``;
        let count = 0;
        let cardcount = 0;
        let cardsperrow = 4;
        let cardindex = [];

        for(let index = 0; index < images.length; index++){
            if(categories[index] == selected || genres[index].split('/')[0] == selected || genres[index].split('/')[1] == selected || release[index] == selected){
                count++;
                cardindex.push(index);
            }
        }

        let cardremainder = count % cardsperrow;

        for(let index = 0; index < (count-cardremainder)/cardsperrow; index++){
            let build = `<div class="cardrow">`;
            for(let x = 0; x < cardsperrow; x++){
                build += `<a href="images/${images[cardindex[cardcount]]}" target="_blank"> <div class="card">`;
                build += `  <div class="cardpos">`;
                build += `      <div class="cardfront">`;
                build += `          <img src="images/${images[cardindex[cardcount]]}">`;
                build += `      </div>`;
                build += `      <div class="cardback">`;
                build += `          <h3> ${title[cardindex[cardcount]]} </h3>`;
                build += `          <h4> Artist: ${categories[cardindex[cardcount]]} </h4>`;
                build += `          <h4> Release Year: ${release[cardindex[cardcount]]} </h4>`;
                build += `          <h4 class="genre"> Genre(s): ${genres[cardindex[cardcount]]} </h4>`;
                build += `          <h5> Purchase for $${prices[cardindex[cardcount]]}! </h5>`;
                build += `          <p> Extra Info: ${info[cardindex[cardcount]]}! <p>`;
                build += `      </div>`;
                build += `  </div>`;
                build += `</div> </a>`;
                cardcount++;
            }
            build += `</div>`;
            output.innerHTML += build;
        }

        if(cardremainder != 0){
            let build = `<div class="cardrow">`;
            for(let x = 0; x < cardremainder; x++){
                build += `<a href="images/${images[cardindex[cardcount]]}" target="_blank"> <div class="card">`;
                build += `  <div class="cardpos">`;
                build += `      <div class="cardfront">`;
                build += `          <img src="images/${images[cardindex[cardcount]]}">`;
                build += `      </div>`;
                build += `      <div class="cardback">`;
                build += `          <h3> ${title[cardindex[cardcount]]} </h3>`;
                build += `          <h4> Artist: ${categories[cardindex[cardcount]]} </h4>`;
                build += `          <h4> Release Year: ${release[cardindex[cardcount]]} </h4>`;
                build += `          <h4 class="genre"> Genre(s): ${genres[cardindex[cardcount]]} </h4>`;
                build += `          <h5> Purchase for $${prices[cardindex[cardcount]]}! </h5>`;
                build += `          <p> Extra Info: ${info[cardindex[cardcount]]} <p>`;
                build += `      </div>`;
                build += `  </div>`;
                build += `</div> </a>`;
                cardcount++;
            }
            build += `</div>`;
            output.innerHTML += build;
        }

        document.getElementById("count").innerHTML = `${count} searches were found.`;
    }
}


// Challenge 7: Go to style.css