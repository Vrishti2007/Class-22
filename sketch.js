var movingRect, fixedRect
var gameObj1,gameObj2,gameObj3;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100,100,50,100)
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"

  gameObj1 = createSprite(600, 300, 100, 50)
  gameObj1.shapeColor = "yellow"
  gameObj2 = createSprite(200, 100, 50, 100)
  gameObj2.shapeColor = "pink"
  gameObj3 = createSprite(600, 100, 100, 50)
  gameObj3.shapeColor = "blue"
}

function draw() {
  background(0);
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  
  
  if(isTouching(movingRect, gameObj2)){

    movingRect.shapeColor = "red"
    gameObj2.shapeColor = "red"
}
else{
  movingRect.shapeColor = "green"
  gameObj2.shapeColor = "pink"

}


  drawSprites();
}

function isTouching(obj1, obj2){

  if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x <obj2.width/2 + obj1.width/2 
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2 ){
     return true;
  }
else{
    return false;
}

}


