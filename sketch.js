function randomInt(max, min){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setup() {
  createCanvas(800, 800);

  noLoop();
}

let colourArray = Array("red", "black", "blue", "green", "yellow", "white");

let xSquare = 0;
let sizeSquare = 40;   // Setup for random colour square drawing.
let distToRight = 800 - sizeSquare;
let ySquare = 80;
const xReset = xSquare - (8);
function draw() {
  background(220);

  for(let j = 0; j < 8; j++){      // Making Chess Board    
    ySquare += sizeSquare;
    xSquare = xReset;
    if(j % 2){
      fill("white");
    }else{
      fill("black");
    }
    for(let i=0; i < 8;i++){
      xSquare += sizeSquare;
      square(xSquare + 80, ySquare,  sizeSquare);bbbbbbbb
      if((i * 3) % 2){
        fill("white");
      }else{
        fill("black"); 

    }
   } 
  }
}