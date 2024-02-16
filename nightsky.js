let width = 3840;
let height = 2160;
let colourArray = [["#02010A", "#04052E", "#140152"]];
let blurAmount = 300;
let numOfCircles = 30;
let chosenColourArray; // Declare chosenColourArray here
let imageCounter = 0; // Counter for the images
let numOfStars = 10000;

function setup() {
  createCanvas(width, height);
  frameRate(1); // Set the frame rate to 1 so that draw() is called once per second
}

function draw() {
  if (imageCounter < 10) {
    //Only generate and save 100 images
    chosenColourArray = random(colourArray); // Assign a value here
    blurAmount = random(600, 3300);
    numOfCircles = random(3, 6);
    numOfStars = random(1000, 10000);
    push();
    background(0);
    placeCircles(30);
    filter(BLUR, 600);
    pop();

    placeStars(numOfStars);
    saveCanvas("myCanvas" + imageCounter, "jpeg"); // Save the canvas as a PNG with a unique name
    imageCounter++; // Increment the counter
  }
}

function placeCircles(numOfCircles) {
  for (var i = 0; i < numOfCircles; i++) {
    fill(random(chosenColourArray)); // Use chosenColourArray here
    noStroke();
    var x = random(width);
    var y = random(height);
    var r = random(1200, 1400);
    ellipse(x, y, r, r);
  }
}

function placeStars(numOfStars) {
  for (var i = 0; i < numOfStars; i++) {
    let randomOpacity = random(0, 255);
    fill(255, randomOpacity); // Use chosenColourArray here
    noStroke();
    var x = random(width);
    var y = random(height);
    var r = random(1, 4);
    ellipse(x, y, r, r);
  }
}
