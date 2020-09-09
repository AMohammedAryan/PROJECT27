class Rope{

    constructor(bodyA, pointB){

        this.pointB = pointB;

        var options={
            bodyA: bodyA,
            pointB: pointB,
        }

        this.chain = Constraint.create(options);

        World.add(world, this.chain);
        }

        display(){
            
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
}
