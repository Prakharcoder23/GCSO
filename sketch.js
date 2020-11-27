var car,wall,speed,weight;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(20,200,60,20);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(780,200,20,height/2);
  wall.shapeColor = "brown";
}

function draw() {
  background(0);  
  if(car.isTouching(wall)){
    car.velocityX = 0;
    var D = 0.5*weight*speed*speed/22500;
    if(D>180){
      car.shapeColor = "red";
    }
    if(D<180 && D>100){
      car.shapeColor = "yellow";
    }
    if(D<100){
      car.shapeColor = "green";
    }
  }
  drawSprites();
  
}