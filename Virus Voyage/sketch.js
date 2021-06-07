var virus
var virusimg, bg1
var ground;
var leftb, rightb;
var s1, s2, s3, s4, rand
var sm1, sm2, pos
var subjectgroup, sanitizedgroup
var cases
var virus_spawning
var GAMESTATE = 0
var Life

function preload(){
bg1=loadImage("instantbackground.jpeg");
bactteria=loadImage("coronavirus.png");
s1=loadImage("subjects.png");
s2=loadImage("subject2.png");
s3=loadImage("subjects3.png");
s4=loadImage("subjects4.png");

virus_spawning=loadAnimation("coronavirus-0.png","coronavirus-1.png","coronavirus-2.png")

sm1=loadImage("sm.png");
sm2=loadImage("sm2.png");
}

function setup() 
{
createCanvas(830,600);

  subjectgroup=createGroup();
  sanitizedgroup=createGroup();

  virus=createSprite(200,500,50,50);
  virus.addAnimation("Spawning",virus_spawning);
  virus.scale=0.2;

  
  leftb=createSprite(35,400,30,800);
  leftb.visible=false;
  rightb=createSprite(560,400,30,800);
  rightb.visible=false;

  ground=createSprite(300,300);
  ground.addImage("ground",bg1);
  ground.velocityY = 1;

  console.log("Virus Depth  :" + virus.depth);
  console.log("Ground Depth :"+ ground.depth);

  cases=0;
  Life=2
}


function draw() 
{

//console.log(ground.y);

if(GAMESTATE=0){

text("Coronavirus Cases" + cases,550,780);
text("Virus Lifes" + Life,550,800);


if(ground.y > 400){
  ground.y = 300
}

  virus.depth=ground.depth;
  virus.depth=virus.depth+1;


  if(keyIsDown(LEFT_ARROW))
  {
    virus.x-=20;
  }
    if(keyIsDown(RIGHT_ARROW))
  {
    virus.x+=20;
  }

  virus.collide(leftb);
  virus.collide(rightb);


  subjectss();
  sanitizeduh();

}

  if(subjectgroup.isTouching(virus)){
    cases = cases*1.2+2;
  }

  if(sanitizedgroup.isTouching(virus)){
    Life -= 1;
  }

  if(cases>=100){
    GAMESTATE=1;
  }

  if(GAMESTATE===1){
  var st1=createSprite(415,300);
  st1=text("Infection Stage: 1  Cases:"+cases,415,300);
  fill("green");
  st1.setLifetime=80;

  text("Virus Is Spreading: minor impact",415,560);
  }

  if(cases>=300){
    GAMESTATE=2;
  }
 
  if(GAMESTATE===2){
    var st2=createSprite(415,300);
    st2=text("Infection Stage: 2  Cases:"+cases,415,300);
    fill("green");
    st1.setLifetime=80;
  
    text("Virus Is Spreading: major impact",415,560);
    }

    if(cases>=800){
      GAMESTATE===3;
    }

    if(GAMESTATE===3){
    text("The pandemic spreaded WORLDWIDE!!! *victory",415,300);
    fill("yellow");
    text("Virus Is Spreading: severe impact",415,560);
    virus.visible=false;
    subjectgroup.visible=false;
    sanitizedgroup.visible=false;
    ground.y=300;
    cases=cases;
    Life=Life;
    }


  if(Life === 0){
   GAMESTATE=4;
  }
  
  if(GAMESTATE===4){
    text("The pandemic is OVER",415,300);
    fill("yellow");

    virus.visible=false;
    subjectgroup.visible=false;
    sanitizedgroup.visible=false;
    ground.y=300;
    cases=0;
    Life=0;
  }

drawSprites();

}

function subjectss(){
  if(World.frameCount%60===0){
    sub=createSprite(random(85,385),0,40,40);
    sub.velocityY = 3;
    rand=Math.round(random(1,4));
    switch(rand){
      case 1:sub.addImage(s1);
      break;

      case 2:sub.addImage(s2);
      break;

      case 3:sub.addImage(s3);
      break;

      case 4:sub.addImage(s4);
      break;

      default :break;

    }
    sub.scale=0.2;
  }

    /*if(rand===1){
    }
    if(rand===2){
    sub.addImage(s2);
    }
    if(rand===3){
      sub.addImage(s3);
    }
        if(rand===4){
      sub.addImage(s4);
    }
    sub.setLifetime=100;
    subjectgroup.add(sub);
  }*/
}


function sanitizeduh(){
  if(World.frameCount%160===0)
  {
    san=createSprite(random(85,385),0,30,30);
    san.velocityY=3;
    //san.scale=0.2;

    pos=Math.round(random(1,2));

    if(pos===1){
    san.addImage(sm1);
    }
    if(pos===2){
    san.addImage(sm2);
    }

    san.setLifetime=100;
    sanitizedgroup.add(san);
    san.scale=0.5;
    fill("blue");
    ellipse(san.x,san.y,50,50);
  }
}
