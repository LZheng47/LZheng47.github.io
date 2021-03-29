
let data, key;
function init(){
  /* Challenge 2: Add the necessary code to make an API call asynchronously to
     NYC Open Data -  Vehicle Collisions
  https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
  */
  $.ajaxSetup({async:false});
  data = $.getJSON("https://data.cityofnewyork.us/resource/h9gi-nx95.json").responseJSON;
  key = "Ay5TuK5cso7GaF0Cx8T4ZlKGBxWJt02G";
  displayPieChart()
  displayBarChart()
  bonus()
}

/* Challenge 3: Create a function that aggregates the vehicle collisions by borough and display as a pie chart.  Check for collisions that do not have a borough assigned, display this as well.

Don't forget to adjust the bindto property to reflect the id of the container where the charts are going to be displayed. Don't forget to call this function from the init().
*/

function displayPieChart(){
  let cq = 0, cbx = 0, cm = 0, cbk = 0, csi = 0, unknown = 0;
  for(let i = 0; i < data.length; i++){
    let collision = data[i];
    if(collision.borough == "QUEENS"){
      cq++;
    }else if(collision.borough == "MANHATTAN"){
      cm++;
    }else if(collision.borough == "BROOKLYN"){
      cbk++;
    }else if(collision.borough == "BRONX"){
      cbx++;
    }else if(collision.borough == "STATEN ISLAND"){
      csi++;
    }else{
      unknown++;
    }
  }

  let chart = c3.generate({
    bindto:"#pieChart",
    data: {
        columns: [
            ['QUEENS', cq],
            ['MANHATTAN', cm],
            ['BROOKLYN',cbk],
            ['BRONX',cbx],
            ['STATEN ISLAND',csi],
            ['UNKNOWN',unknown],
        ],
        labels: true,
        type : 'pie',
        onclick: function (d, i) { cards (d.id, d.value, "borough", undefined); }
    }
  });

}

function cards(category, count, group1, group2){
  let output = document.getElementById("output");
  let countdiv = document.getElementById("count");
  countdiv.innerHTML = `${count} collision(s) have been found.`;
  build = ``;
  for(let i = 0; i < data.length; i++){
    let collision = data[i];

    let street;
    if(collision.on_street_name != undefined){
      street = collision.on_street_name;
    }else if(collision.off_street_name != undefined){
      street = collision.off_street_name;
    }else{
      street = collision.cross_street_name;
    }

    if(collision.latitude != undefined){
      url =  `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${collision.latitude},${collision.longitude}&size=240,240&zoom=15`;
    }else{
      url =  `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${street},NY,${collision.zip_code}&size=240,240&zoom=15`;
    }

    function building(group){
      if( collision[group] == category ){
        build += `<div class="cards">`;
        if(collision.vehicle_type_code2 != undefined){
          build += `<h2> ${collision.vehicle_type_code1} ~ ${collision.vehicle_type_code2} </h2> <hr>`;
        }else{
          build += `<h2> ${collision.vehicle_type_code1}</h2> <hr>`;
        }
        build += `     <p>People Injured: ${collision.number_of_persons_injured} <br> Casualties: ${collision.number_of_persons_killed}</p>`;
        if(collision.contributing_factor_vehicle_1 != undefined && collision.contributing_factor_vehicle_1 != "Unspecified"){
          build += `     <p>Caused By: ${collision.contributing_factor_vehicle_1} </p>`;
        }
        build += `     <h4> Location of Incident: </h4>`;
        build += `     <img src="${url}">`;
        build += `     <p> ${street} <br>`;
        if(collision.zip_code != undefined){
          build += `${collision.borough} NY ${collision.zip_code}</p><hr>`;
        }else{
          build += `${collision.borough} NY</p><hr>`;
        }
        build += `     <h5>${collision.crash_date} ${collision.crash_time}</h5>`;
        build += `</div>`;
        
      }
    }

    building(group1);
    if(group2 != undefined){
      building(group2);
    }

  }
  output.innerHTML = build;
}

/* Challenge 4: Create a function that aggregates the vehicle collisions by vehicle type (at least 5 different types of vehicles) and display as a bar chart.

Don't forget to adjust the bindto property to reflect the id of the container where the charts are going to be displayed. Don't forget to call this function from the init().
*/
function displayBarChart(){
  let vtype = [];
  let vcount = [];
  let notFound;
  for(let i = 0; i < data.length; i++){
    let collision = data[i];
    notFound = true;
    for(let vtypeindex = 0; vtypeindex < vtype.length + 1; vtypeindex++){
      if(collision.vehicle_type_code1 != undefined && collision.vehicle_type_code1 == vtype[vtypeindex] && notFound == true){
        notFound = false;
      }
    }
    if(collision.vehicle_type_code1 != undefined && notFound == true){
      vtype.push(collision.vehicle_type_code1);
    }

    notFound = true;
    for(let vtypeindex = 0; vtypeindex < vtype.length + 1; vtypeindex++){
      if(collision.vehicle_type_code2 != undefined && collision.vehicle_type_code2 == vtype[vtypeindex] && notFound == true){
        notFound = false;
      }
    }
    if(collision.vehicle_type_code2 != undefined && notFound == true){
      vtype.push(collision.vehicle_type_code2);
    }
    
  }

  for(let i = 0; i < vtype.length; i++){
    vcount.push(0);
  }

  for(let i = 0; i < data.length; i++){
    for(let vtypeindex = 0; vtypeindex < vtype.length; vtypeindex++){
      let collision = data[i];
      if(collision.vehicle_type_code1 == vtype[vtypeindex]){
        vcount[vtypeindex]++;
      }
      if(collision.vehicle_type_code2 == vtype[vtypeindex]){
        vcount[vtypeindex]++;
      }
    }
  }

  let chart = c3.generate({
    bindto:"#barChart",
    data: {
        columns: [
          [vtype[0],vcount[0]],
          [vtype[1],vcount[1]],
          [vtype[2],vcount[2]],
          [vtype[3],vcount[3]],
          [vtype[4],vcount[4]],
          [vtype[5],vcount[5]],
          [vtype[6],vcount[6]],
          [vtype[7],vcount[7]],
          [vtype[8],vcount[8]],
          [vtype[9],vcount[9]],
          [vtype[10],vcount[10]],
        ],
        labels: true,
        type : 'bar',
        onclick: function (d, i) { cards(d.id, d.value, "vehicle_type_code1", "vehicle_type_code2"); }
    },
    bar: {
        width: {
            ratio: 0.5
        }
    },
    axis: {
      x: {
          type: 'category',
          categories: ['Types of Collisions']
      },
    }
  });
}


// Challenge Bonus 1: Create another chart that aggregates another piece of information. Perhaps zip code with a scatter plot, contributing factors as a bar chart, or even a line chart of crash times 
function bonus(){
  let crashtimes = [];
  let ctcount = [];
  let notFound;
  for(let i = 0; i < data.length; i++){
    let collision = data[i];
    notFound = true;
    for(let crashtimesindex = 0; crashtimesindex < crashtimes.length + 1; crashtimesindex++){
      if(collision.crash_time == crashtimes[crashtimesindex] && notFound == true){
        notFound = false;
      }
    }
    if(notFound == true){
      crashtimes.push(collision.crash_time);
    }
    
  }

  for(let i = 0; i < crashtimes.length; i++){
    ctcount.push(0);
  }

  for(let i = 0; i < data.length; i++){
    for(let crashtimesindex = 0; crashtimesindex < crashtimes.length; crashtimesindex++){
      let collision = data[i];
      if(collision.crash_time == crashtimes[crashtimesindex]){
        ctcount[crashtimesindex]++;
      }
    }
  }

  let chart = c3.generate({
    bindto:"#bonusChart",
    data: {
        columns: [
          [crashtimes[0],ctcount[0]],
          [crashtimes[1],ctcount[1]],
          [crashtimes[2],ctcount[2]],
          [crashtimes[3],ctcount[3]],
          [crashtimes[4],ctcount[4]],
          [crashtimes[5],ctcount[5]],
          [crashtimes[6],ctcount[6]],
          [crashtimes[7],ctcount[7]],
          [crashtimes[8],ctcount[8]],
          [crashtimes[9],ctcount[9]],
          [crashtimes[10],ctcount[10]],
          [crashtimes[11],ctcount[11]],
          [crashtimes[12],ctcount[12]],
          [crashtimes[13],ctcount[13]],
          [crashtimes[14],ctcount[14]],
          [crashtimes[15],ctcount[15]],
          [crashtimes[16],ctcount[16]],
          [crashtimes[17],ctcount[17]],
          [crashtimes[18],ctcount[18]],
          [crashtimes[19],ctcount[19]],
          [crashtimes[20],ctcount[20]],
        ],
        labels: true,
        type : 'bar',
        onclick: function (d, i) { cards(d.id, d.value, "crash_time", undefined); }
    },
    bar: {
        width: {
            ratio: 0.5
        }
    },
    axis: {
      x: {
          type: 'category',
          categories: ['Collision Times & Frequency']
      },
    }
  });
}


// Challenge Bonus 2: Somehow incorporate the display of cards into the webpage.

// Challenge Bonus 3: Incorporate the "displaying" of a map for each card using Static Map API from MapQuest

// Inorder to get max points you will have to complete at least two bonuses