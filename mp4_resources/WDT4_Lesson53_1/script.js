
function main(){
  // Challenge 4: Ask the user for the range of x values to use with y_xsquared.  Display the coordinates using the function.
  let lower = getFloat("Enter the lower bound of the solutions to the equation y = x^2.");
  let upper = getFloat("Enter the upper bound of the solutions to the equation y = x^2.");
  y_xsquared(lower, upper);
  // Challenge 5: Ask the user for a message and the amount of times to repeat the message.  Call repeat with the information from the user.
  let msg = prompt("Enter a message.");
  let amt = getInt("Enter the amount of times you want the message to be repeated.");
  console.log(repeat(msg, amt));
  // Challenge 6: Ask the user for the principal, interest rate and the total number of years to invest.  Using the compoundInterest, display the amount in the account after each year.
  let principal = getFloat("What is the principal?");
  let interest_rate = getFloat("What is the interest rate? (In decimal form)");
  let years = getInt("What is the total number of years you want to invest?");
  compoundInterest(principal, interest_rate, years);

}

// Challenge 1: Create a function y_xsquared that displays all the (x,y) coordinates for the equation y = x^2 between a range provided to the function (Hint: Parameters!)
function y_xsquared(lower, upper){
  for(let x = lower; x <= upper; x++){
    let y = Math.pow(x, 2);
    let result = "( " + x + ", " + y + " )";
    print(result);
  }
}

// Challenge 2: Create a function repeat that accepts a message and the number of times to repeat the message.  Return a string with the message repeated the specified number of times.
function repeat(msg, num){
  let result = "";
  for(let i = 0; i < num; i++){
    result += msg + " ";
  }
  return result;
}

// Challenge 3: Create a function compoundInterest that accepts the a principal, interest rate and the total number of years to invest.  Display the amount of money in the account for each year.  Hint: Look at the image in this repl.interest
function compoundInterest(p, r, t){
  let info = "Principal: $" + p + "; Interest Rate: " + r + "; Time: " + t + " years";
  print(info);
  for(let i = 0; i <= t; i++){
    let A = p * Math.pow((1 + r), i);
    let result = "Year " + i + ": $" + A.toFixed(2);
    print(result);
  }
}



