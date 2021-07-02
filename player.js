class Player
{
    constructor() {
		this.spt=createSprite(500,200, 100,100);
		this.spt.shapeColor="blue";
    this.spt.addAnimation("mario",marioAnimation);
		this.spt.scale=0.5;
	}

  applyGravity(){
        this.spt.velocityY=this.spt.velocityY+2;
	}
	 
    moveLeft(){
      this.spt.x=this.spt.x-10
     }
    
     moveRight(){
        this.spt.x=this.spt.x+10
       }
     jump(){
         this.spt.velocityY=-31
     }
    
    }
