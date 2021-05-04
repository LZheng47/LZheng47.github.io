function main(){
  //For displays of results, provided and meaningful display of information which include restating the input provided along with the results.
  
  //Challenge 4: Ask the user for the capital of NY.  Call the function checkNYCapital with the user's input and display the results.
  let guess = prompt("What is the capital of NY?");
  console.log(checkNYCapital(guess));
  //Challenge 5: Make a call to greeting and display the output.
  console.log(greeting());

  //Challenge 6: Ask the user for their current speed and whether they are driving through a construction zone ("yes"/"no").  Use speedingTicket( ) as part of an if statement such that if speedingTicket returns a dollar above $0 display "Moving Violation issued: " and the fine otherwise display safe driving.
  let spd = parseFloat(prompt("What is your current speed?"));
  let czone = prompt('Are you driving through a construction zone? Enter "yes" or "no".');
  let msg = "Safe Driving! You're driving at " + spd + " mph, which is below the speed limit of 55 mph.";
  if(speedingTicket(spd, czone) > 0){
    msg = "Moving Violation issued: $" + speedingTicket(spd, czone) + ". You're driving at " + spd + " mph, which is above the speed limit of 55 mph.";
  }
  console.log(msg);

}

//Challenge 1: Create a function checkNYCapital that ACCEPTS a user's guess to the capital of the NY.  Return "Correct" if their response equals "Albany" or "albany" otherwise return "Capital of NY is Albany."
function checkNYCapital(guess){
  let msg = "You entered " + guess + ". The capital of NY is Albany.";
  if(guess == "albany" || guess == "Albany"){
    msg = "You guessed that the capital of NY was " + guess + ". Correct!";
  }
  return msg;
}
//Challenge 2: Create a function greeting that returns "Good Morning" if it is before noon, "Good Day" if the current hour is between 12 and 15 otherwise return "Good Night".
//Use this link to learn how to get the current hour. https://www.w3schools.com/jsref/jsref_gethours.asp
function greeting(){
  let d = new Date();
  let n = d.getHours();

  let msg = "Good Night";
  if(n < 12){
    msg = "Good Morning";
  }else if(n >= 12 && n <= 17){
    msg = "Good Day";
  }

  return msg;
}

//Challenge 3: Create a function speedingTicket that ACCEPTS your current speed and whether you are in a construction zone ("yes" / "no"). If your current speed is over 55 return a fine of $5 for every mpg over 55.  If you are in a construction zone, the fine doubles.  If you are not speeding simply return $0.
function speedingTicket(currentspd, construction_zone){
  let fine = 0;
  if(currentspd > 55){
    fine = (currentspd - 55) * 5;
    if(construction_zone.toLowerCase() == "yes"){
      fine *= 2;
    }
  }
  return fine;
}