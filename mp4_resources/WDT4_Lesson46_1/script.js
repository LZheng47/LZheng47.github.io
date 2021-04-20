function main(){
  //Challenge 4: Call goodnight() and book() functions from the previous challenges with appropriate values and store their values in variables.
  let gnAngelina = goodnight("Angelina");
  let LuminousDead = book("The Luminous Dead","Caitlin Starling");
  //Challenge 5: Display values of the variables created in Challenge 4 to the console.
  console.log(gnAngelina);
  console.log(LuminousDead);
  //Challenge 6: Call programCard() with appropriate values and display the results returned to the "output" div.
  let CS = programCard("MKFC4TC-05","1A","8");
  document.getElementById("output").innerHTML = CS;

  
  let bonus = person("John", 11, 97);
  console.log(bonus);
}

//Challenge 1: Create a function goodnight that ACCEPTS a name and RETURNs the message "Good night" followed by the name.
function goodnight(name){
  return "Good night " + name + "!";
}
//Challenge 2: Create a function book that ACCEPTS the name of an book and the author.  RETURN all the information as a complete sentence.  For example "Don't let the pigeon drive bus" By Mo Willems
function book(book,author){
  return '"' + book + '"' + " by " + author + ".";
}
//Challenge 3: Create a function programCard that ACCEPTS the course code, section, and period and RETURNs  all the information on separate lines inside of a div container.  Hint: HTML building
function programCard(coursecode,section,period){
  let build = "<div>";
  build += coursecode + "<br>";
  build += section + "<br>";
  build += "Period " + period + "<br>";
  build += "</div>";
  return build;
}

//Challenge Bonus: Be creative.  Create any function you want that accepts information and displays it to the console.
function person(name,gradelevel,grade){
  let gradestatus, title, msg;
  if(grade >= 65){
    gradestatus = "passing";
    msg = "Keep going!"
  }else{
    gradestatus = "failing";
    msg = "Maybe try studying or attending tutoring sessions!"
  }

  if(gradelevel == 9){
    title = "freshman";
  }else if(gradelevel == 10){
    title = "sophomore";
  }else if(gradelevel == 11){
    title = "junior";
  }else if(gradelevel == 12){
    title = "senior";
  }

  let build = "<p>" + name + " is a " + title + ", and " + name + " is " + gradestatus + ". " + msg + "</p>";
  return build;
}