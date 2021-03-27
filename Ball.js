class Ball{
    constructor(x,y,width,height,angle){
     var options = {
      'density':1,
      'frictionAir':0.005
     }
    
this.body =Bodies.rectangle(x,y,width,height)
    this.width = width;
    this.height = height;
    World.add(world,this.body)

}
display(){
    var position = this.body.position;
    var angle = this.body.angle
    push()
    translate(position.x,position.y)
    rotate(angle)
    ellipse(0,0,this.width,this.height)
    pop()

}
}