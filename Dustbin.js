class Dustbin extends BaseClass
{
    constructor(x,y,width,height)
    {
        super(x,y,width,height);
        this.image = loadImage("dustbin.png");
    }
    display()
    {
        this.body.position.x = 550;
        this.body.position.y = 510;
        super.display();
    }
       
};
