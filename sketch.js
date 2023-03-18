let r, g, b, y, rand;
let circleX, circleY;
// let brushStyle;
// let brushSize;

function setup() {
  createCanvas(800, 800);
  background(220);  
  
}

function draw() {
  noStroke();
  fill(120);
  textSize(30);
  text("Color Pick",70, 50); 
  text("Brush Style",70, 180); 
  
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
  
  //brush style
  stroke(4);
  fill(220);
  rect(70, 200, 40, 40);
  circle(190, 220, 40);
  ellipse(290, 220, 80, 40);
  // triangle(270, 200, 310, 240, 270, 240);
 
}

function mousePressed(){

  if ((mouseX > 70) && (mouseX < 110) && (mouseY > 70) && (mouseY < 110)) {
    r = 235;
    g = 64;
    b = 52;
    // fill(235, 64, 52);
    // stroke(235, 64, 52);
    // strokeWeight(5);
      }
  
  else if ((mouseX > 170) && (mouseX < 210) && (mouseY > 70) && (mouseY < 110)) {
    r = 52;
    g = 235;
    b = 82;
    // fill(52, 235, 82);
    // stroke(52, 235, 82);
    // strokeWeight(5);
      }
  else if ((mouseX > 270) && (mouseX < 310) && (mouseY > 70) && (mouseY < 110)) {
    r = 52;
    g = 55;
    b = 235;
    // fill(52, 55, 235);
    // stroke(52, 55, 235);
    // strokeWeight(5);
      }  
  
  else if ((mouseX > 370) && (mouseX < 410) && (mouseY > 70) && (mouseY < 110)) {
    r = 235;
    g = 229;
    b = 52;
    // fill(235, 229, 52);
    // stroke(235, 229, 52);
    // strokeWeight(5);
      }    
      
  else if ((mouseX > 470) && (mouseX < 510) && (mouseY > 70) && (mouseY < 110)) {
    r = random(255);
    g = random(255);
    b = random(255);
    // stroke(random(255), random(255), random(255));
    // strokeWeight(5);
      } 
  
  else if ((mouseX > 570) && (mouseX < 610) && (mouseY > 70) && (mouseY < 110)) {
    r = 220;
    g = 220;
    b = 220;
    // stroke(220);
    // strokeWeight(5);
      }  
    
  else if ((mouseX > 670) && (mouseX < 710) && (mouseY > 70) && (mouseY < 110)) {

    background (220);
      }  

}

  // brush style
// function mousePressed(){
//   if ((mouseX > 70) && (mouseX < 130) && (mouseY > 200) && (mouseY < 240)) {

//   rectBrush();
//       }  

//     else if ((mouseX > 170) && (mouseX < 230) && (mouseY > 200) && (mouseY < 240)) {

//   circleBrush();
//       } 
// }

 
function mouseDragged(){
  noStroke();
  fill (r, g, b);

  // rectBrush(); 
  circleBrush();
  // ellipseBrush();
  
  // ellipse(mouseX, mouseY, 10, 10);  
 // if (mouseIsPressed === true) {
 //  line(mouseX, mouseY, pmouseX, pmouseY);
   // }

 }

// function mouseDragged1(){
  
//   if (mouseIsPressed === true) {
//   rect(mouseX, mouseY, 10, 10);
//       }  

//   }

// function mouseDragged2(){
  
//   if (mouseIsPressed === true) {
//   circle(mouseX, mouseY, 10);
//       }  

//   }

function rectBrush() {
  if (mouseIsPressed){
  rect(mouseX, mouseY, 30, 30);
}
}

function circleBrush() {
  if (mouseIsPressed){
  circle(mouseX, mouseY, 30);
}
}

function ellipseBrush() {
  if (mouseIsPressed){
  ellipse(mouseX, mouseY, 60, 30);
}
}