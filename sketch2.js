const urlString = window.location.href;
let url = new URL(urlString);

console.log(url);

const frase = "Beautiful! WOW! Incredible! Perfumed! Shiny! Elegant!";
const complimenti = frase.split(" ");
let tuttiIComplimenti;
let unComplimento;
let iterator = 0;
let shit;

function preload () {
  shit = loadImage("./assets/Golden_Poop.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  complimenti.forEach((complimento) => {
    createElement("button", complimento);
  });
  tuttiIComplimenti = selectAll("button");
}

function draw() {

  if (mouseIsPressed == false) {
    background(255, 87, 159);
  } else if (mouseIsPressed == true) {
    background(295, 127, 199);
  }

  shitimg = image(shit, width / 2, 500, 100, 100);

  var firstText = "Your wish became true!";
  
  textFont("VT323");
  textAlign(CENTER);
  textSize(40);
  fill("YELLOW");

  text(firstText, width/2, 160);

  iterator++;
   tuttiIComplimenti.forEach((unComplimento, i) => {
    textSize(50)
    let x = noise((iterator + 8000 * i) / 400) * windowWidth;
    let y = noise((iterator - 8000 * i) / 400) * windowHeight;

    unComplimento.style(
      "position:absolute; border: 0px;background-color:transparent;color:yellow;text-decoration:none;padding:16px 31px;font-family:VT323;font-size:25px;"
    );
    unComplimento.position(x, y);
  });
}

