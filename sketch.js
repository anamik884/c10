var sea,ship;
var seaImg,shipImg;

function preload(){
seaImg.loadImage("sea.png");
shipImg.loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
}

function setup(){
 createCanvas(400,400);

 sea=createSprite(155,100,70,40);
 sea.addImage(seaImg);
 sea.scale=1;

 ship=createSprite(200,200,100,100);
 ship.addImage(shipImg);
 ship.scale=0.5;
          
 if (sea.x<0) {
   sea.x=sea.width/2
 }
}

function draw() {
  background("blue");
  ship.collide(sea);
  drawSprites();
}