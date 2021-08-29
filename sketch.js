var sword, swordImage, enemyG, enemyImage, fruit1, fruit2,
    fruit3, fruit4,fruit1x, fruit2x,fruit3x, fruit4x, fruitG,
     fruit1Image, fruit2Image, fruit3Image, fruit4Image, score
     ,gameOverImage

var gameOverSound
var knifeSwordSound
var backgorundimg;
var back
var PLAY=1
var END=0
var gameState=PLAY



function preload(){
  swordImage= loadImage("sword.gif")
  enemyImage=loadAnimation("alien1.png","alien2.png")
  fruit1Image=loadImage("f1.gif")
  fruit2Image=loadImage("f2.gif")
  fruit3Image=loadImage("f3.gif")
  fruit4Image=loadImage("f4.gif")
  gameOverImage=loadImage("gameover.png")
  gameOverSound=loadSound("gameover.mp3")
  knifeSwordSound=loadSound("knifeSwooshSound.mp3")
  backgorundimg=loadImage("bg2.gif")
  back
 
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background=createSprite(windowWidth,windowHeight);
  background.addImage("bg2",backgorundimg)
  background.scale=5.3;
  
  sword=createSprite(200,200,100,100)
  sword.addImage(swordImage)
  sword.scale=0.3;
  
  
  
  enemyG= new Group()
  fruitG= new Group()
  
  score=0
  
}


function draw(){
//background(backgroundimg)


  
  

 if (gameState===PLAY) {
sword.x=World.mouseX
sword.y=World.mouseY
  
  var select_item = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (select_item == 1) {
      fruit1()
      fruit1y();
    } else if (select_item == 2) {
      enemy()
    } else if (select_item == 3) {
      fruit2()
      fruit2y();
    } else if (select_item == 4){
      fruit3()
      fruit3y();
   } else {
      fruit4()
      fruit4y();
    }
     }
 
   if(sword.isTouching(fruitG)){
     fruitG.destroyEach()
    score=score+10;
      knifeSwordSound.play()
     }
   
   else
     
   if(sword.isTouching(enemyG)){
     enemyG.destroyEach()
    gameState=END;
     fruitG.destroyEach()
     enemyG.setVelocityXEach(0)
     fruitG.setVelocityXEach(0)
     sword.addImage(gameOverImage)
     sword.scale=2
     sword.x=300
     sword.y=200
     gameOverSound.play()
      }
   }
  
  
  
  
  
 
  
  drawSprites();
  fill("white")
  textSize(40)
  
 text("Score: "+ score, 800,50);
 fill(144,238,144)
 text("Covid Free Ninja",20,50)
  
}

function enemy(){

 var enemy=createSprite(600,Math.round(random(30,400)),10,10)
  
 enemy.addAnimation("enemy_blinking",enemyImage)
  enemy.velocityX=-(7+(score/10));
  enemy.scale=0.4
  enemy.lifetime=150
  enemyG.add(enemy)
  
}

function fruit1(){
   var fruit1=createSprite(600,Math.round(random(30,400)),10,10)
   var set_position=Math.round(random(1,2));
  if (set_position==1){
    fruit1.x=600;
    fruit1.velocityX=-(7+(score/4));
    }else{
      fruit1.x=0;
      fruit1.velocityX=7+(score/4)
    }
  
    fruit1.addImage(fruit1Image)
  fruit1.scale=1
  fruit1.lifetime=150
  fruitG.add(fruit1)
  
  }

function fruit2(){
   var fruit2=createSprite(600,Math.round(random(30,400)),10,10)
   var set_position=Math.round(random(1,2));
  if (set_position==1){
    fruit2.x=600;
    fruit2.velocityX=-(7+(score/4));
    }else{
      fruit2.x=0;
      fruit2.velocityX=7+(score/4)
    }
    
    fruit2.addImage(fruit2Image)
  fruit2.scale=1
  fruit2.lifetime=150
  fruitG.add(fruit2)
  }

function fruit3(){
   var fruit3=createSprite(600,Math.round(random(30,400)),10,10)
   var set_position=Math.round(random(1,2));
  if (set_position==1){
    fruit3.x=600;
    fruit3.velocityX=-(7+(score/4));
    }else{
      fruit3.x=0;
      fruit3.velocityX=7+(score/4)
    }
    fruit3.addImage(fruit3Image)
  fruit3.scale=1
  fruit3.lifetime=150
  fruitG.add(fruit3)
  }

function fruit4(){
   var fruit4=createSprite(600,Math.round(random(30,400)),10,10)
   var set_position=Math.round(random(1,2));
  if (set_position==1){
    fruit4.x=600;
    fruit4.velocityX=-(7+(score/4));
    }else{
      fruit4.x=0;
      fruit4.velocityX=7+(score/4)
    }
    fruit4.addImage(fruit4Image)
  fruit4.scale=1
  fruit4.lifetime=150
  fruitG.add(fruit4)
  }
  function fruit1y(){
    var fruit1y=createSprite(Math.round(random(30,400)),600,10,10)
    var set_position=Math.round(random(1,2));
   if (set_position==1){
     fruit1y.y=600;
     fruit1y.velocityY=-(7+(score/4));
     }else{
       fruit1y.y=0;
       fruit1y.velocityY=7+(score/4)
     }
   
     fruit1y.addImage(fruit1Image)
   fruit1y.scale=1
   fruit1y.lifetime=150
   fruitG.add(fruit1y)
   
   }
   function fruit2y(){
    var fruit2y=createSprite(Math.round(random(30,400)),600,10,10)
    var set_position=Math.round(random(1,2));
   if (set_position==1){
     fruit2y.y=600;
     fruit2y.velocityY=-(7+(score/4));
     }else{
       fruit2y.y=0;
       fruit2y.velocityY=7+(score/4)
     }
     
     fruit2y.addImage(fruit2Image)
   fruit2y.scale=1
   fruit2y.lifetime=150
   fruitG.add(fruit2y)
   }
 
 function fruit3y(){
    var fruit3y=createSprite(Math.round(random(30,400)),600,10,10)
    var set_position=Math.round(random(1,2));
   if (set_position==1){
     fruit3y.y=600;
     fruit3y.velocityY=-(7+(score/4));
     }else{
       fruit3y.y=0;
       fruit3y.velocityY=7+(score/4)
     }
     fruit3y.addImage(fruit3Image)
   fruit3y.scale=1
   fruit3y.lifetime=150
   fruitG.add(fruit3y)
   }
 
 function fruit4y(){
    var fruit4y=createSprite(Math.round(random(30,400)),600,10,10)
    var set_position=Math.round(random(1,2));
   if (set_position==1){
     fruit4y.y=600;
     fruit4y.velocityY=-(7+(score/4)); 
     }else{
       fruit4y.y=0;
       fruit4y.velocityY=7+(score/4)
     }
     fruit4y.addImage(fruit4Image)
   fruit4y.scale=1
   fruit4y.lifetime=150
   fruitG.add(fruit4y)
   }
