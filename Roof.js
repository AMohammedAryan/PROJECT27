class Roof{

    constructor(x, y, width, height){

        var options={
            density:100.0,
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = 50;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        
        rectMode(CENTER);
        fill(170);

        rect(pos.x, pos.y, this.width, this.height);
    }
}