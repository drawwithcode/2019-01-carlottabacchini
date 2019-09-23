function preload(){
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  noFill();
  background(0,3,30);
  frameRate(20)
}

function draw() {
  var k = 200;


if (frameCount <= 120) {
  push()
    translate(width/2, height/2);
    rotate(frameCount*3);
    stroke(
      lerpColor(
        color(30,35,154),
        color(247,73,102),
        frameCount/120
        )
    );
    let x = 0;
    let y = mouseY/20;
    circle(x, height/3.5,10+y)
  pop()

  push()
    let s = 'MOVE THE CURSOR UP AND DOWN';
    let t = 'AND WAIT';
    stroke('white')
    strokeWeight(0.5);
    textSize(30);
    textAlign(CENTER,CENTER);
    text(s, width/2, height/10);
    text(t, width/2, 800);
  pop()
}

if (frameCount >= 120) {

  push()
      translate(width/2, height/2);
      strokeWeight(0.5);
      stroke(6,15,206);
      line(k,0,k*cos(frameCount*3),k*sin(frameCount*3));
  pop()

  push()
      translate(width/2, height/2);
      strokeWeight(0.5);
      stroke(247,73,102),
      line(-k,0,-k*cos(frameCount*3),k*sin(frameCount*3));
  pop()

  push()
  translate(width/2, height/2);
  rotate(frameCount*30);
  strokeWeight(0.5);
  stroke(255,255,255,40);
  line(k,0,6*k*cos(frameCount*3),6*k*sin(frameCount*3));
pop()
}



  if (frameCount == 240) {
  noLoop();
  }

}
