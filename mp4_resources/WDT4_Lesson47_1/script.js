function main(){
  //Challenge 5: Make appropriate calls to each function created in the previous challenges.
  let result = "";

  result = "A mass of 20 kg and an acceleration of 10 m/s^2 has a force of " + force(20, 10) + " newtons.";
  console.log(result);

  result = "32 degrees fahrenheit is equal to " + celsius(32) + " degrees.";
  console.log(result);

  result = "40 degrees fahrenheit is equal to " + celsius(40) + " degrees.";
  console.log(result);

  result = "The slope of (2, 5) and (8, 8) is " + slope(2,5,8,8) + " units."
  console.log(result);

  result = "The distance between (4, 5) and (11, 16) is " + distance(4,5,11,16) + " units.";
  console.log(result);

  result = "The gravitational force between a 328 kg object and a 144 kg object seperated by a distance of 27 meters is " + gravitationalF(328,144,27) + " newtons.";
  console.log(result);
}

//Challenge 1: Create a function force that ACCEPTS a mass and acceleration and RETURNs the force on a object.
//Force = Mass times acceleration
function force(mass, acceleration){
  let f = mass * acceleration;
  return Math.round(f*100)/100;
}

//Challenge 2: Create a function celsius that ACCEPTS a degree in Fahrenheit and RETURNS the equivalent temperature in Celsius.
//Look up the formula to convert from Fahrenheit to Celsius
function celsius(fahrenheit){
  let celsius = (fahrenheit - 32) * (5/9);
  return Math.round(celsius*100)/100;
}

//Challenge 3: Create a function slope that ACCEPTS the x and y coordinates of two points, ie. x1,y1,x2 and y2.  Return the slope between the two points.
//Look up the formula for slope
function slope(x1, y1, x2, y2){
  let slope = (y2 - y1)/(x2 - x1);
  return Math.round(slope*100)/100;
}

//Challenge 4: Create a function distance that ACCEPTS the x and y coordinates of two points, ie. x1,y1,x2 and y2.  Return the distance between the two points.
//Look up the distance formula
function distance(x1, y1, x2, y2){
  let diff = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
  let distance = Math.sqrt( diff );
  return Math.round(distance*100)/100;
}


//Challenge Bonus: Be creative.  Create any function you want that accepts information and returns a value.
function gravitationalF(m1, m2, r){
  //Gravitaional force between two masses or objects
  let numerator = 6.67 * Math.pow(10, -11) * m1 * m2;
  let denominator = Math.pow(r,2);
  let fg = numerator/denominator;
  return fg;
}