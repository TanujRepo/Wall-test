var  wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed= random(223,321);
  weight= random(30,52);
  thickness = random(22,83);

  bullet=createSprite(50,200,100,20);
  bullet.velocityX=speed;
  wall=createSprite(1500,200,thickness,height/2);
 
  }

  function hascollided(lbullet,lwall)
  {
      bulletRightEdge= lbullet.x + lbullet.width;
      wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge) 
   {
     return true
   }
      return false;
  }

function draw() {

  background(0,0,0);  

 


  drawSprites();
}