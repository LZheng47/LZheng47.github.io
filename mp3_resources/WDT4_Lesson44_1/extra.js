function amazing(){
  let build = ""
  for(let i = 0; i < 100; i++){
    build += `<div ondblclick="bodyColor(this.style.backgroundColor)" onclick="displayColor(this.style.backgroundColor)" style="background-color:${randomColor()}"></div>`
  }
  document.getElementById("extra").innerHTML = build;
}
function rnd(l,u){
  return Math.floor(Math.random()*(u-l)+l);
}
function randomColor(){
  return `rgb(${rnd(0,256)},${rnd(0,256)},${rnd(0,256)})`;
}