class Roof{
    constructor(x, y, width, height){
        var options={
            isStatic:true,
            'stiffness': 0.8,
        }
        
        this.body = Bodies.rectangle(x, y, 430, 25, options);
        this.x = x;
        this.y = y;
        this.width = 430;
        this.height = 25;
        
        World.add(world, this.body);
    }
    
    display(){
        var pos =this.body.position;
    
        push();
        rectMode(CENTER);
        fill("red");
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
    }