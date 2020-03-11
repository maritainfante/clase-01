var a = 50;
var c;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //color RGB
  colorMode(HSB,360,100,100);
  //background(0,100,100);
  fill(random(0,360),100,100);
  noStroke();
  c = a * random(1,5)
  ellipse(mouseX,mouseY,c,c);
  frameRate(10)
}
/*
comentarios
de 
mas
lineas
*/
