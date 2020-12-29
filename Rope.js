class Rope{
    constructor(bodyA, bodyB, xOffset){

        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            //stiffness: 0.08,
            //length: 5,

            pointB: {x:xOffset, y:0}
        }

        this.rope = Constraint.create(options);
        this.xOffset = xOffset;
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        push();
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x+this.xOffset, pointB.y)
        pop();  
    }
}