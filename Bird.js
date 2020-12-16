class bird{

    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1
        }
            this.body=Bodies.rectangle(x,y,width,height,options)
            this.width=width
            this.height=height
            World.add(world, this.body)
     }
    
     display(){
     this.body.position.x=mouseX;
     this.body.position.y=mouseY;
     push()
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     rectMode(CENTER)
     fill ("red")
     rect(0,0, this.width,this.height)
     pop()
  }
    



}