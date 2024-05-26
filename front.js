var f;
var x=1950;
var y=625;
var _x=1;
var _y=0;
var __x=1800;
var __y=425;
var cnv;
function setup(){
     cnv= createCanvas(windowWidth,windowHeight);
     cnv.position(0,0);
     cnv.style("z-index","-1"); 
}
function draw(){
   background(0);
   stroke(225);
   strokeWeight(6);
   if(x==1950 && y==625){
    _x=-10;
    _y=0;
  }
  if(y==625 && x==1750){
    _y=-10;
    _x=0;
  }
  if(x==1750  && y==275 )
    {
    _x=-10;
    _y=0;
    }
  if(x==1000 && y==275){
    _y=10;
    _x=0
  }
  if(x==1000 && y==625){
    _y=0;
    _x=-10;
}
    if(x==800 && y==625){
        _x=0;
        _y=10;

    }
    if(x==800 && y==825){
      _y=0;
      _x=10;
    }
    if(x==1950 && y==825){
      _x=0;
      _y=-10;
    }
  point(x,y)
  x+=_x;
  y+=_y;
strokeWeight(5);
  for (var i=0;i<15;i++){
    point(random(windowWidth),random(windowHeight));
  }

}
