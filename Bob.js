class Bob{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            'stiffness':0.8,
            'density':1.0,
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.x = x;
        this.y = y;
        this.radius = 48;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        strokeWeight(7);
        stroke("green");
        fill("lightblue");
        circle(pos.x, pos.y, this.radius);
        pop();
    }
}