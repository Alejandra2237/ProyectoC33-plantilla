

var player;
var score=0;

function preload(){

}

function setup(){
createCanvas(400, 400);



player = createSprite(200,50,15,15);
player.shapeColor = "white";

}


function draw() {
  background("black");
  textSize(15);
  fill("yellow");
  text("Puntos: "+ score, 20, 25);

  createEdgeSprites();

  if(keyCode === UP_ARROW) {
    player.y = player.y -4;
  }
  if(keyCode === DOWN_ARROW) {
    player.y = player.y +4;
  }
  if(keyCode === LEFT_ARROW) {
    player.x = player.x -4;
  }
  if(keyCode === RIGHT_ARROW) {
    player.x = player.x +4;
  }
 
  
  drawSprites();
}
