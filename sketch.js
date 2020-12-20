

var car , wall;
var speed , weight;



//playSound("crashsound.mp3")
//playSound("carcrash.wav")

function setup() {
  
  createCanvas(1600,400);
  
speed =  random(35,65);
weight = random(100,2500);

car = createSprite(50,300,40,40);
car.shapeColor = "blue"
wall = createSprite(800,300,60,height/2);

}

function draw() {

  background(255,255,255);
  
  wall.shapeColor = "Grey";
  

 car.velocityX = speed;

 if (wall.x-car.x < (car.width+wall.width)/2 ) 
 {
  car.velocityX = 0
  var deformation = 0.5 * weight * speed * speed/22509
  
  if (deformation>180) 
   {
    car.shapeColor = "Red"
   }

   if (deformation<180 && deformation>100) 
   {
    car.shapeColor = "Yellow"
   }

   if (deformation<100) 
   {
    car.shapeColor = "Green"
   }
  
}

if(wall.x-car.x < wall.width/2+car.width/2 && car.x-wall.x < wall.width/2+car.width/2
  && wall.y-car.y < wall.height/2+car.height/2 && car.y-wall.y< wall.height/2+car.height/2)
{
  car.collide(wall)
  
}

//if (car.isTouching(wall)) {
  
//}

  drawSprites();
}

