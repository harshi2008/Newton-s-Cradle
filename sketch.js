const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var roof
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function setup(){
	createCanvas(1270, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(650, 200, 430, 25);

	bobObject1 = new Bob(495, 420, 40);
	bobObject2 = new Bob(575, 420, 40);
	bobObject3 = new Bob(655, 420, 40);
	bobObject4 = new Bob(735, 420, 40);
	bobObject5 = new Bob(815, 420, 40);
	
	 rope1 = new Rope(bobObject1.body, roof.body, -100);
	 rope2 = new Rope(bobObject2.body, roof.body, -50);
	 rope3 = new Rope(bobObject3.body, roof.body, 0);
	 rope4 = new Rope(bobObject4.body, roof.body, 50);
	 rope5 = new Rope(bobObject5.body, roof.body, 100);

	 
}

function draw(){
	background("maroon");
	rectMode(CENTER);

	Engine.update(engine);

	roof.display();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:800, y:380})
	}
}




