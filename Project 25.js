
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall,dustbin1,dustbin2,dustbin3,baseImg,base,ground;

function setup() {
	var canvas = createCanvas(700,600);
	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(150,565,25);
	base = new Dustbin(550,510,100,100);
	dustbin1 = createSprite(550,560,75,20);
	dustbin1.shapeColor = "white";
	dustbin2 = createSprite(513,510,15,100);
	dustbin2.shapeColor = "white";
	dustbin3 = createSprite(587,510,15,100);
	dustbin3.shapeColor = "white";
	ground = new Ground(350,570,700,20);

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");
  textSize(32);
  fill("black");
  text("Press up arrow to throw",300,100);
  text("Press down arrow to drop",300,150);
  Engine.update(engine);
  keyPressed();
  drawSprites();
  paperBall.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  base.display();
  
  
  
  
  
  
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1,y:-6});
	}
}



