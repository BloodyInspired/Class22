const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground;
var engine,world;
var ball;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world = engine.world;

  
  var groundoptions = {
  isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,50,groundoptions);
  World.add(world, ground);
  console.log(ground.type);
  
  var balloptions = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,100,20,balloptions);
  World.add(world, ball);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}