var BGMSound;
var hitSound;
var gameoverSound;

function preload() {
  BGMSound = loadSound("BGM.mp3");
  hitSound = loadSound("hit.mp3");
  gameoverSound = loadSound("gameover.mp3");
}

var balls = {
  x: random(600),
  y: [0, -50, -100, -30, -10, 0, -25, -60, -40, 0, -50, -20],
}
var SpeedBall = 5;
var playert = 300;
var playerm = 305;
var playerb = 300;
var playery = 430;

function setup() {
  createCanvas(600, 500);
  BGMSound.play();
}

function draw() {
  background(235);

  //player
  rect(playert, playery, 30, 30);
  rect(playerm, 460, 20, 20);
  rect(playerb, 480, 30, 20);

  //player move
  //A key
  if (keyIsDown(65)) {
    playert -= 10;
    playerm -= 10;
    playerb -= 10;
  }

  //D key
  if (keyIsDown(68)) {
    playert += 10;
    playerm += 10;
    playerb += 10;
  }

  //draw balls
  for (i = 0; i < y.length; i++) {
    ellipse(random(0, 40), y[0], 30);
    ellipse(random(50, 90), y[1], 30);
    ellipse(random(100, 140), y[2], 30);
    ellipse(random(150, 190), y[3], 30);
    ellipse(random(200, 240), y[4], 30);
    ellipse(random(250, 290), y[5], 30);
    ellipse(random(300, 340), y[6], 30);
    ellipse(random(350, 390), y[7], 30);
    ellipse(random(400, 440), y[8], 30);
    ellipse(random(450, 490), y[9], 30);
    ellipse(random(500, 540), y[10], 30);
    ellipse(random(550, 590), y[11], 30);

    //falling speed
    if (y[i] < 700) {
      y[i] = y[i] + SpeedBall + random(0, 10);
    }

    //reset y
    if (y[i] > 699) {
      y[i] = 0;
    }
  }

  if dist(playert, playery, balls.x, balls.y) <= 1 {
    noLoop();
    textSize(30);
    text('Game over', 300, 250);
    hitSound.play();
    gameoverSound.play();
  }
}
