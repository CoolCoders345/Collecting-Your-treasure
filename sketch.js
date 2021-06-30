var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var endImg,end

//var edges
//Game States
var PLAY=1;
var END=0;
var gameState=PLAY;
var ground

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 6;

end = createSprite(200,200,100,100)
end.addImage(endImg)
//creating boy running

boy = createSprite(70,350,20,20);
boy.addAnimation("running",boyImg);
boy.scale=0.08;

boy.setCollider("circle",0,0,7)
  
 // edges = createEdgeSprites
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
  background(0)
// console.log(gameState)
  if(gameState===PLAY){
 boy.visible = true
  boy.x = World.mouseX;
  createCash()
  createDiamonds()
  createJwellery()
  createSword()
  end.visible = false
 
  console.log("playstate")
  
  //boy.bounceOff(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    drawSprites();
    //fill(255);
    
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
  
    if (boy.isTouching(swordGroup)){
gameState = END
    }
  }
 else if (gameState  ===END){
  path.velocityY = 0
    swordGroup.visible = false
    cashG.visible = false
    jwelleryG.visible = false
    diamondsG.visible = false
   end.visible = true
  
   console.log("end")
    
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  drawSprites();
  text("Treasure: "+ treasureCollection,150,30);

  }



function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 4;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 6;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 7;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
function gameover(){
  
}