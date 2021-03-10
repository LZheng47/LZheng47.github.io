//Challenge 5: Create the function init() that displays cards with at least three properties for each piece of data
function init(){
    let output = document.getElementById("output");
    let build = ``;
    for(let i = 0; i < data.length; i++){
        let violation = data[i];
        build += `<div class="card">`;
        build += `  <h3> ${violation.plate} </h3> <hr>`;
        build += `  <p> Issue Date: ${violation.issue_date} </p>`;
        build += `  <p> Issued by: ${violation.issuing_agency}</p>`;
        build += `  <p> Location: ${violation.state}, ${violation.county} </p>`;
        build += `  <p> Violation: ${violation.violation} </p>`;
        build += `  <p> Payment required: $${violation.fine_amount}</p> <hr>`;
        build += `  <a href="${violation.summons_image}" target="_blank"> View Ticket </a>`
        build += `</div>`;
    }
    output.innerHTML = build;
}
//Challenge Bonus: There is a property called "summons_image" which really isn't an image. What is it? How can you get it to work?