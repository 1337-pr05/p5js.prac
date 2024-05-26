var f;
var x=1800;
var y=425;
var _x=1;//1800
var _y=0;
var __x=1800;
var __y=425;
function setup(){
    createCanvas(windowWidth,windowHeight);
    f=windowWidth;
}
function draw(){
   background(0);
   stroke(225);
   strokeWeight(20);
   if(x==1800 && y==425){
    _x=0;
    _y=-10;
  }
  if(y==225 && x==1800){
    _y=0;
    _x=-10;
  }
  if(x==950 && y==225 )
    {
    _x=0;
    _y=10;
    }
  if(x==950 && y==425){
    _y=0;
    _x=-10
  }
  if(x==780 && y==425){
    _y=10;
    _x=0;
}
    if(x==780 && y==675){
        _x=10;
        _y=0;

    }
    if(x==1950 && y==675){
      _y=-10;
      _x=0;
    }
    if(x==1950 && y==425){
      _x=-10;
      _y=0;
    }
  //point(windowWidth-100,425);
  point(x,y)
//  point(__x--,__y);
  // point(x,y);
//   point(_x,y);
  x+=_x;
  y+=_y;
strokeWeight(10);
  for (var i=0;i<15;i++){
    point(random(windowWidth),random(windowHeight));
  }

}