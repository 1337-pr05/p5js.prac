
var cnv;
function setup(){
  cnv= createCanvas(windowWidth,windowHeight);
  cnv.position(0,0);
  cnv.style("z-index","-1");
}
function draw(){
   background(0);
  strokeWeight(10);
  stroke(225);
  for (var i=0;i<15;i++){
    point(random(windowWidth),random(windowHeight));
  }

}