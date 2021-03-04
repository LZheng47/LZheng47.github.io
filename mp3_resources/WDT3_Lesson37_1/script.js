let data = [{title:"Pizza",
url:"https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/red-roofs-are-haunting-pizza-huts-sales.jpg?itok=z0D4czud",price:9.99},
{title:"Hamburger",
url:"https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2-500x500.jpg",price:5.99},
{title:"Hot Dog",
url:"https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2017/06/28/931/524/694940094001_5485767507001_5485765821001-vs.jpg?ve=1&tl=1",price:3.99}]

function init(){
  //Challenge 1: Display all the titles in data.
  for(let i = 0; i < data.length; i++){
    console.log(data[i].title);
  }
  
  //Challenge 2: Add up and display the sum of all the prices of the items in data
  let sum = 0;
  for(let i = 0; i < data.length; i++){
    sum += data[i].price;
  }
  console.log(sum);

  //Challenge 3: Inflation has hit! Increase the prices of all the items in data by $2
  for(let i = 0; i < data.length; i++){
    data[i].price += 2;
  }
  
  //Challenge 4: Display all the items in data that are less than $10
  for(let i = 0; i < data.length; i++){
    if(data[i].price < 10){
      console.log(data[i].title);
    }
  }

  //Challenge 5: Build HTML output to produce cards for the items in data. 
  let build = ``;
  for(let i = 0; i < data.length; i++){
    build += `<div class="cards">`;
    build += `  <h3> ${data[i].title} </h3> <hr>`;
    build += `  <a href="${data[i].url}" target="_blank"> <img src="${data[i].url}"> </a> <hr>`;
    build += `  <h4> Purchase for $${data[i].price}! </h4>`;
    build += `</div>`;
  }
  console.log(build);
}
