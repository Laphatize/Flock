// FLOCK SIMULATOR 

function setup() {
createCanvas(500,500); // Creates Canvas
}

var finalX;
var finalY;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  function drawBird() {

    var soonBirdX = random(500)
      var soonBirdY = random(500)

  var distFromBirdX = int(dist(soonBirdX));
    var distFromBirdY = int(dist(soonBirdX));
      if (distFromBirdX > 10, distFromBirdY > 10 ) {

drawBird()

} else

var finalX = distFromBirdX;
var finalY = distFromBirdY;

};


function draw() {

    background(225,225,225);
        textSize(30);
        text("flock simulator", 100,30);

    ellipse(mouseX,mouseY,10,10); // Main ird
        ellipse(finalX,finalY,50,50);

          sleep(50)

}
