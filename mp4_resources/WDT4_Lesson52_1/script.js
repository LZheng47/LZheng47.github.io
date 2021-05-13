/*
Universal Soldiers
You are resurrected fallen soldier armed with the skills to punch, kick and block.  You must defeat the genetically mutated aliens armed with similar skills.  Below are the rules of combat.

Punch can damaged through a Block
Block can stop a Kick
Kick outreaches a Punch

Punch > Block > Kick > Punch



Good Luck Soldiers!

////////////////////////////

Create a game to replicate the above scenario.  You must ask the user for their choice of skills to execute.  Computer will randomly select a skill to perform.  Declare the victor once combat is done.

*/

/*
Challenge Bonus: You must enhance the lesson activity in order to get maximum points.  Below are some suggestions.

1) Add another type of attack into the rules of combat.
2) Get images to display as the results of each players choice of skill performed
3) Further enhance the HTML to make it look like an arena of battle


*/
let bk_imgs = ["bk/AirForceBase.jpg","bk/Dojo.jpg","bk/SuzakuCastle.jpg"];
let soldier_imgs = ["soldier/spunch.png","soldier/sblock.png","soldier/skick.png"];
let alien_imgs = ["alien/apunch.png","alien/ablock.png","alien/akick.png"];
let moves = ["punch", "block", "kick"];

function main(){
  let soldier = getSoldierSkill();
  let alien = getAlienSkill();

  let battleResult = combat(soldier,alien);

  document.getElementById("output").innerHTML = battleResult;
  document.getElementById("body").style.backgroundImage = setbk();
}

function setbk(){
  let bkindex = randint(0,bk_imgs.length);
  return `url(${bk_imgs[bkindex]})`;
}

function getSoldierSkill(){
  //Get and return the user's choice of skill to execute
  let msg = ["The genetically mutated alien is hastily approaching you!", "Engaging in combat with a hostile mutated alien!","You are confronted by a mutated alien.","A genetically mutated alien is charging towards you!"];
  let index = randint(0,msg.length);
  return prompt(msg[index] + " Do you punch (1), block (2), or kick (3)?");
}

function getAlienSkill(){
  //Randomly select and return a skill for the computer to execute
  return randint(1,4);
}

//Punch > Block > Kick > Punch
function combat(soldier,alien){
  let punch = 1, block = 2, kick = 3;
  //Functions accepts each of the combat skills for the user and computer
  
  let result = "";

  if(soldier == punch && alien == block){
    result = "win";
  }else if(soldier == punch && alien == kick){
    result = "lose";
  }else if(soldier == block && alien == kick){
    result = "win";
  }else if(soldier == block && alien == punch){
    result = "lose";
  }else if(soldier == kick && alien == punch){
    result = "win";
  }else if(soldier == kick && alien == block){
    result = "lose";
  }else{
    result = "tied";
  }

  let hpbars = hp(result);

  let build = "<div id='avatars'>";
  build += "  <div id='soldierinfo'>";
  build += img("soldier/soldieravatar.png");
  build += hpbars[0];
  build += "  </div>";
  build += "  <div id='alieninfo'>";
  build += hpbars[1];
  build += img("alien/alienavatar.jpg");
  build += "  </div>";
  build += "</div>"
  build += "<div id='battleresult'>";
  build += "  <h3> You used " + moves[soldier-1] + " & the alien used " + moves[alien-1] + "! You " + result + "!</h3>";
  build += "</div>";
  build += "<div id='battlescene'>";
  build += "  <div id='sdiv'>";
  build += img(soldier_imgs[soldier-1],"soldierimg");
  build += "  </div>";
  build += "  <div id='adiv'>";
  build += img(alien_imgs[alien-1], "alienimg");
  build += "  </div>";
  build += "</div>";

  //Determine the victor and return an appropriate output
  return build;
}

function hp(result){
  //hpbars = [userhp, alienhp];
  let hpbars = [];
  if(result == "win"){
    hpbars.push("<div class='hpfull'> </div>");
    hpbars.push("<div class='hpnone'> </div>");
  }else if(result == "lose"){
    hpbars.push("<div class='hpnone'> </div>");
    hpbars.push("<div class='hpfull'> </div>");
  }else{
    hpbars.push("<div class='hpfull'> </div>");
    hpbars.push("<div class='hpfull'> </div>");
  }
  return hpbars;
}

function randint(lower,upper){
  let range = upper - lower;
  let num = Math.floor(Math.random() * range + lower);
  return num;
}

function img(url, classname){
  return "<img class='" + classname + "' src='" + url + "'>";
}
