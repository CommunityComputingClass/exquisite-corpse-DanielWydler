function setup() {
  createCanvas(500, 500);

}

function draw() {
  
  background("pink")
  
   melo(200, 120)
   melo(300, 50)
   ball(250, 300)


 
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
  circle (x, y, 40)
}