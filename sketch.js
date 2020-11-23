const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  var canvas= createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
   
  var ground_options={
    isStatic:true
  }
  var ball_options={
    restitution:0.8
  }
  
  ground= Bodies.rectangle(200,390,1500,10,ground_options);
  World.add(world, ground);

  ball= Bodies.circle(100,100,40, ball_options);
  World.add(world,ball);

  //console.log(ground);
  //console.log(object.position.x,object.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1500,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}