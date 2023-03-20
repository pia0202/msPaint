let r, g, b;
let x=30, y=30, z=30;

function setup() {
  createCanvas(800, 800);
  background(220);  
  
}

function draw() {
  noStroke();
  fill(120);
  textSize(30);
  text("Color Pick",70, 50); 
  text("Brush Size",70, 180); 
  
  fill(235, 64, 52);  
  rect(70, 70, 40, 40);
  fill(52, 235, 82);
  rect(170, 70, 40, 40);
  fill(52, 55, 235);
  rect(270, 70, 40, 40);
  fill(235, 229, 52);
  rect(370, 70, 40, 40);

  //random
  fill(200);
  rect(470, 70, 40, 40);
  fill(0, 0, 0);
  textSize(12);
  text("Random",468, 95); 
  //erase
  fill(200);
  rect(570, 70, 40, 40);
  fill(0, 0, 0);
  text("Erase",574, 95); 
  //clear
  fill(200);
  rect(670, 70, 40, 40);
  fill(255, 0, 0);
  text("Clear",674, 88);   
  text("All",684, 102);   
  
  //brush size description
  fill(80);
  textSize(14);
  text("Brush Size + : Press Up-Arrow", 70, 200);   
  text("Brush Size - : Press Down-Arrow", 70, 220); 
  text("Round Brush : Press Left-Arrow", 70, 240); 
  text("Square Brush : Press Right-Arrow", 70, 260); 

  if ((mouseX > 70) && (mouseX < 110) && (mouseY > 70) && (mouseY < 110)) {
    if(mouseIsPressed){
    r = 235;
    g = 64;
    b = 52;
    // fill (r, g, b);
        }
      }
  
  else if ((mouseX > 170) && (mouseX < 210) && (mouseY > 70) && (mouseY < 110)) {
    if(mouseIsPressed){
    r = 52;
    g = 235;
    b = 82;
    // fill (r, g, b);
    }
      }
  else if ((mouseX > 270) && (mouseX < 310) && (mouseY > 70) && (mouseY < 110)) {
    if(mouseIsPressed){
    r = 52;
    g = 55;
    b = 235;
    // fill (r, g, b);
    }
      }  
  
  else if ((mouseX > 370) && (mouseX < 410) && (mouseY > 70) && (mouseY < 110)) {
    if(mouseIsPressed){
    r = 235;
    g = 229;
    b = 52;
    // fill (r, g, b);
    }
      }    
      
  else if ((mouseX > 470) && (mouseX < 510) && (mouseY > 70) && (mouseY < 110)) {
    if(mouseIsPressed){
    r = random(255);
    g = random(255);
    b = random(255);
    // fill (r, g, b);
    }
      } 
  
  else if ((mouseX > 570) && (mouseX < 610) && (mouseY > 70) && (mouseY < 110)) {
    if(mouseIsPressed){
    r = 220;
    g = 220;
    b = 220;
    // fill (r, g, b);
    }
      }  
    
  else if ((mouseX > 670) && (mouseX < 710) && (mouseY > 70) && (mouseY < 110)) {
    if(mouseIsPressed){
    background (220);
      }  
  }
  
}

function mouseDragged(){
  noStroke();
  fill (r, g, b);
  
  // circle(mouseX, mouseY, x, y);
  
  rectX0=mouseX;
  rectY0=mouseY;
  rectX1=30;
  rectY1=30;
  rectZ=0;
  rect(mouseX, mouseY, x, y, z)
  
 }


// Brush Variation

function keyPressed() {
  if (keyCode === UP_ARROW) {
    x += 5;
    y += 5;
}

  if (keyCode === DOWN_ARROW) {
    x -= 5;
    y -= 5;
}
  if (keyCode === LEFT_ARROW) {
    z = x;
}
  if (keyCode === RIGHT_ARROW) {
    z = 0;
}
}

// function keyTyped(){
      
//   if (key == 'a') {
//     rectZ = rectZ+10;
// }
  
//   if (key == 'b') {
//     rectZ = rectZ+10;
// }
  
// }

