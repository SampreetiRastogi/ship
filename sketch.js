var ship
var sea 
var seaImage
var shipImage
function preload(){
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(600,400);
  sea=createSprite(200,300,2000,200);
  sea.addImage("sea",seaImage)
  sea.scale=0.2
  
  ship=createSprite(50,50,50,50);
  ship.addAnimation("ship",shipImage)
  ship.scale=0.2
  
  sea.velocityX=-4;
  if(sea.x<0){
    sea.x=sea.width/2
  }
  console.log(ship.y)
 if(keyDown("space")){
  ship.velocityY = -10;
  ship.velocityX = 4
}

ship.velocityY = ship.velocityY + 0.5;

//stop trex from falling down
ship.collide(sea)
  
}

function draw() {
  background(0);
drawSprites();

}


  

