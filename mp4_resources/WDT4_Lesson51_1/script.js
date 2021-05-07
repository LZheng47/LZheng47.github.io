function main(){
  //For displays of results, provided and meaningful display of information which include restating the input provided along with the results.

  //Challenge 4: Roll two dice.  If the sum of the dice, is 7 or 11 display "win" otherwise display "lose"
  let dice1 = rollDice();
  let dice2 = rollDice();
  let msg = "You lose! You rolled a " + dice1 + " and a " + dice2 + ". The total is " + (dice1 + dice2) +", which is not 7 or 11." ;
  if(dice1 + dice2 == 7 || dice1 + dice2 == 11){
    msg = "You win! You rolled a " + dice1 + " and a " + dice2 + ". The total is " + (dice1 + dice2 ) + ".";
  }
  console.log(msg);

  //Challenge 5: Make a call to randomQuote and display the output.
  console.log(randomQuote());
  //Challenge 6: Make a call to randomImage and display the output to the webpage.
  randomImage();

}

//Challenge 1: Create a function rollDice that returns a random number from 1 to 6.

function rollDice(){
  let n = Math.floor(Math.random() * 6 ) + 1
  return n;
}

//Challenge 2: Create a function randomQuote that returns one of three quotes you choose. Hint: Generate a random number from 1 to 3. Use the random number generated with a serious of if statements to one of the random quotes you chose.
function randomQuote(){
  let n = Math.floor(Math.random() * 3) + 1;
  
  let quote = '"A jack of all trades is a master of none, but oftentimes better than a master of one."';
  if(n == 1){
    quote = '"What goes up must come down unless the velocity of the object exceeds the escape velocity."';
  }else if(n == 2){
    quote = '"Curiosity killed the cat but satisfaction brought it back."';
  }
  return quote;
}

//Challenge 3: Create a function randomImage that displays one of the images in this repl.it randomly.  Hint: Generate a random number from 1 to 3. Use the random number generated with a serious of if statements to display the image on the web page.  HTML Building!
function randomImage(){
  let output = document.getElementById("output");

  let n = Math.floor(Math.random() * 3) + 1;
  let img = "Yinyi_Feng_sm.png";
  if(n == 1){
    img = "Tsz_Ching_Ho_sm.png";
  }else if(n == 2){
    img = "Willian_Lee_sm.png";
  }
  
  output.innerHTML = `<a href="${img}" target="_blank"> <img src="${img}"> </a>`;
}



