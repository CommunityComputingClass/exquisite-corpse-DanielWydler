function setup() {
  createCanvas(500, 500);

}

function draw() {
  
  background("pink")
  
   melo(175, 120)
   melo(175, 110)
   ball(250, 160)
   lavar(175,110)
} 
function melo (x,y){
  fill ("blue")
  strokeWeight (2)
  stroke ("white")
  circle(x, y, 40)

  fill ("red")
  strokeWeight (2)
  stroke ("white")
  circle (x+150, y, 40)

}
function ball(x,y) {
  fill("white")
  stroke ("white")
  circle (x, y, 60)
}
function lavar(x,y) {
  fill ("black")
  circle (x,y,20)
  fill ("black")
  circle (x+150,y,20)
}