/* Challenge 2: Create a list of 10 grades.
a) Using a for loop display each grade as such, "Grade 1 is xx ".  Do this for all the grades.
b) Using another for loop calculate sum of all the grades.
c) Calculate the average of all the grades.
*/

function init(){
    let output = document.getElementById("output");
    let build = "";
    for(let x = 2; x <= 6; x++){
        build += `<input type="button" onclick="challenge${x}()" value="Challenge ${x}"> </input>`;
    }

    output.innerHTML = build;
}

function challenge2(){
    let grades = [99, 85, 64, 79, 45, 27, 42, 74, 95, 90];
    let sum = 0;
    for(let index = 0; index < grades.length; index++){
        console.log(`Grade ${index + 1} is ${grades[index]}`);
    }

    for(let index = 0; index < grades.length; index ++){
        sum += grades[index];
    }
    console.log(`The average of the ${grades.length} grades is ${sum/grades.length}`);
}

/* Challenge 3: Create a list of 5 names. Using a for loop, display the greeting "Hello " followed by each of the names in the list
*/
function challenge3(){
    let names = ["Diluc", "Lily", "Angelina", "Maggie", "Kaeya"];
    for(let index = 0; index < names.length; index++){
        console.log(`Hello ${names[index]}!`);
    }
}

let survey  = [true,false,true,true,false,false,false,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,false,false,true,true,false,true,true,];
//Note: Notice that the variable is located outside the function. You will learn more about this in a future lesson.

// Challenge 4: Using the list provided above, how many responses are in the list.  Display the number of trues and falses for the "survey".  Bonus! Can you also display each as a percentage of the total number of responses.
function challenge4(){
    let truetotal = 0;
    for(let index = 0; index < survey.length; index++){
        if(survey[index] == true){
            truetotal++;
        }
    }
    let falsetotal = survey.length - truetotal;
    let truetotal_percent = Math.round(truetotal/survey.length*10000)/100;
    let falsetotal_percent = 100 - truetotal_percent;
    console.log(`There are ${survey.length} total responses in the list.`);
    console.log(`There is ${truetotal} trues, which is ${truetotal_percent}% of the total number of responses, and ${falsetotal} falses, which is ${falsetotal_percent}% of the total number of responses.`);
}

let MP2 = [65.56,79.76,11.84,21.58,71.21,74.36,82.94,51.74,24.42,82.24,91.48,22.89,76.1,68.39,61.28,12.79,60.58,25.69,22.21,64.12,56.95,59.08,71.23,86.51,43.21,24.89,66.48,83.52,61.96,70.18,91.87,75,88.77]
// Challenge 5:  Using the list provided above, how many grades are in the MP2 list.  Display the number of passing and failing.  Hint: There is an easy way of calculate one based on the other. Bonus! Can you also display each as a percentage of the total number of grades.
function challenge5(){
    let passing = 0;
    for(let index = 0; index < MP2.length; index++){
        if(MP2[index] >= 65){
            passing++;
        }
    }
    let failing = MP2.length - passing;
        let passingpercent = Math.round(passing/MP2.length*10000)/100;
        let failingpercent = 100 - passingpercent;
        console.log(`There is a total of ${MP2.length} grades in MP2.`);
        console.log(`There are ${passing} passing grades, which is ${passingpercent}% of the total grades and ${failing} failing grades, which is ${failingpercent}% of the total grades.`);
}

//Challenge 6: Create a list of 6 links to your favorite websites.  Using a for loop, display each link as an HTML hyperlink, <a href=""> </a> to the console.  Hint: Use string interpolation to construct the HTML link.
function challenge6(){
    let links = ["https://www.spotify.com/us/", "https://www.youtube.com/", "https://archiveofourown.org/", "https://wallhaven.cc/", "https://www.deviantart.com/", "https://www.khanacademy.org/"];
    let links_name = ["Spotify", "Youtube", "AO3", "Wallhaven", "Deviant Art", "KhanAcademy"];
    let output = document.getElementById("links_");
    let build = "";
    for(let index = 0; index < links.length; index++){
        console.log(`<a href="${links[index]}" target="_blank"> ${links_name[index]} </a>`);
        build += `<a href="${links[index]}" target="_blank"> ${links_name[index]} </a>`;
    }
    output.innerHTML = build;
}

//Challenge Bonus: Take Challenge 6 and actually display the links produced on the webpage.  Hint: Use the concept of building output from previous lessons.
