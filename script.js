
let x = 200;
let y = 200;
let extraCanvas;

function setup() {
  createCanvas(1980, 1080);
  extraCanvas = createGraphics(1980, 1080);
  extraCanvas.clear();
  background(0);
}

function draw() {
  
  // No trails!
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);
	
  // trails
  if (mouseIsPressed) {
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 30, 30);
  }
  
  image(extraCanvas, 0, 0);
    fill(255, 0, 0);
  stroke(255);
  

  
}