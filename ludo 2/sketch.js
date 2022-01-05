var dice, dice_running,edges;
var groundImage;
var ground;

var redplayer1,redplayer2,redplayer3,redplayer4;
var yellowplayer1,yellowplayer2,yellowplayer3,yellowplayer4;

var redplayer1Image,redplayer2Image,redplayer3Image,redplayer4Image;
var yellowplayer1Image,yellowplayer2Image,yellowplayer3Image,yellowplayer4Image;

var black;

function preload(){
  dice_running = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
  groundImage = loadImage("board.png");

  redplayer1Image = loadImage("red goti.png");
  redplayer2Image = loadImage("red goti.png");
  redplayer3Image = loadImage("red goti.png");
  redplayer4Image = loadImage("red goti.png");

  yellowplayer1Image = loadImage("yellow goti.png");
  yellowplayer2Image = loadImage("yellow goti.png");
  yellowplayer3Image = loadImage("yellow goti.png");
  yellowplayer4Image = loadImage("yellow goti.png");
}

function setup(){
  createCanvas(700,550);
  
  // creating trex
  dice = createSprite(100,460,400,500);
  dice.addAnimation("moveing", dice_running);
 
  edges = createEdgeSprites();
  ground=createSprite(500,300,700,600);
  ground.addImage(groundImage);

  redplayer1= createSprite(95,460,400,500);
  redplayer1.addImage(redplayer1Image);
  redplayer2 = createSprite(165,460,400,500);
  redplayer2.addImage(redplayer2Image);
  redplayer3 = createSprite(130,425,400,500);
  redplayer3.addImage(redplayer3Image);
  redplayer4 = createSprite(130,495,400,500);
  redplayer4.addImage(redplayer4Image);
///////255,510
  yellowplayer1 = createSprite(485,140,400,500);
  yellowplayer1.addImage(yellowplayer1Image);
  yellowplayer2 = createSprite(410,140,400,500);
  yellowplayer2.addImage(yellowplayer2Image);
  yellowplayer3 = createSprite(450,180,400,500); 
  yellowplayer3.addImage(yellowplayer3Image);
  yellowplayer4 = createSprite(450,105,400,500);
  yellowplayer4.addImage(yellowplayer4Image);

  black = createSprite(100,500,225,250);

  //adding scale and position to trex
  dice.scale = 0.5;
  dice.x = 630;

  black.scale = 0.5;
  black.x = 630;

  ground.scale = 2.5;
  ground.x = 290;

  redplayer1.scale = 0.5
  redplayer1.X = 50;

  redplayer2.scale = 0.5
  redplayer2.X = 50;

  redplayer3.scale = 0.5
  redplayer3.X = 50;

  redplayer4.scale = 0.5
  redplayer4.X = 50;

  yellowplayer1.scale = 0.5
  yellowplayer1.X = 50;

  yellowplayer2.scale = 0.5
  yellowplayer2.X = 50;

  yellowplayer3.scale = 0.5
  yellowplayer3.X = 50;

  yellowplayer4.scale = 0.5
  yellowplayer4.X = 50;
}

function draw(){
  //set background color 
  background("blue");
  
  //logging the y position of the trex
  console.log(dice.y);
  console.log(ground.y);
  
  //jump when space key is pressed
  if(keyDown("space")){
   dice.velocityY = -18;
 }

 dice.velocityY = dice.velocityY + 0.5;
  //stop trex from falling down
  dice.collide(edges[3]);
  drawSprites();



}