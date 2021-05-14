var target1, target2, target3, target4, target5, target6;
var target1_img, target2_img, target3_img, target4_img, target5_img, target6_img;
var crosshair, crosshair_img;
var bg, bg_img;

var t1Grp, t2Grp, t3Grp,t4Grp, t5Grp, t6Grp;

function preload(){
    
  target1_img = loadImage("images/black.png");
  target2_img = loadImage("images/blue.png");
  target3_img = loadImage("images/brown.png");
  target4_img = loadImage("images/green.png");
  target5_img = loadImage("images/red.png");
  target6_img = loadImage("images/yellow.png");

  crosshair_img = loadImage("images/crosshair.png");


  bg_img = loadImage("images/background.jpg")



}

function setup(){
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(windowWidth-800, windowHeight-600,windowWidth, windowHeight);
  bg.addImage(bg_img);
  bg.scale=10
  bg.velocityX=3

  t1Grp= new Group();
  t2Grp = new Group();
  t3Grp = new Group();
  t4Grp = new Group();
  t5Grp = new Group();
  t6Grp = new Group();

  
}

function draw(){
  
    if(bg.x> windowWidth/2){
        bg.x=windowWidth-800;
    }

    spawnT1();
    spawnT2();
    spawnT3();
    spawnT4();
drawSprites();

}

function spawnT1(){
  if(frameCount%200===0){
    target1=createSprite(0,200,20,20);
    target1.addImage("target1",target1_img);
    target1.scale=0.125
    target1.y=Math.round(random(50,700));
    target1.velocityX=5;
    target1.lifetime = windowWidth*2;
    t1Grp.add(target1);
  }
}

function spawnT2(){
  if(frameCount%250===0){
     target2=createSprite(0,250,20,20);
     target2.addImage("target2", target2_img);
     target2.scale= 0.09
     target2.y=Math.round(random(50,700));
     target2.velocityX = 3;
     target2.lifetime = windowWidth*2;
     t2Grp.add(target2);

  }
}

function spawnT3(){
 if(frameCount%175===0){
    target3=createSprite(windowWidth/2, 300, 20, 20 );
    target3.addImage("target3", target3_img);
    target3.scale=0.08
    target3.x=Math.round(random(50,1000));
    target3.velocityY = 3.1427;
    target3.lifetime = windowWidth*2;
    t3Grp.add(target3);

 }
}

function spawnT4(){
  if(frameCount%275===0){
     target4=createSprite(windowWidth/2,0, 20, 20 );
     target4.addImage("target4", target4_img);
     target4.scale=0.3
     target4.x=Math.round(random(250,1000));
     target4.velocityY = 5;
     target4.lifetime = windowWidth*2;
     t4Grp.add(target4);
 
  }
 }

 function spawnT5(){
  if(frameCount%300===0){
     target5=createSprite(windowWidth/2,0, 20, 20 );
     target5.addImage("target5", target5_img);
     target5.scale=0.3
     target5.x=Math.round(random(250,1000));
     target5.velocityY = 5;
     target5.lifetime = windowWidth*2;
     t5Grp.add(target5);
 
  }
 }
 

 function spawnT6(){
  if(frameCount%345===0){
     target6=createSprite(windowWidth/2,0, 20, 20 );
     target6.addImage("target6", target6_img);
     target6.scale=0.3
     target6.x=Math.round(random(250,1000));
     target6.velocityY = 4;
     target6.lifetime = windowWidth*2;
     t6Grp.add(target6);
 
  }
 }
 

