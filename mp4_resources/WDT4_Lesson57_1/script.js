let data, boroughs, vehicle_types, contributing_factors, injured, deaths;
function main(){
  // Challenge 1: Load the JSON information in data.js into a variable. Link to source of the data: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
  data = loadJSON("data.js");

  // Challenge 2: Display the number of accidents by borough.  What borough had the most accidents?
  boroughs = jsonCategories(data, "borough");
  print(boroughs);
  print("Brooklyn has the most number of accidents, after Queens. Most accidents however, were unidentifiable.\n\n");

  // Challenge 3: What are the number of accidents by vehicle type?  Which vehicle type was involved in the most accidents?
  vehicle_types = jsonCategories(data, ["vehicle_type_code1","vehicle_type_code2"]);
  print(vehicle_types);
  print("Sedans are involved in most accidents, with Station Wagon/Sport Utility Vehicles being the second most frequent.\n\n");
  
  // Challenge 4: What are the different contributing factors for accidents?  What is the frequency of each of these contributing factors?  Which contributing factor was the result of the most accidents?
  contributing_factors = jsonCategories(data, ["contributing_factor_vehicle_1","contributing_factor_vehicle_2"]);
  print(contributing_factors);
  print("Driver Inattention/Distraction was the contributing factor that resulted in the most accidents.\n\n")

  // Challenge 5: How many people were injured in accidents?  Hint: There are different ways to accomplish.
  injured = jsonCategories(data, "number_of_persons_injured");
  print(injured);
  print("In most accidents, no one was injured, but still frequent that one person or two were injured.\n\n");

  // Challenge Bonus: Find some interesting information that you can aggregrate from the data.  Explain what the results state!
  deaths = jsonCategories(data, "number_of_persons_killed");
  print(deaths);
  print("For the overwhelming majority of the 1000 accidents that occurred recently, no one was killed. In two rare cases, a total of one person died.\n\n")

}

function loadJSON(link){
  $.ajaxSetup({async: false});
  let data = $.getJSON(link).responseJSON;
  return data;
}
function jsonCategories(data,key){
  let categories = {};

  if(typeof(key) == "object"){
    for(let n = 0; n < key.length; n++){
      for(let i = 0; i < data.length; i++){
        if(categories[data[i][key[n]]]){
          categories[data[i][key[n]]]++;
        }else{
          categories[data[i][key[n]]] = 1;
        }
      }
    }
  }else{
    for(let i = 0; i < data.length; i++){
      if(categories[data[i][key]]){
        categories[data[i][key]]++;
      }else{
        categories[data[i][key]] = 1;
      }
    }
  }

  return categories;
}
