img="";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw()
{
    image(img,0,0,500,200);
    fill("#ff0000");
    text("Dog",50,80);
    nofill();
    stroke("#ff0000");
    rect(40,60, 500, 750)
}
