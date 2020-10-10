class BaseClass
{
    constructor(x,y,width,height)
    {
        
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbin.png");
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }

}