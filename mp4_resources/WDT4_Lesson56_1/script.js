function main(){
  let course = {
    code: "MKFKC4TC",
    period: 2,
    students:{
      grades:[60.94,72.5,46.05,28.75,70.94,59.21,74.37,48.21,48.21,77.5,96.25,53.33,76.25,74.38,64.15,48.21,45.62,48.21,48.21,43.12,48.21,36.56,51.34,87.19,48.21,48.21,63.13,88.75,48.21,86.25,97.5,79.37,91.25],
      passing:0,
      failing:0
    }
  }
  // Challenge 1: Display the course code and period
  print("Course Code: " + course.code);
  print("Period: " + course.period);

  // Challenge 2: Display the number of students in the course.  Hint:  There is a grade for each student.  Do not manually count.  Use programming.
  let arr = course.students.grades;
  print("Number of Students: " + arr.length);

  // Challenge 3:  Display the average of all the grades.  Use the totalArray function provided at the end of the repl.it as part of your solution.
  print("Average Grade: " + (totalArray(arr)/arr.length).toFixed(3));

  // Challenge 4: Count the number of failing and passing grades.  Assign those numbers back into the JSON.
  let passing = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 65){
      passing++;
    }
  }
  course.students.passing = passing;
  course.students.failing = arr.length - passing;

  // Challenge Bonus: Any grade in the range of 55 to 64 change to 65.  Hint:  This really is an array challenge.  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 55 && arr[i] <= 64){
      arr[i] = 65;
    }
  }

}

function totalArray( n ){
  let sum = 0;
  for(let i = 0; i < n.length; i++){
    sum += n[i];
  }
  return sum;
}