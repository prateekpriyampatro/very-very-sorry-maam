const Constraint= Matter.Constraint;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var polygon,ss,score;
var g,g2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
   score=0;
  
 g = new G(300,300,100,20);
 b1 = new B(290,290,50,50);
 b2 = new B (260,290,50,50);
 b3 = new B (230,290,50,50);
 b4 = new B (200,290,50,50);
 b5 = new B (280,280,50,50);
 b6 = new B (250,280,50,50);
 b7 = new B (220,280,50,50);
 b8 = new B (260,270,50,50);
 b9 = new B (240,270,50,50);
 b10 =new B (250,260,50,50);
 polygon =new B (100,200,60,60);
 ss = new SS (polygon,{x:100,y:50});
}

function draw() {
  background(255,255,255);  
  Text("SCORE :",+score,750,40);
  g.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  drawSprites();
}
function mouseDragged (){
 Matter.Body. setPosition(bird.Body,{x:mousex,y:mouseY});
}
function mouseReleased(){
ss.fly();
}