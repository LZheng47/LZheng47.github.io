let output, key;

function init(){
  // Challenge 2: Add the ajax / async code.  Set the variable output to the "output" container.
  $.ajaxSetup({async:false});
  output = document.getElementById("output");
  key = "8fzvGfL0KOXaJnjf9wrWTfC34bWIUzzv";
}

function example(){
  // Grab the appropriate data using an API Call
  data = $.getJSON('https://data.cityofnewyork.us/resource/erm2-nwe9.json').responseJSON;
  let build = ``

  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    build += `<div class="cards">`;
    build += `     <h2>${complaint.complaint_type}</h2><hr>`;
    build += `     <p>${complaint.incident_address}<br>${complaint.incident_zip}<br>${complaint.city}</p><hr>`;
    build += `     <h3>${complaint.created_date}</h3>`;
    build += `</div>`;
  }
  output.innerHTML = build;
}
// For all challenges below display cards with some information of the given dataset.  Display an appropriate title for each dataset in each challenge.

/* Challenge 3: Vehicle Collisions
   https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95  
*/

function challenge1(){
  data = $.getJSON('https://data.cityofnewyork.us/resource/h9gi-nx95.json').responseJSON;
  let url;
  let build = ``;

  for(let i = 0; i < data.length; i++){
    let street;
    let collision = data[i];
    if(collision.on_street_name != undefined){
      street = collision.on_street_name;
    }else if(collision.off_street_name != undefined){
      street = collision.off_street_name;
    }else{
      street = collision.cross_street_name;
    }

    if(collision.latitude != undefined){
      url =  `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${collision.latitude},${collision.longitude}&size=250,250&zoom=15`;
    }else{
      url =  `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${street},NY&size=250,250&zoom=15`;
    }
    
    build += `<div class="cards">`
    build += `     <h2>${collision.vehicle_type_code1} & ${collision.vehicle_type_code2}</h2><hr>`
    build += `     <h3> Location of Incident: </h3>`;
    build += `     <img src="${url}">`;
    build += `     <p> ${street} </p>`;
    build += `     <p> ${collision.borough} NY ${collision.zip_code}</p><hr>`
    build += `     <h3>${collision.crash_date} ${collision.crash_time}</h3>`
    build += `</div>`
  }
  output.innerHTML = build;
}

/* Challenge 4: NYC Jobs
   https://data.cityofnewyork.us/City-Government/NYC-Jobs/kpav-sd4t
*/

function challenge2(){
  data = $.getJSON('https://data.cityofnewyork.us/resource/kpav-sd4t.json').responseJSON;
  let build = ``

  for(let i = 0; i < data.length; i++){
    let job = data[i];
    let url =  `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${job.work_location_1}&size=250,250&zoom=15`;
    build += `<div class="cards">`;
    build += `     <h2>${job.business_title}</h2><hr>`;
    build += `     <p> Dept/Agency: ${job.agency}</p>`;
    build += `     <p> Field(s): ${job.job_category} </p> <hr>`;
    build += `     <p> Workplace: ${job.work_location_1} </p>`;
    build += `     <img src="${url}"> <hr>`;
    build += `     <p> Shift Time: ${job.hours_shift} </p>`;
    build += `     <p> ${job.salary_frequency} Salary: $${job.salary_range_from}~$${job.salary_range_to}</p>`;
    build += `</div>`;
  }
  output.innerHTML = build;
}

/* Challenge 5: NYPD Arrest
   https://data.cityofnewyork.us/Public-Safety/NYPD-Arrest-Data-Year-to-Date-/uip8-fykc
*/

function challenge3(){
  data = $.getJSON('https://data.cityofnewyork.us/resource/uip8-fykc.json').responseJSON;
  let build = ``

  for(let i = 0; i < data.length; i++){
    let arrest = data[i];
    let url =  `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${arrest.latitude},${arrest.longitude}&size=250,250&zoom=15`;
    build += `<div class="cards">`;
    build += `     <h2>${arrest.ofns_desc}</h2><hr>`;
    build += `     <p> Perpetrator Information:</p>`;
    build += `     <p class="indent"> Age Range: ${arrest.age_group} </p>`;
    build += `     <p class="indent"> Sex: ${arrest.perp_sex}</p>`;
    build += `     <p class="indent"> Race: ${arrest.perp_race} </p>`;
    build += `     <p> Location: (${arrest.latitude}, ${arrest.longitude}) </p>`;
    build += `     <img src="${url}"> <hr>`;
    build += `     <h3> Arrest Date: ${arrest.arrest_date} </h3>`;
    build += `</div>`;
  }
  output.innerHTML = build;
}

//Challenge Bonus: Find your own dataset in NYC Open Data and provide a preview to the data


function bonus1(){
  data = $.getJSON('https://data.cityofnewyork.us/resource/jb7j-dtam.json').responseJSON;
  let build = ``

  for(let i = 0; i < data.length; i++){
    let death = data[i];
    build += `<div class="cards">`;
    build += `     <h2>${death.leading_cause} ~ ${death.year}</h2><hr>`;
    build += `     <p> Death(s): ${death.deaths}</p>`;    
    build += `     <p> Sex: ${death.sex}</p>`;
    build += `     <p> Race/Ethnicity: ${death.race_ethnicity} </p>`;
    build += `     <p> Death Rate: ${death.death_rate}%</p>`;
    build += `</div>`;
  }
  output.innerHTML = build;
}
