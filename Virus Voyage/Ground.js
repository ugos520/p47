class Ground {
    constructor(x,y,width,height){
        this.x=800;
        this.y=800;
        this.width=500;
        this.height=1000;
        this.image=loadImage("instantbackground.jpeg")
    }
    display(){
        rect(this.x,this.y,this.width,this.height);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}