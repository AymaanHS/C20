var fixedRec, movingRec;
var obstacle1, obstacle2;

function setup() {
  createCanvas(800,400);
  fixedRec = createSprite(100, 200, 50, 50);
  movingRec = createSprite(400, 200, 50, 50);
  obstacle1 = createSprite(300, 100, 50, 50);
  obstacle2 = createSprite(500, 100, 50, 50);


fixedRec.shapeColor = "green";
movingRec.shapeColor = "green";
obstacle1.shapeColor = "purple";
obstacle2.shapeColor = "purple";

  fixedRec.debug = true;
  movingRec.debug = true;
  obstacle1.debug = true;
  obstacle2.debug = true;

  obstacle1.velocityX = 4;
  obstacle2.velocityX = -4;
}

function draw() {
  background(0);  
movingRec.x = mouseX;
movingRec.y = mouseY;

if(movingRec.x-fixedRec.x<=movingRec.width/2+fixedRec.width/2&&fixedRec.x-movingRec.x<=movingRec.width/2+fixedRec.width/2
  && movingRec.y-fixedRec.y<=movingRec.height/2+fixedRec.height/2&&fixedRec.y-movingRec.y<=movingRec.height/2+fixedRec.height/2 )
{
fixedRec.shapeColor = "orange";
movingRec.shapeColor = "orange";
}
else
{
fixedRec.shapeColor = "green";
movingRec.shapeColor = "green";
}

if((obstacle1.x-obstacle2.x<=obstacle1.width/2+obstacle2.width/2&&obstacle2.x-obstacle1.x<=obstacle1.width/2+obstacle2.width/2))
{
 obstacle1.velocityX = -4;
 obstacle2.velocityX = 4;
}

  drawSprites();
}