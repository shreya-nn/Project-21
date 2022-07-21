
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, engine;
var groundObj;
var leftSide, rightSide;
var world;

function preload(){

}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	//ball_options
	var ball_options={
		isStatic: false,
		restitution: 0.3, 
		friction: 0, 
		density: 1.2,
		fill: "white" 
	};

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(200, 200, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(500, 600, 20, 120);
	rightSide = new Ground(700, 600, 20, 120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");

  ellipse(ball.position.x, ball.position.y, 20);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 2, y: -3});
	}
}



