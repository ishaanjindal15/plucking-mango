
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var stone;
var slingshot;
var boyimage;
var mangoimage;
var treeimage;
var stoneimage;


function preload()
{
//boyimage=loadImage("../images/boy(1).png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,600,800,15);
tree = new Tree(620,543,50,100);
mango = new Mango(600,500);
stone= new Stone(100,500,20,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  stone.display();
  mango.display();
 // boyimage.display();
  drawSprites();
 
}




