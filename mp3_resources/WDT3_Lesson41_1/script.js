let data, output, num, count;

function init(){
  $.ajaxSetup({async: false});

  let top = document.getElementById("top");
  let outputs = document.getElementById("outputs");
  outputs.style.maxHeight = `${window.innerHeight - top.offsetHeight}px`;

  output = document.getElementById("output");
}

/* Challenge Overview
   API calls allow programmers to request resources.  Some API calls come with parameters that can be specified.  In this activity, you will explore various API calls and provide examples of the results of the calls
*/

function goQuotesAPIExample(){
  output.innerHTML = ``;
  /* Challenge 1: Go Quotes API
     https://goquotes.docs.apiary.io

     Go Quotes API allows you to get quotes that could add inspiration to a web page. Review the website, determine an appropriate API call, investigate the information returned and display the information.
  */
  data = $.getJSON('https://goquotes-api.herokuapp.com/api/v1/all/quotes').responseJSON;
  let build = ``;

  //Build some output.  
  document.getElementById("output2").innerHTML = ``;
  for(let i = 0; i < data.quotes.length; i++){
    let quote = data.quotes[i];
    build += `<div class="cards">`;
    build += `  <p> "${quote.text}" </p>`;
    build += `  <div class="quoteinfo">`;
    build += `    <p> Tag(s): ${quote.tag} </p>`;
    build += `    <h4> ~${quote.author} </h4>`;
    build += `  </div>`;
    build += `</div>`;
  }
  output.innerHTML = build;
}

function chuckNorrisAPIExample(){
  output.innerHTML = ``;
  /* Challenge 2: Chuck Norris API
     https://api.chucknorris.io/

     Chuck Norris API provides funny jokes about Chuck Norris.  Review the website, determine an appropriate API call, investigate the information returned and display the information.
  */
  document.getElementById("output2").innerHTML = `<div id="cn">  <input oninput="showcount()" type="range" min="1" max="50" id="num"></input> <p id="count"></p> <input type="button" value="Randomize!" onclick="randomize()"></input>  </div>`;
  num = parseInt(document.getElementById("num").value);
  count = document.getElementById("count");
  count.innerHTML = num;
  //Build some output.  
}

function showcount(){
  num = parseInt(document.getElementById("num").value);
  count = document.getElementById("count");
  count.innerHTML = num;
}

function randomize(){
  num = parseInt(document.getElementById("num").value);
  let build = ``;

  for(let i = 0; i < num; i++){
    data = $.getJSON('https://api.chucknorris.io/jokes/random').responseJSON;
    build += `<div class="cards">`;
    build += `  <p> "${data.value}" </p>`;
    build += `  <div class="quoteinfo">`;
    build += `    <p> Created On: ${data.created_at} </p>`;
    build += `    <p> Updated On: ${data.updated_at} </p>`;
    build += `    <img style="max-width:50px;" src="${data.icon_url}">`;
    build += `  </div>`;
    build += `</div>`;
  }

  output.innerHTML = build;
}

function deckOfCardsAPIExample(){
  output.innerHTML = ``;

  document.getElementById("output2").innerHTML = ``;
  /* Challenge 3: Deck of Cards API
     https://api.chucknorris.io/

     Deck of Cards API provides images of cards that can be used in a variety of applications.  Review the website, determine an appropriate API call, investigate the information returned and display the information.
  */

  document.getElementById("output2").innerHTML = `<div id="cn">  <input oninput="showcount()" type="range" min="1" max="52" id="num"></input> <p id="count"></p> <input type="button" value="Draw Cards!" onclick="drawcards()"></input>  </div>`;
  num = parseInt(document.getElementById("num").value);
  count = document.getElementById("count");
  count.innerHTML = num;
  //Build some output.  Note: There are links to images in the JSON that is returned.  Produce <img> as part of your build.

}

function drawcards(){
  num = parseInt(document.getElementById("num").value);
  let build = ``;

  data = $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=${num}`).responseJSON;

  for(let i = 0; i < num; i++){
    drawn_card = data.cards[i];

    build += `<div class="dcdiv cards">`;
    build += `  <h3> ${drawn_card.value} of ${drawn_card.suit} </h3>`;
    build += `  <img class="drawncards" src="${drawn_card.image}">`;
    build += `</div>`;
  }

  output.innerHTML = build;
}

//Challenge Bonus: Explore one of the countless APIs available out on the Internet.  You may use the following link to explore some that are available.  https://github.com/public-apis/public-apis

function beerAPI(){
  output.innerHTML = ``;

  document.getElementById("output2").innerHTML = ``;

  data = $.getJSON('https://api.punkapi.com/v2/beers').responseJSON;
  let build = ``

  for(let i = 0; i < data.length; i++){
    let beer = data[i];
    build += `<div class="cards">`;
    build += `  <h3> ${beer.name} </h3>`;
    build += `  <p> Tagline: "${beer.tagline}" ~ ${beer.contributed_by} </p>`;
    build += `  <p> First Brewed: ${beer.first_brewed} </p> <hr>`;
    build += `  <a href="${beer.image_url}" target="_blank"> <img src="${beer.image_url}"> </a> <hr>`;
    build += `  <p> ABV: ${beer.abv}; PH: ${beer.ph}</p>`;
    build += `  <p class="beerinfo"> Info: ${beer.description} </p>`;
    build += `</div>`;
  }
  output.innerHTML = build;
}

window.addEventListener("resize", function(){
  let top = document.getElementById("top");
  let outputs = document.getElementById("outputs");
  outputs.style.maxHeight = `${window.innerHeight - top.offsetHeight}px`;
});