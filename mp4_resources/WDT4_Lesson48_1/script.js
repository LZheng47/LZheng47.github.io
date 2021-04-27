function main(){
  //For displays of results, provided and meaningful display of information which include restating the input provided along with the results.

  //Challenge 4: Retrieve appropriate input to calculate momentum.  Make a call to momentum and display a meaningful output.
  let m = getFloat("Enter mass (kg)");
  let v = getFloat("Enter velocity (m/s)");
  let result = "The momentum of an object that has a mass of " + m + " kg and a velocity of " + v + " m/s is " + momentum(m, v) + " kgm/s.";
  console.log(result);

  //Challenge 5: Retrieve appropriate input to calculate velocity.  Make a call to momentum and display a meaningful output.
  let d = getFloat("Enter distance (m)");
  let t = getFloat("Enter time (s)");
  result = "The velocity of an object moving " + d + " meters in " + t + " seconds is " + velocity(d, t) + " m/s.";
  console.log(result);

  //Challenge 6: Retrieve appropriate input to calculate slope.  Make a call to momentum and display a meaningful output.
  let slope = getFloat("Enter slope");
  let y_intercept = getFloat("Enter y-intercept");
  let x_coord = getFloat("Enter x-coordinate");
  result = "For y = " + slope + "x + " + y_intercept + ", when x is " + x_coord + ", y is " + line(slope, y_intercept, x_coord) + ".";
  console.log(result);

  //Bonus challenge retrieving input
  let m1 = getFloat("Enter mass of object 1");
  let v1 = getFloat("Enter velocity of object 1");
  let m2 = getFloat("Enter mass of object 2");
  let v2 = getFloat("Enter velocity of object 2");
  result = "The impulse between object 1, which has a mass of " + m1 + " kg and a velocity of " + v1 + " m/s, and object 2, which has a mass of " + m2 + " kg and a velocity of " + v2 + " m/s, is " + impulse(m1, v1, m2, v2) + " kgm/s.";
  console.log(result);
}

function getInt(message){
  let input = prompt(message);
  return parseInt(input);
}
function getFloat(message){
  let input = prompt(message);
  return parseFloat(input);
}

//Challenge 1: Create a function momentum that ACCEPTS a mass and velocity and RETURNs the momentum of an object.
//momentum = mass x velocity
function momentum(mass, velocity){
  return mass * velocity;
}

//Challenge 2: Create a function velocity that ACCEPTS the distance traveled and the time it took to travel the distance.  Return the velocity of the object.
//velocity = distance / time
function velocity(distance, time){
  return distance/time;
}


//Challenge 3: Create a function line that ACCEPTS the slope, y intercept and the x coordinate of a specific point.  Return the y coordinate of the point.
//y = mx + b
function line(m, b, x){
  return m * x + b;
}

//Challenge Bonus: Create any function you want that accepts information and returns a value.  Ask the user for the appropriate input and display the result.
function impulse(m1,v1,m2,v2){
  return m1 * v1 - m2 * v2;
}