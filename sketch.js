var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxPosition=width/2-100
	 boxY=610;

	 boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	 boxLeftSprite.shapeColor=color(255,0,0)

	 boxLeftBody= Bodies.rectangle(boxPosition+20, boxY,20,100, {isStatic:true})
	 World.add(world,boxLeftBody)

	 boxBase=createSprite(boxPosition+100,boxY+40,200,20);
	 boxBase.shapeColor=color(255,0,0)

	
	 boxLeftSprite=createSprite(boxPosition+200, boxY,20,100);
	 boxLeftSprite.shapeColor=color(255,0,0)

	 




	 
	





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 //packageSprite.body.setStatic(body, isStatic)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {

if (keyCode === LEFT_ARROW){

helicopterSprite.x = helicopterSprite.x-20;
translation={x:-20,y:0}
Matter.Body.translate(packageBody,translation)

}
else if (keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+20;
	translation={x:20,y:0}
	Matter.Body.translate(packageBody,translation)


}









 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);

  }

}


