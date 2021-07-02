class Platform {
    constructor(posX) {
      this.rw = random(100, 500);
      this.rh = random([280,160,200]);
      this.rx = posX;
      this.ry = random([700,650,750]);;  
      
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh);
      this.spt.shapeColor="green";
      this.spt.addAnimation("ground",groundAnimation);
    }
  
  
  }
  
  