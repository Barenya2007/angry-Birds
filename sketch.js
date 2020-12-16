const World= Matter.World;
const Bodies= Matter.Bodies;
const Engine= Matter.Engine;

var engine, world, ground;

function setup() {
  createCanvas(1200,600);

  engine= Engine.create()
  world= engine.world

  
  box1=new Box(800,540,70,70)
  box2=new Box(1100,540,70,70)
  pig1=new pig(950, 540, 70,70)
  log1=new log(950, 500,380,PI/2)
  box3=new Box(800,450,70,70)
  box4=new Box(1100,450,70,70)
  pig2=new pig(950,450,70,70)
  log2=new log(950,400,380,PI/2)
  box5=new Box(950,340,70,70)
  log3=new log(870,340,150,PI/7)
  log4=new log(1030,340,150,-PI/7)

  bird1=new bird(200,100,70,70)

  ground=new Ground(600,590,1200,10)
}

function draw() {
 background("black");  

 Engine.update(engine)

  box1.display()
  box2.display()
  ground.display()
  pig1.display()
  log1.display()
  box3.display()
  box4.display()
  pig2.display()
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  bird1.display()
}