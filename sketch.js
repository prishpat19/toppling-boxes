const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box3, box5;
var pig1, pig3;
var log1, log3, log4, log5;
var bird;
var ground;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(810,460,70,70);
    box2 = new Box(920,620,70,70);
    box3 = new Box(700,540,70,70);
    box4 = new Box(920,540,70,70);
    box5 = new Box(700,620,70,70);
    pig1 = new Pig(810, 650);
    pig3 = new Pig(810, 520);
    log1 = new Logs(810, 560, 300, PI/2);
    log3 = new Logs(810, 480, 300, PI/2);
    log4 = new Logs(760, 420, 120, PI/7);
    log5 = new Logs(870, 420, 120, -PI/7);
bird = new Bird(300, 500);
    ground = new Ground(600,height,1200,20);
    
   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig3.display();
    log1.display();
    log3.display();
    log4.display();
    log5.display();
bird.display();
}