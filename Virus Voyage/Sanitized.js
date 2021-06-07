class Sanitized {
    constructor(x,y,width,height){
        this.x=150;
        this.y=900;
        this.width=40;
        this.height=40;
        this.image=loadImage("coronavirus.png")
    }

    display(){
    rect(this.x,this.y,this.width,this.height);
    image(this.image,150,900,40,40);

    }
  
  
  }