var b_n=0;
let p_x;
let p_y;
let aliens;
var b_x=25;
var b_y=75;
let r_x;
let r_y;
let bots_guns=[];
let bot_bullet=[];
let bullet=[];
let botss=[];
let alienship=[];
var b_n=0;
var al=0;
var killed=0;
var health=100;
var cnv;
var random_shooter_index=[];

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
    for (var i=0;i<14;i++){
    if ((b_x >= windowWidth-100)){b_x=25;b_y+=75;}
    let a=new bots(b_x,b_y);
    let b=new bots_gun_bomb(b_x+105,b_y,35);
    botss.push(a);
    bots_guns.push(b)
    b_x+=190;
    }
    jetplane=new flying_obj(mouseX,100);
    
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
text(`HEALTH : ${health} /`,330,50);
text(`KILLED-BOTS :${killed}`,650,50);
r_x=mouseX;
if(mouseIsPressed){
   b_n+=1;
}
for (var i =0;i<bullet.length;i++){
bullet[i].move();
bullet[i].show_explosive();
}
jetplane.show(mouseX,mouseY); 

  for (var r =0;r<botss.length;r++){
    botss[r].show();
    botss[r].mover();
    for (var g =0;g<bullet.length;g++){
    if(botss[r].contains(bullet[g].x,bullet[g].y,bullet[g].r)){
      botss.splice(r,1);
      bullet.splice(g,1);
      bots_guns.splice(r,1);
      boom_ship.play();
      killed++;}
  }
  
  for (var w =0;w<bullet.length;w++){
  if(bullet[w].y<-200){
    bullet.splice(w,1);
  }
 
  }
 for(var i=0 ; i<bots_guns.length; i++){
   bots_guns[i].moves();
  bots_guns[i].show_explosive();
  if(bots_guns[i].contains(jetplane.x,jetplane.y)){ bots_guns[i].x+=random(-botss[i].x,botss[i].x);bots_guns[i].y=botss[i].y;health-=floor(random(10));}

}
  }
  b_n++;  
  stroke(225); 
  strokeWeight(5);
  for (var i=0;i<15;i++){
    point(random(windowWidth-100),random(windowHeight-100));
  }
  if(killed===14 || health<=0){
    window.location.href="credit.html";
  }
  
for (var w =0;w<bots_guns.length;w++){
    if(bots_guns[w].y>windowHeight){
      if(botss[w]){  
      // bots_guns[w].x+=random(-botss[w].x,botss[w].x);
      bots_guns[w].y=botss[w].y;
    }}} 
}

class bomb{
    constructor(x,y,z,h){
    this.x = mouseX ;
    this.y = y ;
    this.r = z ;
    this.h = h ;
    }
    move(){
      this.y -= 10;
    }
    show_explosive(w,h){
      fill(0,random(0,1)?225:0,random(0,1)?0:225);
      ellipse(this.x,this.y+220,this.r*0.27,this.r*1.5);  
    }
  }
  
class flying_obj{
    constructor(x,z){
      this.x = 0;
      this.y = windowHeight-90;
      this.r = z;
    }
    move(){
      this.x = this.x+random(-5,5);
      this.y = this.y+random(-5,5);
    }
    show(px=(windowWidth/2),py=windowHeight-100)
    {  image(fighterplane,px-50,windowHeight-90,this.r*0.8,this.r*0.8);
      this.x=px-10;
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
      let d=dist(px,(py-pr*1.4)+270,this.x+50,this.y+50);
      return(d<17);
    }
    show(){ 
       image(this.image,this.x,this.y,100,100);
        }
  }

  class bots_gun_bomb{
    constructor(x,y,z){
      this.x = x  ;
      this.y = y ;
      this.r = z ;
      }
      moves(){
        this.y +=1.6;
      }
      show_explosive(){
        fill(0,random(0,1)?225:0,random(0,1)?0:225);
        ellipse(this.x,this.y+90,this.r*0.3,this.r*1.5);  
      }
      contains(px,py){ 
        let d=dist(px,py,this.x,this.y+110);
        return(d<5);
      }
  }