
var countDistanceX=0,mario;
var platformGroup, obstG;
var marioAnimation, obstacleAnimation, wallAnimation, groundAnimation;
var flag;
var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;

function preload()
{
  marioAnimation=loadAnimation("images/Capture1.png","images/Capture4.png","images/Capture3.png");
  obstacleAnimation=loadAnimation("images/obstacle1.png");
  wallAnimation=loadAnimation("images/wall.png");
  groundAnimation=loadAnimation("ground.png");  
  flagAnimation=loadAnimation("images/Flag.png");
}

function setup() {
  createCanvas(windowWidth,650);
  
  platformGroup=createGroup()
  obstG=createGroup()
  
  mario = new Player(); 
  
  for (var i =0 ;i<5; i=i+1){
    platform1=new Platform(countDistanceX);
    platformGroup.add(platform1.spt);
    gap=random([0,30,30,20,50,0,40,0])
    countDistanceX=countDistanceX+platform1.rw+gap
    
     if(i%2===0){
      wall=new Wall(countDistanceX);
      platformGroup.add(wall.spt);
    }
    if(i%3===0){
      obstacle=new Obstacle(countDistanceX);
      obstG.add(obstacle.spt)
    }
  
  }

  flag=createSprite(countDistanceX-150,height-320);
  flag.addAnimation("flagimg",flagAnimation);
  flag.scale=0.4;
  flag.debug=true
  flag.setCollider("rectangle",0,0,250,2520);
}

function draw() {
  background('skyblue'); 
  translate(-mario.spt.x+width/2,0)
    
  if(gameState==PLAY){ 
    
    mario.applyGravity();
    mario.spt.collide(platformGroup);
    
    if(keyDown("left")){
      mario.moveLeft()
    }
    
    if(keyDown("right")){
      mario.moveRight()
    }
    
     if(keyDown("up")&&(mario.spt.velocityY===0)){
      mario.jump()
    } 
    
    if(obstG.isTouching(mario.spt)||(mario.spt.y>height+50)){
      gameState=LOSE
    }
          
    if(flag.isTouching(mario.spt)){
      gameState=WIN
    }
  }
  
  drawSprites();
  
  if(gameState==LOSE){ 
    obstG.destroyEach()
    mario.spt.setVelocity(0,0)
    mario.spt.pause()
    fill("BLUE")
    textSize(35)
    text("GAME OVER",mario.spt.x,280)
  }

  if(gameState==WIN){ 
    obstG.destroyEach()
    mario.spt.setVelocity(0,0)
    mario.spt.pause()
    fill("red")
    textSize(35)
    text("YOU WON",mario.spt.x,280)
    
   }
 
  
}

