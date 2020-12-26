var helicopterIMG, helicopterSprite, packageSprite, packageSprite3,package2Sprite,packageIMG,packageIMG2,packageIMG3;
var packageBody2,packageBody3,packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Line1,Line2,Line3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");
	packageIMG2=loadImage("package 2.png");
	packageIMG3=loadImage("package 3.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//creating a red line
	Line1 = createSprite(300,615,20,100);
	Line1.shapeColor=color(225,0,0);

	Line2 = createSprite(500,615,20,100);
	Line2.shapeColor=color(225,0,0);

	Line3 = createSprite(400,655,200,20);
	Line3.shapeColor=color(225,0,0);

	//creating package sprites
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.scale=0.2;
	packageSprite.addImage(packageIMG)

	package2Sprite=createSprite(480, 80, 10,10);
	package2Sprite.scale=0.2;
	package2Sprite.addImage(packageIMG2)

	packageSprite3=createSprite(330, 80, 10,10);
	packageSprite3.scale=0.2;
	packageSprite3.addImage(packageIMG3)

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 10 , {isStatic:true});
	World.add(world, packageBody);

	packageBody2 = Bodies.circle(width/2 , 200 , 10 , {isStatic:true});
	World.add(world, packageBody2);

	packageBody3 = Bodies.circle(width/2 , 200 , 15 , {isStatic:true});
	World.add(world, packageBody3);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	if(keyDown("down_arrow")){
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	} 

}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  package2Sprite.x= packageBody2.position.x 
  package2Sprite.y= packageBody2.position.y 

  packageSprite3.x= packageBody3.position.x 
  packageSprite3.y= packageBody3.position.y 

  //colliding packages to lines 	
  packageSprite.collide(Line1);
  packageSprite.collide(Line2);
  packageSprite.collide(Line3);

  package2Sprite.collide(Line1);
  package2Sprite.collide(Line2);
  package2Sprite.collide(Line3);

  packageSprite3.collide(Line1);
  packageSprite3.collide(Line2);
  packageSprite3.collide(Line3);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
  if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody2,false);
  }
  if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody3,false);
  }

}