class Bob{
    constructor(x, y, radius){
        var options={
            isStatic:true,
            'stiffness':0.8,
            'density':1.0,
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.x = x;
        this.y = y;
        this.radius = 40;

        World.add(world, this.body);
    }

    display(){
        var position = this.body.position;

        push();
        ellipseMode(RADIUS);
        strokeWeight(7);
        stroke("pink");
        fill("yellow");
        circle(this.x, this.y, this.radius);
        pop();
    }
}