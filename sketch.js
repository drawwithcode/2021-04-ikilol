const urlString = window.location.href;
let url = new URL(urlString);

console.log(url);

const frase = "stinky stinky stinky stinky stinky";
const stinkys = frase.split(" ");
let tuttiGliStinky;
let unoStinky;
let iterator = 0;
let shit;

function preload () {
  shit = loadImage("./assets/poop.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  stinkys.forEach((stinky) => {
    createElement("button", stinky);
  });
  tuttiGliStinky = selectAll("button");
}

function draw() {

  if (mouseIsPressed == false) {
    background(145, 79, 59);
  } else if (mouseIsPressed == true) {
    background(155, 99, 89);
  }

  shitimg = image(shit, width / 2, 500, 100, 100);

  var firstText = "Rub the poo as fast as you can and make a wish!";
  
  textFont("VT323");
  textAlign(CENTER);
  textSize(40);
  fill(44, 25, 19);

  text(firstText, width/2, 160);

  iterator++;
  tuttiGliStinky.forEach((unoStinky, i) => {
    textSize(50)
    let x = noise((iterator + 8000 * i) / 400) * windowWidth;
    let y = noise((iterator - 8000 * i) / 400) * windowHeight;

    unoStinky.style(
      "position:absolute; border: 0px;background-color:transparent;color:#2C1913;text-decoration:none;padding:16px 31px;font-family:VT323;font-size:25px;"
    );
    unoStinky.position(x, y);
  });

  let distance = dist(mouseX, mouseY, pmouseX, pmouseY);
  let mappedDistance = map(distance, 0, width, 1, 50);

  if(mappedDistance > 6) {
    window.open("index2.html", "_self");
  }
}

