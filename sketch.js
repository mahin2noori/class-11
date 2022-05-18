
var trex ,trex_running;
var ground,ground_image;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex=createSprite(50,140,10,10);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5
ground = createSprite(200,200,400,20);
}


function draw(){
  background(180)
  if(keyDown("space")){
   trex.velocityY = -10; 
  }
  trex.velocityY=trex.velocityY +0.8;
  trex.collide(ground);
drawSprites();
}
