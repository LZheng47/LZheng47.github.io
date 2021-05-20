
function main(){
  // Challenge 4: Ask the user for a number.  Display the factorial of that number.
  
  let num = getInt("Enter a number for the factorial of the number.");
  print(factorial(num));

  // Challenge 5: Ask the user for the number of times to roll a dice.  If the simulated roll dice is great then 4, display "win" otherwise display "lose"
  let rollamt = getInt("How many times do you want to roll the dice?");
  let msg = "";
  let avg = simulatedDiceRoll(rollamt);
  print(avg);
  if(avg > 4 ){
    msg = "You win! The average of the dice rolls was greater than 4";
  }else{
    msg = "You lose! The average of the dice rolls was not greater than 4";
  }
  print(msg + ", since it was " + avg.toFixed(2) + ", after rolling it " + rollamt + " time(s)!");

  // Challenge 6: Call advancedTutor with 5 problems.
  advancedTutor(5);

  // Challenge Bonus 1: Keep track of the number of addition and subtraction problems presented.  Display the count of each.

  // Challenge Bonus 2: Create functions for multiplication and division similar to the addition and subtraction.  Include these functions in the advancedTutor

}

// Challenge 1: Create a function factorial that accepts a number for which return the factorial of that number. For example factorial of 5 is equal to 5 * 4 * 3 * 2 * 1.  Hint: Run a loop backwards starting at the number until you reach 1.  The accumulator involves multiple instead of the addition as we have been doing.  Start your accumulator variable at 1 since you are multiplying.
function factorial(num){
  let factorial = 1;
  for(let i = num; i >= 1; i -= 1){
    factorial *= i;
  }
  return factorial;
}
// Challenge 2: Create a function simulatedDiceRoll that accepts the number of times to roll a dice and returns the average of the dice rolls.
function simulatedDiceRoll(amt){
  let sum = 0;
  for(let i = 0; i < amt; i++){
    sum += randint(1,7);
  }
  return sum/amt;
}
// Challenge 3: Create a function advancedTutor that accepts the number of problems to present the user.  Keep track of the number of problems the user gets correct and incorrect.  At the end display the number of correct and incorrect problems.
function advancedTutor(amt){
  let correct = 0;
  let addition = 0;
  let subtraction = 0;
  let division = 0;
  let multiplication = 0;
  for(let i = 0; i < amt; i++){
    let random = randint(1,5);
    let question;

    if(random == 1){
      question = askAddition();
      addition++;
    }else if(random == 2){
      question = askSubtraction();
      subtraction++;
    }else if(random == 3){
      question = askMultiplication();
      multiplication++;
    }else{
      question = askDivision();
      division++;
    }

    if(question == true){
      correct++;
    }

  }

  print("Correct: " + correct);
  print("Incorrect: " + (amt - correct));
  print("# of Addition Problems: " + addition);
  print("# of Subtraction Problems: " + subtraction);
  print("# of Multiplication Problems: " + multiplication);
  print("# of Division Problems: " + division);
}
// Process: Create a random number from 1 to 2.  If the number is 1 ask an addition problem.  If the number is 2 ask an subtraction problem. 

function askAddition(){
  let n1 = randint(1,10);
  let n2 = randint(1,10);
  let user = getFloat("What is " + n1 + " plus " + n2 + "?");
  if(n1 + n2 == user){
    alert("Correct");
    return true;
  }else{
    alert("Incorrect. The answer is " + (n1 + n2));
    return false;
  }
}

function askSubtraction(){
  let n1 = randint(1,10);
  let n2 = randint(1,10);
  let user = getFloat("What is " + n1 + " minus " + n2 + "?");
  if(n1 - n2 == user){
    alert("Correct");
    return true;
  }else{
    alert("Incorrect. Answer is " + (n1 - n2));
    return false;
  }
}

function askMultiplication(){
  let n1 = randint(1,10);
  let n2 = randint(1,10);
  let user = getFloat("What is " + n1 + " times " + n2 + "?");
  if(user == n1 * n2){
    alert("Correct");
    return true;
  }else{
    alert("Incorrect. Answer is " + (n1 * n2));
    return false;
  }
}

function askDivision(){
  let n1 = randint(1,10);
  let n2 = randint(1,10);
  let user = getFloat("What is " + n1 + " divided by " + n2 + "? (Round to the nearest thousandth if the answer is a non-terminating decimal!)");
  if(user == (n1/n2).toFixed(3)){
    alert("Correct");
    return true;
  }else{
    alert("Incorrect. Answer is " + (n1/n2).toFixed(3));
    return false;
  }
}



