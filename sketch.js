var wondergirl;

function preload(){
wondergirlImg = loadImage("standW.png");
}

function setup() {
  createCanvas(1366,643);
  wondergirl = createSprite(70,380,20,20);
  wondergirl.addImage("stand",wondergirlImg);
  wondergirl.scale = .40;
}

function draw() {
  background(225,225,225);  

  drawSprites();
}