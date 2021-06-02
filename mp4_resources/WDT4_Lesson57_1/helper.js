function getInt(message){
  return parseInt(prompt(message));
}
function getFloat(message){
  return parseFloat(prompt(message));
}
function print(message){
  console.log(message);
}
function randint(lower,upper){
  return Math.floor(Math.random()*(upper-lower) + lower);
}