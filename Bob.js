class Bob{

    constructor(x, y, r){

        var options ={
            density:0.1,
            friction:0.1,
            restitution:1.0,
            isStatic:false
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x, y, r/2, options);

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push()

        translate(pos.x, pos.y);
        rotate(angle);

        ellipseMode(CENTER);
        fill("purple");
        
        ellipse(0, 0, this.r, this.r);

        pop()
    }
}
