/*
firsly add box on the text
secondly, add the shooting feature to the bots 
thirly make sure that that the bullet from the can commmunicate to the ship
at last make some art to look like the back ground is moving;*/

var b_n=0;
let p_x;
let p_y;
let aliens;
var b_x=0;
var b_y=100;
let r_x;
let r_y;
let bot_bullet=[];
let bullet=[];
let botss=[];
let alienship=[];
var b_n=0;
var al=0;
var killed=0;
var health=100;
var cnv;
function preload(){
  font=loadFont('DisposableDroidBB_bld.ttf');
  laser_shoot=loadSound("lasshot.wav")
  boom_ship=loadSound('boom_ship.mp3');
  for (var i=1;i<10;i++){
    alienship[i-1]=loadImage(`${i}.png`);
  }
    b_n=0;
    missile=loadImage("laserBullet.png");
    fighterplane=loadImage("ship.png");
}
function setup(){
  cnv= createCanvas(windowWidth,windowHeight);
  cnv.position(0,0);
  cnv.style("z-index","-1");
    for (var i=0;i<18;i++){
    if ((b_x >= windowWidth-100)){b_x=25;b_y+=150;}
    let a=new bots(b_x,b_y);
    botss.push(a);
    b_x+=300;}
    jetplane=new flying_obj(100);
    
}
 function mousePressed(){
  let b=new bomb(r_x,windowHeight-400,50,0) ;
  bullet.push(b) ;
  laser_shoot.play();
 }
function draw(){
stroke(0);
background(0);
textSize(50);
textFont(font);
text(`HEALTH : ${health}`,650,50);
text(`KILLED-BOTS :${killed}`,1500,50);
r_x=mouseX;
if(mouseIsPressed){
   b_n+=1;
}
for (var i =0;i<bullet.length;i++){
bullet[i].move();
bullet[i].show_explosive();
}
jetplane.show(mouseX,mouseY); 
for (var i =0;i<bullet.length;i++){
  bullet[i].move();
  bullet[i].show_explosive();
  }
  for (var r =0;r<botss.length;r++){
    botss[r].show();
    botss[r].mover();
    for (var g =0;g<bullet.length;g++){
    if(botss[r].contains(bullet[g].x,bullet[g].y,bullet[g].r)){
      botss.splice(r,1);
      bullet.splice(g,1);
      boom_ship.play();
      killed++;}
  }
  for (var w =0;w<bullet.length;w++)
  if(bullet[w].y<-100){
    bullet.splice(w,1);
  }
  
  }
  b_n++;  
  stroke(225); 
  strokeWeight(10);
  for (var i=0;i<15;i++){
    point(random(windowWidth-100),random(windowHeight-100));
  }
  if(killed===18){
    window.location.href="credit.html";
  }
  
}

class bomb{
    constructor(x,y,z,h){
    this.x = x ;
    this.y = y ;
    this.r = z ;
    this.h = h ;
    }
    move(){
      this.y -= 15;
    }
    show_explosive(w,h){
     // image(missile,this.x-110,this.y-150,this.r*10,this.r*30);
      fill(0,random(0,1)?225:0,random(0,1)?0:225);
      ellipse(this.x,this.y+150,this.r*0.5,this.r*2.5);  
    }
  }
  
class flying_obj{
    constructor(z){
    //   this.x = x ;
    //   this.y = y ;
      this.r = z ;
    }
    move(){
      this.x=this.x+random(-5,5);
      this.y=this.y+random(-5,5);
    }
    show(px=(windowWidth/2),py=windowHeight-100)
    { 
      image(fighterplane,px-80,windowHeight-200,this.r*1.5,this.r*2);
    }
  }
  class bots{
    constructor(x_,y_){
      this.z=random(1,5);
      this.px=x_;
      this.py=y_;
      this.x=x_;   
      this.y=y_; 
      this.image=random(alienship);
    }
    mover(){
      if(this.x > this.px + 50){this.z*=-1;}
      if(this.x < this.px - 50){this.z*=-1;}
      this.x+=this.z;
    }
    contains(px,py,pr){
      let d=dist(px,(py-pr*1.4),this.x+100,this.y+100);
      return(d<25);
    }
    show(){ 
       image(this.image,this.x,this.y,200,200);
        }
  }
