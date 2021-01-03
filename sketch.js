var ninja;
var star;
var background1;
var ninja_image;
var level1;
var level2;
var level3;
var level4;
var level5;
var equipments;
var ninja_runnerback;
var WEAPONSCREEN=1;
var ninjastar1;
var ninjastar1image;
var ninjastar2;
var ninjastar2image;
var ninjastar3;
var ninjastar3image;
var ninjastar4;
var ninjastar4image;
var ninjastar5;
var ninjastar5image;
var gameState=0;
var start1=2;
var weapons=3;
var level1text;
var ninja_runner;
function preload(){
  ninja_image=loadAnimation("standing.png");
  ninjastar1image=loadImage("ninja star1.png");
  ninjastar2image=loadImage("ninja star2.png");
  ninjastar3image=loadImage("ninja star3.png");
  ninjastar4image=loadImage("ninja star4.png");
  ninjastar5image=loadImage("ninja star5.png");
  background1=loadImage("images.jpg");
  ninja_runner=loadAnimation("runner1.png","runner2.png","runner3.png","runner4.png","runner5.png","runner6.png");
  ninja_runnerback=loadAnimation("runner6.png","runner5.png","runner4.png","runner3.png","runner2.png","runner1.png")
}
function setup() {
  createCanvas(1100,600);
  //createSprite(400, 200, 50, 50);
  ninja=createSprite(100,200,50,50);
  ninja.addAnimation("stand",ninja_image);
  ninja.addAnimation("ninja",ninja_runner);
  ninja.addAnimation("ninjaback",ninja_runnerback);
  level1=createSprite(200,300,100,50);
  level1text=createElement('h2');
  level1text.html("level1");
  level1text.position(175,270);
  equipments=createSprite(800,350,200,70);
  equipments.visible=false;
  weaponstext=createElement('h2');
  weaponstext.html("weapons");
  weaponstext.position(760,320);
  weaponstext.hide();
  //console.log(text);
  ninjastar1=createSprite(100,300,5,5);
  ninjastar1.addImage(ninjastar1image);
  ninjastar2=createSprite(200,300,10,10);
  ninjastar2.addImage(ninjastar2image);
  ninjastar3=createSprite(300,300,10,10);
  ninjastar3.addImage(ninjastar3image);
  ninjastar4=createSprite(400,300,10,10);
  ninjastar4.addImage(ninjastar4image);
  ninjastar5=createSprite(500,300,10,10);
  ninjastar5.addImage(ninjastar5image);
}

function draw() {
  background(background1);  
  
  if(keyDown(RIGHT_ARROW)){
    ninja.changeAnimation("ninja",ninja_runner);
    ninja.position.x=ninja.position.x+5;
  }
  if(keyWentUp(RIGHT_ARROW)){
    ninja.changeAnimation("stand",ninja_image);
  }
  if(keyDown(LEFT_ARROW)){
    ninja.changeAnimation("ninjaback",ninja_runnerback);
    ninja.position.x=ninja.position.x-5;
  }
  if(keyWentUp(LEFT_ARROW)){
    ninja.changeAnimation("stand",ninja_image);
  }
  if(keyDown(DOWN_ARROW)){
    ninja.position.y=ninja.position.y+5;
  }
  if(keyDown(UP_ARROW)){
    ninja.position.y=ninja.position.y-5;
  }
 if(mousePressedOver(level1)){
   gameState=2;
 }
 if(gameState===2){
  funlevel1();
 }
  drawSprites();
}
function funlevel1(){
  ninja.visible=false;
  level1.visible=false;
  equipments.visible=true;
  level1text.hide();
 weaponstext.show();
 
 
  if(mousePressedOver(equipments)){
    console.log("eee");
    gameState=3;
  }
  console.log(gameState);
  if(gameState===3){
    equipments.visible=false;
    weaponstext.hide();

  }
}