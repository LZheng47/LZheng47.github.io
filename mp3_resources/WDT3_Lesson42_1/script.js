let limit;

function term3MinorAssessment(){
  limit = 0;
  let output = document.getElementById("output");
  // Challenge 5: Create a line chart of all your 4 minor assessments in at least two classes
  let chart = c3.generate({
    data: {
        columns: [
            ['Web Development', 100, 92, 95, 100],
            ['English', 80, 100, 100, 95],
            ['Physics', 95, 100, 97, 99]
        ],
        labels: true,
        onmouseover: function (d, i) { output.innerHTML = `${d.name} Minor ${d.x + 1} Grade: ${d.value}/100`},
        onmouseout: function (d, i) { output.innerHTML = ``}
      },
      axis: {
          x: {
              type: 'category',
              categories: ['1st Minor', '2nd Minor', "3rd Minor", "4th Minor"]
          },
          y:{
            label:{
              text: 'Grade',
              position: 'outer-middle'
            }
          }
      }
  });
}

function budget(){
  limit = 0;
  let output = document.getElementById("output");
  // Challenge 6: Create a pie chart of a budget with at least 5 items
  let chart = c3.generate({
    data: {
        columns: [
            ['Rent', 1750.00],
            ['Food', 275.25],
            ['Utilities', 328.00],
            ['Savings', 1000.00],
            ['Car Loan', 167.25],
            ['Insurance', 735.00],
            ['Entertainment', 55.25],
            ['Other/Occasional Spending', 50.00],
        ],
        type : 'pie',
        onmouseover: function (d, i) { output.innerHTML = `${d.name}: $${d.value}`; },
        onmouseout: function (d, i) { output.innerHTML = ``; }
      }
  });
  
}

function transcript(){
  let output = document.getElementById("output");
  // Challenge 7: Create a bar chart of your overall grades across at least 3 classes for term 1 and term 2
  let version1 = {
      data: {
          columns: [
              ['Web Development', 99, 100],
              ['Geometry', 100, 100],
              ['Physics', 100, 100],
              ['English', 99, 100]
          ],
          type: 'bar',
          labels: true,
          onmouseover: function (d, i) { output.innerHTML = `Term ${d.x + 1} ${d.name} Avg: ${d.value}/100`},
          onmouseout: function (d, i) { output.innerHTML = ``}
      },
      bar: {
          width: {
              ratio: 0.3
          }
      },
      axis: {
          x: {
              type: 'category',
              categories: ['Term 1', 'Term 2']
          },
          y:{
            label:{
              text: 'Grade',
              position: 'outer-middle'
            }
        }
      }
  }

  let version2 = {
    data: {
        columns: [
            ["Term 1", 99, 100, 100, 99],
            ["Term 2", 100, 100, 100, 100]
        ],
        type: 'bar',
        labels: true
    },
    bar: {
        width: {
            ratio: 0.3
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Web Development', 'Geometry', 'Physics', 'English']
        },
        y:{
          label:{
            text: 'Grade',
            position: 'outer-middle'
          }
        }
    }
  }

  let chart = c3.generate(version1);

  limit = 1;
  let timeout = 5;

  for(let i = 0; i < limit; i++){
    timeout += 3000;
  
    setTimeout(function () {
      chart = c3.generate(version2)
    }, timeout);
  
    timeout += 3000;
    setTimeout(function () {
      chart = c3.generate(version1)
    }, timeout);
  
  }

}

// Challenge Bonus 1: Explore a different type of chart
function employment(){
  let output = document.getElementById("output");

  let chart = c3.generate({
    data: {
        columns: [
            ['White', 78.0],
            ['Black or African American', 12.1],
            ['Asian', 6.4],
            ['Hispanic or Latino', 17.6]
        ],
        type : 'donut',
        onmouseover: function (d, i) { output.innerHTML = `${d.name}: ${Math.round(d.ratio*1000)/10}% of total employed in US`},
        onmouseout: function (d, i) { output.innerHTML = ``}
    },
    donut: {
        title: "Employment %s in US"
    }
  });
}


// Challenge Bonus 2: Enhance some aspect of the existing charts