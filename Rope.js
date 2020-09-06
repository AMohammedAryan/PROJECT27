class Rope{

    constructor(bodyA, bodyB, offsetX){

        this.offsetX = offsetX;

        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.04,
            length:10
        }

        this.chain = Constraint.create(options);

        World.add(world, this.chain);
        }

        display(){
            
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;

            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);
        }
}