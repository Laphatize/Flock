
function setup() {
  createCanvas(500, 500); 
 
}


var finalX; // This is the final X that has been determined.
var finalY; // This is the final Y that has been determined.
var distFromBird; // Calculate's the random coords generated and mouseX, mouseY distance.
var soonBirdX; // Random generated X Value.
var soonBirdY; // Random generated Y Value.

/* Sleep Function */
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}



/*  Second Bird */
function drawBird() {

  soonBirdX = random(500);
  soonBirdY = random(500);
  console.log("randomX: " + soonBirdX);
  console.log("randomY: " + soonBirdY);
  distFromBird = int(dist(soonBirdX, soonBirdY, mouseX, mouseY));
  

  if (distFromBird > 50, distFromBird > 50) {

    drawBird()

  } else

  finalX = soonBirdX;
  finalY = soonBirdY;

};


/* Draws the main bird, bird that follows mouse pointer. */
function draw() {

  drawBird();
  background(225, 225, 225);
  textSize(30);
  text("flock simulator", 150, 30);
  textSize(20)
  text("by Laphatize", 190, 50);
  

  ellipse(mouseX, mouseY, 10, 10); // Main Bird
  ellipse(finalX, finalY, 10, 10);
  console.log("finalX: " + finalX);
  console.log("finalY: " +finalY);
  
}

