img="";
var status="";   
function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded); 
}
function modelLoaded()
{
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResults);
}
function draw()
{
    image(img,0,0,500,200);
    fill("#ff0000");
    text("Dog",45,75);
    nofill();
    stroke("#ff0000");
    rect(30,60, 450, 350);

    fill("#0000ff")
    text("Cat", 275, 295);
    nofill();
    stroke("#0000ff")
    rect(250,80, 300,330);


}

function gotResults(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
}