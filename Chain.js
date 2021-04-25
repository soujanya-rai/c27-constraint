class Chain {

    constructor(body1, body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            length: 10,
            stiffness: 0.04
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display() {
        var point1 = this.slingshot.bodyA.position;
        var point2 = this.slingshot.bodyB.position;

        push();
        strokeWeight(3);
        line(point1.x, point1.y, point2.x, point2.y);
        pop();
    }

}