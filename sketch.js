let width = 3840;
let height = 2160;
let colourArray = ["#ff6978", "#b1ede8", "#6E44FF", "#B892FF", "#00A388"];
function setup() {
  createCanvas(width, height);
  background("#fffcf9");
  placeCircles(30);
  filter(BLUR, 300);
}

function draw() {}

function placeCircles(numOfCircles) {
  for (var i = 0; i < numOfCircles; i++) {
    fill(random(colourArray));
    noStroke();
    var x = random(width);
    var y = random(height);
    var r = random(1200, 1400);
    ellipse(x, y, r, r);
  }
}
