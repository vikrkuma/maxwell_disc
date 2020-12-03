const DISC_CANVAS = document.getElementById("disc-canvas");
const DISC_CONTAINER = document.getElementById("disc-container");
const DISC_CTX = DISC_CANVAS.getContext("2d");
const DISC_COLORS = [
  "#FFFF00",
  "#FF8F00",
  "#FF0000",
  "#900090",
  "#622DD1",
  "#0000FF",
  "#009090",
  "#90FF00",
];
let position = 1;

function drawArc(index, color) {
  DISC_CTX.beginPath();
  DISC_CTX.moveTo(250, 250);
  DISC_CTX.arc(250, 250, 250, index * 0.25 * Math.PI, index * 0.25 * Math.PI + 0.25 * Math.PI);
  DISC_CTX.lineTo(250, 250);
  DISC_CTX.fillStyle = color;
  DISC_CTX.fill();
}

function drawMaxwellDisc(startIndex = 0) {
  DISC_CTX.clearRect(0, 0, DISC_CANVAS.width, DISC_CANVAS.height);
  for (let index = 0; index < DISC_COLORS.length; index++) {
    drawArc(index, DISC_COLORS[(startIndex + index) % DISC_COLORS.length]);
  }
}

function rotateDisk() {
  drawMaxwellDisc(position++);
  animateDisk();
}

function animateDisk() {
  requestAnimationFrame(rotateDisk);
}

drawMaxwellDisc();
// animateDisk();
