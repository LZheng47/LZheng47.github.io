/*Challenge 3: Create JSON variable, w3schools which contains the following properties,
"title" which is "w3Schools",
"url" which is "https://www.w3schools.com",
"description" which is "Resources for learning programming",
"users" which is 123456789,
"rating" which is 8
*/

let w3schools = {
  "title":"w3Schools",
  "url":"https://www.w3schools.com",
  "description":"Resources for learning programming",
  "users":123456789,
  "rating":8
}

//Display all challenges to the console
function examples(){
  //Challenge 4: Display the JSON variable, w3schools
  console.log(w3schools);
  //Challenge 5: Display each of the properties of the JSON variable, w3schools on separate lines.  Using string interpolation display the property followed by the value.  For example, "Title is w3schools"
  console.log(`Title is ${w3schools.title}`);
  console.log(`Url is ${w3schools.url}`);
  console.log(`Description is ${w3schools.description}`);
  console.log(`Users is ${w3schools.users}`);
  console.log(`Rating is ${w3schools.rating}`);
  //Challenge 6: Increase the number of users  in w3schools by 1
  w3schools.users++;
  console.log(w3schools.users);

  //Challenge 7: If the number of users is less one million, decrease the rating by 0.1
  if(w3schools.users < 1000000){
    w3schools.rating -= 0.1;
  }
  console.log(w3schools.rating);

  //Challenge 8: Using string interpolation, build the url in w3schools into an HTML hyperlink
  let build = `<a href="${w3schools.url}"> ${w3schools.title} </a>`;
  console.log(build);

  //Challenge 9: Using string interpolation and the JSON variable w3schools, build a card that displays the title as heading and description as paragraph 
  build = `<div class="card">`;
  build += `  <h3> ${w3schools.title} </h3>`;
  build += `  <p> ${w3schools.description} </p>`;
  build += `</div>`;
  console.log(build);

}