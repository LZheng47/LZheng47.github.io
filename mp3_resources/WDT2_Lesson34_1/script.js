// Challenge 2: Create an array, "images" which contains the URL for 4 landmarks
let images = ["https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg", "https://www.lonelyplanet.com/news/wp-content/uploads/2018/10/GettyRF_510410218.jpg", "https://205eev2oa0jm1t4yb914s1nw-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/terracotta-army.jpg", "https://www.history.com/.image/t_share/MTU3ODc4NjAyNDU0ODY5MzIx/hith-7-things-you-should-know-about-mount-everest-2.jpg"];


// Challenge 3: Create an array, "pages" which contains the URL for 4 websites that showcase each landmarks
let pages = ["https://www.chinahighlights.com/greatwall/", "https://www.chinahighlights.com/beijing/forbidden-city/", "https://www.smithsonianmag.com/history/terra-cotta-soldiers-on-the-march-30942673/", "https://www.britannica.com/place/Mount-Everest"];

// Challenge 4: Create an array, "titles" which contains the title for each of the 4 landmarks.
let titles = ["Great Wall of China", "The Forbidden City", "Terracotta Army", "Mount Everest"];

// Challenge 5: Create the function, init() which will display "cards" for each of the landmarks.  For each "card" add the title as a heading and the image as a hyperlink to the website.
function init(){
    let output = document.getElementById("output");
    let build = ``;

    for(let x = 0; x < images.length; x++){
        build += `<div class="cards">`;
        build += `  <h3> ${titles[x]} </h3>`;
        build += `  <a href="${pages[x]}" target="_blank">`;
        build += `      <img src="${images[x]}">`;
        build += `  </a>`;
        build += `  <p> ${info[x]} </p>`;
        build += `</div>`;
    }

    output.innerHTML = build;
}


// Challenge 6 & 7: Go to style.css

// Challenge Bonus: Create an array to add another piece of unique information to each card about the landmark.  Hints: Perhaps the location of the landmark, one sentence description or something else interesting 
let info = ['Located in Northern China, the Great Wall is called "万里长城" in China, literally meaning "Ten-Thousand Mile Long Wall". The entire landmark is approximately 21,200km in length.', "The Forbidden City is located in Beijing. It is an imperial palace that numerous government officials and imperial families lived within.", "The Terracotta Army is thousands of clay soldiers located in the Shaanxi Province, constructed for the first Chinese Emperor, Qin Shi Huang, in beliefs of providing protection in the afterlife.", "Mount Everest is known for being one of the tallest mountains, and is part of the mountain range called the Great Himalayas, in southern Asia. It is approximately 29,000 feet tall."];