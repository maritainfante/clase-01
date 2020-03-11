var a = 50;
var c;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //color RGB
  colorMode(HSB,360,100,100);
  //background(0,100,100);
  fill(random(0,360),100,100);
  noStroke();
  c = a * random(1,5)
  ellipse(mouseX,mouseY,c,c);
}
/*
comentarios
de 
mas
lineas
*/
