class Dustbin{
    constructor(x,y,width,height){
      var options = {
        isStatic:true,
        restitution:0.8,
        friction:0.3,
        density:1.2
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width; 
      this.height=height;
      World.add(world,this.body); 
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop()
    }

}