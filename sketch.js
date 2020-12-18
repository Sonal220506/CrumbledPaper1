
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var leftSide, rightSide, bottomSide;
	


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,650,800,20);
	paper=new Paper(100,610,40);
	bottomSide=new Dustbin(600,630,100,20);
	leftSide=new Dustbin(550,590,20,70);
	rightSide=new Dustbin(650,590,20,70);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  
  ground.display()
  paper.display()
  bottomSide.display()
  leftSide.display()
  rightSide.display() 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
	}
}




