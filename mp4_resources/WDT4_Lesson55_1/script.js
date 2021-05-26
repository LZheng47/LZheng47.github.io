function main(){
  // Challenge 4: Create an array with the word "Hello" in 5 different languages.  Use Google Translate.  Ask the user for their name.  Call internationalGreetings in order to display a greeting to the user in each of the languages.
  let hello = ["γεια", "你好", "Привет", "こんにちは", "안녕하세요"];
  let name = prompt("What is your name?");
  internationalGreetings(hello, name);

  // Challenge 5: Ask the user for the number of random votes to simulate.  Create a variable votes and set it equal to the value random from randomVotes(...) using the amount specified by the user.  Display the number of votes that were "YES" using voteForYes()
  let amtofvotes = getInt("Enter a number of votes!");
  let votes = randomVotes(amtofvotes);
  let msg = 'There were ' + voteForYes(votes) + ' votes that were "YES" out of the ' + amtofvotes + ' votes.';
  print(msg);

  // Challenge 6:  Create an array of image urls.  Call imageButtons( ) with the array and display it in the output div in index.html
  let imgs = ["wp/002.jpg", "wp/005.png", "wp/013.png", "wp/028.png", "wp/103.png", "wp/104.jpg", "wp/121.jpg", "wp/VioletEvergarden.gif"];
  document.getElementById("output").innerHTML = imageButtons(imgs);
}

// Challenge 1: Create a function internationalGreetings that accepts an array of the word "Hello" in different languages and a name.  Function displays a greeting in each of te languages using the name at the end.
function internationalGreetings(arr, name){
  for(let i = 0; i < arr.length; i++){
    print(arr[i] + " " + name + "!");
  }
}

// Challenge 2: Create a function voteForYes that accepts an array of votes and returns the number of "YES" votes.  As a bonus also accept "Y", "yes" and "Yes".
function voteForYes(arr){
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].toLowerCase() == "yes" || arr[i].toLowerCase() == "y"){
      count++;
    }
  }

  return count;
}

// Challenge 3: Create a function imageButtons that accepts an array of images and returns a string of HTML Image elements of those images in the array.
function imageButtons(arr){
  let build = "";
  for(let i = 0; i < arr.length; i++){
    build += '<img src="'+ arr[i] +'"> ';
  }
  return build;
}


function randomVotes( amount ){
  let votes = [];
  for(let i = 0; i < amount; i++){
    if( randint(0,2) == 1){
      votes.push("YES");
    }else{
      votes.push("NO");
    }
  }
  return votes;
}