function main(){
  //For displays of results, provided and meaningful display of information which include restating the input provided along with the results.

  //Challenge 4: Ask the user for the capital of NY.  Call the function checkNYCapital with the user's input and display the results.
  let result = "";

  let userGuess = prompt("What is the capital of NY?");
  result = "You entered " + userGuess + " as the capital of NY. " + checkNYCapital(userGuess);
  console.log(result);

  //Challenge 5: Make a call to greeting and display the output.
  console.log(greeting());

  //Challenge 6: Ask the user for their current speed.  They are currently driving in a 55mph speed zone.  Use speedingTicket( ) as part of an if statement such that if speedingTicket returns true display "$35 Moving Violation issued" otherwise display safe driving.
  let currentSpd = getFloat("What is your current speed?");
  result = "You are currently driving at " + currentSpd + " mph and the speed limit is 55 mph. Safe Driving!"
  if(speedingTicket(currentSpd, 55)){
    result = "$35 Moving Violation issued. You are currently driving at " + currentSpd + " mph, which surpasses the speed limit of 55 mph.";
  }
  console.log(result);
}

function getFloat(message){
  return parseFloat(prompt(message));
}

//Challenge 1: Create a function checkNYCapital that ACCEPTS a user's guess to the capital of the NY.  Return "Correct" if their response equals "Albany" otherwise return "Capital of NY is Albany."
function checkNYCapital(guess){
  let result = "Capital of NY is Albany.";
  if(guess.toLowerCase() == "albany"){
    result = "Correct";
  }
  return result;
}

//Challenge 2: Create a function greeting that returns "Good Morning" if it is before noon otherwise return "Good Day".
//Use this link to learn how to get the current hour. https://www.w3schools.com/jsref/jsref_gethours.asp
function greeting(){
  let date = new Date();
  let hr = date.getHours();

  let result = "Good Day"
  if(hr < 12){
    result = "Good Morning";
  }
  return result;
}

//Challenge 3: Create a function speedingTicket that ACCEPTS your current speed and the speed limit of the zone.  Return true if your current speed exceeds the limit otherwise return false.
function speedingTicket(currentSpd, spdLimit){
  return(currentSpd > spdLimit);
}
