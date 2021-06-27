class Drop {
constructor(x, y) {
    var options = {
        restitution: 1,
        friction: 0,
        isStatic:false
    }
    this.r = 5;
    this.body = Bodies.circle(x, y, this.r, options);
    
    World.add(world, this.body);
}

update(){
if(this.body.position.y > height){
    Matter.Body.setPosition(this.body,{x:random(0,800), y:random(0,650)});
}
}

display() {

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
}

};