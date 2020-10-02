var car3;
var wall3;
var speed;
var weight;
var stopper3;

function setup() {
  createCanvas(1250,600);

  speed = random(55,90);
  weight = random(400,1500);

  car3 = createSprite(50,375,45,45);
  car3.shapeColor = color("white");
  wall3 = createSprite(625,500,1250,10); 
  wall3.shapeColor=color(20,80,300);

   stopper3 = createSprite(1200,375,30,150);
}

function draw() {
  background(0,0,0);
  
  car3.velocityX = speed;

  drawSprites();
  
  if(stopper3.x-car3.x < (car3.width+stopper3.width)/2){
    car3.velocityX = 0; 
    
    var deformation3 = 0.5 * weight * speed * speed/22509;
    
    if(deformation3 > 180){
      car3.shapeColor = color(255,0,0);
    }
    if(deformation3 < 180 && deformation3 > 100){
      car3.shapeColor = color(230,230,0);
    }
    if(deformation3 < 100){
      car3.shapeColor = color(0,255,0);
    }
  }
}