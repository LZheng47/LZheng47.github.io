/* Challenge 2: Create a program that displays the tip amounts of 5%, 10%, 15%, 20% and 25% based on the total provided. Use a table to display your output. Reference link: https://www.calculator.net/tip-calculator.html
*/
function tip(){
    let subtotal = parseFloat(document.getElementById("total").value);
    let output = document.getElementById("tips");
    
    let tip = 0, total = 0;
    let build = `<table border='1'>`;

    build += `<tr> <th>Tip %</th> <th>Tip Amount</th> <th>Total Cost</th> </tr>`
    for(let x = 5; x <= 25; x += 5){
        tip = Math.round((subtotal * x / 100)*100)/100;
        total = Math.round((subtotal + tip)*100)/100;
        build += `<tr>`
        build += `  <td> ${x}% </td> <td> $${tip} </td> <td> $${total} </td>`
        build += `</tr>`
    }
    build += `</table>`

    output.innerHTML = build;

}


/* Challenge 4: Create a program that calculates the amount in a bank that receives simple compound interest.  Display the balance in the bank account starting from Year 1 up to the last year the user enters.  Review the compound interest image in this repl.it. Reference link: https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator
*/

function interest(){
    let P = parseFloat(document.getElementById("P").value);
    let r = parseFloat(document.getElementById("r").value);
    let n = parseFloat(document.getElementById("n").value);
    let t = parseFloat(document.getElementById("t").value);
    let interest = document.getElementById("interest");

    let build = "<table border = '1'>";
    build += `<tr> <th> Year </th> <th> Value of Total Savings </th> </tr>`
    let A = 0;
    for(let x = 1; x <= t; x++){
        A = Math.round(P * Math.pow(1 + r/100/n, n*x)*100)/100;
        build += `<tr>`;
        build += `  <td> ${x} </td> <td> $${A} </td>`;
        build += `</tr>`;
    }
    build += `</table>`
    interest.innerHTML = build;
}

//Challenge 5: Add CSS to enhance each of the calculator containers

//Challenge 6: Add CSS to enhance each of the tables