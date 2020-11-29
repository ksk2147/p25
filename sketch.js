const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var engine, world;
var dustbin1, dustbin2, dustbin3;


function setup(){
  createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

    dustbin1 = new DustBin(700, 390, 200, 20);
    dustbin2 = new DustBin(800, 350, 20, 100);
    dustbin3 = new DustBin(595, 350, 20, 100);

    paper = new Paper();
    ground = Bodies.rectangle(width / 2, 400, width, 10,
        {
          isStatic: true
      
        });
World.add(world, ground);
}

function draw(){
    rectMode(CENTER);
    background(0);

    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    paper.display();
  
    drawSprites();
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body, paper.body.position, {
        x: 12,
        y: -13
      });
    }
  }
