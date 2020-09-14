const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var rope1, rope2, rope3, rope4, rope5;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400, 50, 600, 20);

	bobObject1 = new Bob(400, 600, 90);
	rope1 = new Rope(bobObject1.body, {x:400, y:50});
	
	bobObject2 = new Bob(490, 600, 90);
	bobObject3 = new Bob(580, 600, 90);

	rope2 = new Rope(bobObject2.body, {x:490, y:50});
	rope3 = new Rope(bobObject3.body, {x:580, y:50});

	bobObject4 = new Bob(310, 600, 90);
	bobObject5 = new Bob(220, 600, 90);

	rope4 = new Rope(bobObject4.body, {x:310, y:50});
	rope5 = new Rope(bobObject5.body,{x:220, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  
  drawSprites();
 
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bobObject5.body, bobObject5.body.position, {x:-60, y:-60});
	}
}
