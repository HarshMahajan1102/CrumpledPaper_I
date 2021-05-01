class dustbin{
    constructor() {
        var options = {
            restituition : 0.8,
            isStatic : true,
            friction : 1.0,
            density : 1.0
        }        
	    this.bottomEdge = Bodies.rectangle(3 *width/4 + 100, 655, 200, 20, options);
	    this.leftEdge   = Bodies.rectangle(300 + width/2, 620, 20, 100, options);
	    this.rightEdge  = Bodies.rectangle(500 + width/2, 620, 20, 100, options);
        World.add(world, this.bottomEdge)
        World.add(world, this.leftEdge)
        World.add(world, this.rightEdge)
    }
    display(){
    fill('white')
    rectMode(CENTER)
    rect(this.bottomEdge.position.x, this.bottomEdge.position.y, 200, 20);
    rect(this.rightEdge.position.x, this.rightEdge.position.y, 20, 100);
    rect(this.leftEdge.position.x, this.leftEdge.position.y, 20, 100);
    }
}