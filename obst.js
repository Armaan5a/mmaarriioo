class Obstacle {
    constructor(posX) {
     
      this.rx = posX; 
      this.ry = random([320,420,,520,620])
      this.spt=createSprite(this.rx, this.ry); 
      this.spt.shapeColor="green";
     this.spt.addAnimation("obstacle",obstacleAnimation);
     this.spt.scale=0.3;
     this.spt.velocityX=-5
     this.spt.velocityX=this.spt.velocityX+2;
    }
  
}