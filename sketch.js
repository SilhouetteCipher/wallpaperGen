let width = 3840;
let height = 2160;
let colourArray = [
  ["#ff6978", "#b1ede8", "#6E44FF", "#B892FF", "#00A388"],
  ["#ff6978", "#b1ede8", "#6E44FF", "#B892FF", "#00A388"],
];
let blurAmount = 300;
let numOfCircles = 30;
let chosenColourArray; // Declare chosenColourArray here
let imageCounter = 0; // Counter for the images

function setup() {
  createCanvas(width, height);
  frameRate(1); // Set the frame rate to 1 so that draw() is called once per second
}

function draw() {
  if (imageCounter < 100) {
    // Only generate and save 100 images
    chosenColourArray = random(colourArray); // Assign a value here
    blurAmount = random(300, 1200);
    numOfCircles = random(3, 50);
    background("#fffcf9");
    placeCircles(30);
    filter(BLUR, blurAmount);
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
