function main(){
  //Challenge 5: Call each of the functions from the previous challenges with appropriate values.
  meal("turkey", "potatoes");
  address("1234 Street", "Existing City", "12345");
  artist("Camila Cabello", "Never Be the Same", "Camila");
  programCard("MKFC3TC-05", "2A", 9, "Mr. Castro");
  quadraticEquations(3, 2, 8, -14, 4, 2);
}

//Challenge 1: Create a function meal that ACCEPTS at a type of meat and vegetable.  Display a message to the console stating "Your meal consists of "  the meat and vegetable that were passed as parameters
function meal(meat, vegetable){
  let msg = "Your meal consists of " + meat + " and " + vegetable + ".";
  console.log(msg);
}
//Challenge 2: Create a function address  that ACCEPTS the street, city and zip.  Display an address label to the console consisting of each item on separate lines.  Hint:  You could use separate console.log( ) or recall that \n is an escape character that when placed inside of a string, it skips a line.
function address(street, city, zip){
  let msg = street + "\n" + city + "\n" + zip;
  console.log(msg);
}
//Challenge 3: Create a function artist that ACCEPTS the name of an artist, a song and the album.  Display all the information to the console using a complete sentence.  For example "Let the bodies hit the floor" By Drowning Pool from the album Sinner"
function artist(name, song, album){
  let msg = '"' + song + '"' + " by " + name + ", from the album " + album + ".";
  console.log(msg);
}
//Challenge 4: Create a function programCard that ACCEPTS the course code, section, period and teacher of your CTE course.  Hint: That is this course.
function programCard(coursecode, section, period, teacher){
  let msg = coursecode + ", Section " + section + ", Period " + period + ", taught by " + teacher;
  console.log(msg);
}
//Challenge Bonus: Be creative.  Create any function you want that accepts information and displays it to the console.
function quadraticEquations(a, b, c, startingnum, endingnum, accumulator){
  console.log("x     |     y");
  console.log("______________");
  for(let x = startingnum; x <= endingnum; x += accumulator){
    let y = a*Math.pow(x,2) + b*x + c;
    console.log(x + "      " + y);
  }
}