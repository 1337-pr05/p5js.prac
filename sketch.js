//let bubbles=[];
let bubble1;
let bubble2;
function setup(){
  createCanvas(windowWidth,windowHeight);
  // for(var i=0;i<10;i++){
  //   let x=random(windowWidth)/2;
  //   let y= random(windowHeight)/2;
  //   bubbles[i]= new Bubble(x,y,50);
  // }
    let x=random(windowWidth)/2;
    let y= random(windowHeight)/2;
  bubble1= new Bubble(x,y,50);
  bubble2= new Bubble(x,y,50);
}
function mousePressed(){
  // for(var i=0;i<bubbles.length;i++){
    if(bubble1.contains(mouseX,mouseY)){
      popsound.play();      
    // bubbles.splice(i,1);
    bubble1.x=1000;
    bubble1.y=1000;
    }
    if(bubble2.contains(mouseX,mouseY)){
      popsound.play();//bubble2.x=1000;bubble2.y=1000;
    // bubbles.splice(i,1);
    bubble2.x=1000;
    bubble2.y=1000;
    }
      // }
}
function draw(){
background(0);
//for(let bubble of bubbles){
   if(bubble1.intersect(bubble2)){
    background(20,100,180);
   }
   else{background(0);}

   if(bubble1.contains(mouseX,mouseY)){
   
    bubble1.changecolor(255);
   }
   
   else{bubble1.changecolor(0)}
   if(bubble2.contains(mouseX,mouseY)){
    bubble2.changecolor(255);
   }
   else{bubble2.changecolor(0)}

   bubble1.move();
   bubble1.show();
   bubble2.move();
   bubble2.show();
  //  bubble1.x=mouseX;
  //  bubble1.y=mouseY;

   // bubble.contains(mouseX,mouseY);
 }

function preload(){
  //soundFormats("mp3");
  popsound=loadSound("pop.mp3");
}

class Bubble {
  constructor(x,y,r){
    this.x = x ;
    this.y = y ;
    this.r = r ;
    this.brightness=0;
  }

  move()
  {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
    
  // this.r = this.r + random(-5,5);
  }

  intersect(other){
    let d=dist(this.x, this.y, other.x, other.y);
    return (d<this.r+other.r);
  }


  contains(x,y){
    let d=dist(x,y,this.x,this.y);
    if(d<this.r){return true;
    //  this.brightness=255;
  }
    else {return false;}//this.brightness=0;}
}

  changecolor(color){
    this.brightness=color;
  }
  show()
  {
    noFill();
    strokeWeight(1);
    stroke(225);
    fill(this.brightness,255,255,40);
    circle(this.x,this.y,this.r*2);
  }
}