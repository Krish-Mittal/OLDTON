class bar 
{
    constructor(x,y,w,h)
    {
        var op=
        {
         isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,op);
        this.h=h;
        this.w=w;
        World.add(world,this.body);
    }
    display()
    {   push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}