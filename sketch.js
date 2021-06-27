const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drop
var engine,world;
var drops = []
var maxdrops = 100;
var umbrella;
var rand;
var night;
var Thunder, thunder1,thunder2,thunder3,thunder4;
var thunderframes = 0

function preload(){
    night = loadImage("images/night.jpg");

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
 
	var canvas = createCanvas(810, 750);
    
    
    engine = Engine.create();
	world = engine.world;

    umbrella = new Umbrella(350,500);

    for(var i=0; i<maxdrops; i++){
        drops.push(new Drop (random(0,600),random(0.500)));
    }
    
    
}

function draw(){
    background(night);
    Engine.update(engine);
    
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderframes = frameCount;
        Thunder = createSprite(random(10,370), random(10,30),10,10);
        switch(rand){
            case 1 : Thunder.addImage(thunder1);
            break;
            case 2 : Thunder.addImage(thunder2);
            break;
            case 3 : Thunder.addImage(thunder1);
            break;
            case 4 :Thunder.addImage(thunder1);
            break;
            default: break;
        }
        Thunder.scale = 0.7;
    }
 
    if(thunderframes+10 === frameCount && Thunder){
        Thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i < maxdrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   

