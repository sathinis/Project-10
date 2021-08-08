var sea,ship,seaIMG,shipIMG
function preload(){
seaIMG = loadImage("sea.png")
shipIMG = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaIMG);
  sea.velocityX = -5;
  sea.scale = 0.3;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("running",shipIMG)
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  sea.velocityX = -5;
  if(sea.x < 0) {
    sea.x = sea.width/8
  }
  drawSprites();

}