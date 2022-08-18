var box
function setup() {
  createCanvas(600,600);
  box = createSprite(50,300, 10, 10)
}

function draw() 
{
  background(30);

  if(keyDown(DOWN_ARROW)){
    box.y += 2
  }
  if(keyDown(UP_ARROW)){
     box.y -= 2
  }
  if(keyDown(LEFT_ARROW)){
    box.x -= 2
  }
  if(keyDown(RIGHT_ARROW)){
    box.x += 2
  }
  drawSprites()
}




