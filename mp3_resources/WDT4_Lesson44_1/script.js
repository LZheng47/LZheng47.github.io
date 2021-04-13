function main(){
  // Challenge 5: Call aboutMe() 
  aboutMe();
  // Challenge 6: Call amazing()
  amazing();
  phone();
}

// Challenge 1: Create a function me that displays your name to the console.log
function me(){
  console.log("Lily");
}

// Challenge 2: Create a function career that displays in an alert box a career you would like to have in the future
function career(){
  alert("Information Technologist (IT)");
}

// Challenge 3: Create a function quote that displays to the web page your favorite quote
function quote(){
  document.getElementById("output").innerHTML = `<h3 id="quote">"I'll catch you if you fall - The Ground"</h3>`;
}

// Challenge 4: Create a function aboutMe that calls the functions me(), career() and quote()
function aboutMe(){
  me();
  career();
  quote();
}

// Challenge Bonus 1: Create a function to display whatever information you want.  Use any method of display.  
function phone(){
  let output = document.getElementById("output");
  let build = ``;
  build += `<div>`;
  build += `  <p id="phone"> Phone Model: Motorola g(7) Optimo Maxx<br>`;
  build += `  RAM Size: 3.00GB<br>`;
  build += `  ROM Size: 32.00GB<br>`;
  build += `  Operating System: Android<br>`;
  build += `  Display Dimensions: 1520x720 </p>`;
  build += `  <h5> Click on a color below to change the phone information background color <br> Double click on a color below to change the page color</h5>`
  build += `</div>`;
  output.innerHTML += build;
}


// Challenge Bonus 2: As a comment, explain the flow of the functions starting with amazing().  Hint: Look inside of extra.js

/*
1) amazing() is called to in main() after aboutMe() is completed.
2) randomColor() is called to in amazing()
3) rnd() is called to in randomColor() 3 times in total for the values of r, g, and b, respectively.
4) rnd() executes designated JS functions Math.floor() which calls for Math.random()
5) Process repeats for 99 more iterations where steps 2 - 4 is repeated because of for loop in amazing().
6) document.getElementById() is used in amazing()
7) amazing() process ends.
*/

function displayColor(color){
  let phonediv = document.getElementById("phone");
  phonediv.style.backgroundColor = color;
}

function bodyColor(color){
  let body = document.getElementById("body");
  body.style.backgroundColor = color;
}