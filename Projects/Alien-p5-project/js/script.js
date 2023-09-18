/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
    background(200, 200, 200);
  
    // Draw the Body
    ellipseMode(CENTER);
    noStroke();
    fill(123, 231, 200);
    ellipse(250, 400, 300, 125);
    ellipse(250, 320, 200, 125);
    ellipse(250, 250, 120, 125);
  
    // Draw the Neck
    ellipse(220, 170, 100, 100);
    ellipse(180, 130, 120, 120);
  
    // Draw the Head
    ellipse(180, 130, 200, 200);
  
    //Draw the Mouth
    rectMode(CENTER);
    fill(170, 10, 175);
    rect(160, 170, 90, 40, 10);
  
    fill(0, 0, 0);
    rect(160, 170, 80, 10, 29);
  
    // Draw the Left Eye
    fill(127, 200, 170);
    ellipse(290, 75, 50, 50);
    ellipse(270, 75, 40, 40);
    ellipse(250, 80, 30, 30);
    ellipse(240, 85, 30, 30);
  
  
    //Draw the Left Eyeball
    fill(170, 10, 175);
    ellipse(297, 77, 50, 50);
  
    fill(255, 255, 255);
    ellipse(300, 80, 50, 50);
    fill(0, 0, 0);
    ellipse(310, 82, 20, 20);
  
    // Draw the Right Eye
    fill(127, 200, 170);
    ellipse(85, 120, 50, 50);
    ellipse(93, 110, 40, 40);
    ellipse(105, 110, 30, 30);
    ellipse(115, 115, 30, 30);
  
    //Draw the Right Eyeball
    fill(170, 10, 175);
    ellipse(83, 127, 50, 50);
  
    fill(255, 255, 255);
    ellipse(80, 130, 50, 50);
    fill(0, 0, 0);
    ellipse(70, 140, 20, 20);
  
    //Draw the Dots
    fill(150, 0, 155);
    ellipse(300, 400, 10, 10);
  
    ellipse(200, 380, 15 , 15);
  
    ellipse(120, 400, 10 , 10);
  
    ellipse(330, 380, 15 , 15);
  
    ellipse(370, 420, 10 , 10);
  }


/**
 * Description of draw()
*/
function draw() {

}


