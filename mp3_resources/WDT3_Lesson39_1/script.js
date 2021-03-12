
function init(){
  let output = document.getElementById("output");
  let msg = document.getElementById("msg");
  let build = ``;
  msg.innerHTML = ``;
  for(let i = 0; i < data.length; i++){
    let violation = data[i];
    build += `<div class="cards">`;
    //Challenge 5: Complete the card
    build += `  <h1> ${violation.plate}</h1> <hr>`;
    build += `  <p> Issued on ${violation.issue_date}, ${violation.violation_time}M </p>`;
    build += `  <p> Occurred in ${violation.state}, ${violation.county} </p>`;
    if(violation.violation != undefined ){
      build += `  <p> Violation Committed: ${violation.violation}</p>`;
    }else if(violation.license_type != undefined){
      build += `  <p> License Type: ${violation.license_type}</p>`;
    }
    if(violation.violation_status != undefined){
      build += `  <p> Violation Status: ${violation.violation_status}</p>`;
    }
    build += `<hr>`;
    build += `  <p> Fine Amount: $${violation.fine_amount}</p>`;
    build += `  <a href="${violation.summons_image}" target="_blank"> View Ticket </a>`
    build += `</div>`;
  }
  output.innerHTML = build;
}

//Challenge 6:  Add the function to support searching by license plate number.
function searchLicense(){
  let output = document.getElementById("output");
  let plate = document.getElementById("plate").value;
  let count = 0;
  let msg = document.getElementById("msg");
  let build = ``;
  for(let i = 0; i < data.length; i++){
    let violation = data[i];
    if(violation.plate == plate){
      count++;
      build += `<div class="cards">`;
      build += `  <h1> ${violation.plate}</h1> <hr>`;
      build += `  <p> Issued on ${violation.issue_date}, ${violation.violation_time}M by ${violation.issuing_agency}</p>`;
      build += `  <p> Occurred in ${violation.state}, ${violation.county} </p>`;

      if(violation.violation != undefined ){
        build += `  <p> Violation Committed: ${violation.violation}</p>`;
      }else if(violation.license_type != undefined){
        build += `  <p> License Type: ${violation.license_type}</p>`;
      }

      if(violation.violation_status != undefined){
        build += `  <p> Violation Status: ${violation.violation_status}</p>`;
      }
      build += `  <hr>`;
      build += `  <p> Fine Amount: $${violation.fine_amount}</p>`;
      build += `  <ul> <li> Penalty: $${violation.penalty_amount} </li> <li> Interest: $${violation.interest_amount} </li> <li> Reduction: $${violation.reduction_amount} </li> <li> Payment Made: $${violation.payment_amount} </li> </ul> <hr>`;
      build += `  <a href="${violation.summons_image}" target="_blank"> View Ticket </a>`
      build += `</div>`;
    }
  }
  msg.innerHTML = `${count} out of ${data.length} were found.`
  output.innerHTML = build;
}

//Challenge 7:  Add the function to support searching by the property in Challenge 2.
function searchState(){
  let output = document.getElementById("output");
  let state = document.getElementById("state").value;
  let count = 0;
  let msg = document.getElementById("msg");
  let build = ``;
  for(let i = 0; i < data.length; i++){
    let violation = data[i];
    if(violation.state == state){
      count++;
      build += `<div class="cards">`;
      build += `  <h1> ${violation.plate}</h1> <hr>`;
      build += `  <p> Issued on ${violation.issue_date}, ${violation.violation_time}M by ${violation.issuing_agency}</p>`;
      build += `  <p> Occurred in ${violation.state}, ${violation.county} </p>`;

      if(violation.violation != undefined ){
        build += `  <p> Violation Committed: ${violation.violation}</p>`;
      }else if(violation.license_type != undefined){
        build += `  <p> License Type: ${violation.license_type}</p>`;
      }

      if(violation.violation_status != undefined){
        build += `  <p> Violation Status: ${violation.violation_status}</p>`;
      }
      build += `  <hr>`;
      build += `  <p> Fine Amount: $${violation.fine_amount}</p>`;
      build += `  <a href="${violation.summons_image}" target="_blank"> View Ticket </a>`
      build += `</div>`;
    }
  }
  msg.innerHTML = `${count} out of ${data.length} were found.`
  output.innerHTML = build;
}

//Challenge 8:  Add the function to support searching by the property in Challenge 3.
function searchCounty(){
  let output = document.getElementById("output");
  let county = document.getElementById("county").value;
  let count = 0;
  let msg = document.getElementById("msg");
  let build = ``;
  for(let i = 0; i < data.length; i++){
    let violation = data[i];
    if(violation.county == county){
      count++;
      build += `<div class="cards">`;
      build += `  <h1> ${violation.plate}</h1> <hr>`;
      build += `  <p> Issued on ${violation.issue_date}, ${violation.violation_time}M by ${violation.issuing_agency}</p>`;
      build += `  <p> Occurred in ${violation.state}, ${violation.county} </p>`;

      if(violation.violation != undefined ){
        build += `  <p> Violation Committed: ${violation.violation}</p>`;
      }else if(violation.license_type != undefined){
        build += `  <p> License Type: ${violation.license_type}</p>`;
      }

      if(violation.violation_status != undefined){
        build += `  <p> Violation Status: ${violation.violation_status}</p>`;
      }
      build += `  <hr>`;
      build += `  <p> Fine Amount: $${violation.fine_amount}</p>`;
      build += `  <a href="${violation.summons_image}" target="_blank"> View Ticket </a>`
      build += `</div>`;
    }
  }
  msg.innerHTML = `${count} out of ${data.length} were found.`
  output.innerHTML = build;
}


//Challenge 9:  Add the function to support searching by the properties in Challenge 2 and 3.
function searchStateAndCounty(){
  let output = document.getElementById("output");
  let state = document.getElementById("state").value;
  let county = document.getElementById("county").value;
  let count = 0;
  let msg = document.getElementById("msg");
  let build = ``;
  for(let i = 0; i < data.length; i++){
    let violation = data[i];
    if(violation.state == state && violation.county == county){
      count++;
      build += `<div class="cards">`;
      build += `  <h1> ${violation.plate}</h1> <hr>`;
      build += `  <p> Issued on ${violation.issue_date}, ${violation.violation_time}M by ${violation.issuing_agency}</p>`;
      build += `  <p> Occurred in ${violation.state}, ${violation.county} </p>`;

      if(violation.violation != undefined ){
        build += `  <p> Violation Committed: ${violation.violation}</p>`;
      }else if(violation.license_type != undefined){
        build += `  <p> License Type: ${violation.license_type}</p>`;
      }

      if(violation.violation_status != undefined){
        build += `  <p> Violation Status: ${violation.violation_status}</p>`;
      }
      build += `  <hr>`;
      build += `  <p> Fine Amount: $${violation.fine_amount}</p>`;
      build += `  <a href="${violation.summons_image}" target="_blank"> View Ticket </a>`
      build += `</div>`;
    }
  }
  msg.innerHTML = `${count} out of ${data.length} were found.`
  output.innerHTML = build;
}

//Challenge 10:  Display a count for the number of cards displayed for each of the challenges.

//Hint: Challenges 6 through 9 resemble the init() once completed.  A lot of copy and pasting.
