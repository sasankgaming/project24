
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,dustBin1,dustBin2,dustBin3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustBin1 = new Dustbin(600,640,200,10);
	dustBin2 = new Dustbin(500,640,10,120);
	dustBin3 = new Dustbin(700,640,10,120);
	ground = new Ground (400,660,800,10);
	paperBall = new Paper(56,46,55,55);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  ground.display();
  paperBall.display();	

  
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85 ,y:-85});
	}

}



