
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bd,bx,by,b3,b1,b2,b4,b5,b6,rod,r1,r2;
function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;
	
	rod=new bar(400,200,600,20);
	bd=50;
	bx=400;
	by=600;
    b3=new bob(bx,by,bd);
	r1=new chain(b3.body,rod.body,0,0);
	b2=new bob(bx+bd,by,bd)
    r2=new chain(b2.body,rod.body,bd,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  r1.display();
  r2.display();
  b3.display();
  b2.display();
  rod.display();
  /*if(keyWentDown("Up_Arrow"))
  {
    Matter.Body.applyForce(b3.body,b3.body.position,{x:35,y:-35});
  }
  if(keyWentDown("Down_Arrow"))
  {
    Matter.Body.applyForce(b3.body,b3.body.position,{x:-85,y:85});
  }*/
  drawSprites();
 
}



