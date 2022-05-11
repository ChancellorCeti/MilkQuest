var player,edges;
var groundImage;
var ground;
var trex;
var goalplatx,goalplaty;
var platform;
var bullet1;
var shooter;
var platforms;
//import './bullet.js'
var platform1;

var platformlist=[]
var platformcoords=[]
function preload(){
  trex=loadImage("trex1.png")
  groundImage = loadImage("ground2.png")
  platimg=loadImage("platform.png")
}

function setup(){
  platforms=createGroup()
  createCanvas(1000,700);
  player=createSprite(500,200,0,1)
  player.addImage("trex",trex)
  player.debug=true;
  trex.scale = 0.01;
  ground = createSprite(200,650,400,20)
  
  ground.addImage("ground",groundImage)
  const level1=true;
  if(level1==true){
    shooter=createSprite(50,137,20,20);
    shooter.addImage("plat",trex);
    console.log("e"+frameCount)
    for(i=0;i<10;i++){
      
    }
    bullet1=new Bullet(shooter,5);
    platform=createSprite(600,300,20,10)
    var platform2=createSprite(700,400,50,10)
    var platform3=createSprite(200,500,50,10)
    var platform4=createSprite(500,200,40,10)
    var platform5=createSprite(450,600,50,10)
    platform.addImage("plat",platimg)
    platform2.addImage("plat",platimg)
    platform3.addImage("plat",platimg)
    platform4.addImage("plat",platimg)
    platform5.addImage("plat",platimg)
    platform.debug=true;
    platform2.debug=true;
    platform3.debug=true;
    platform4.debug=true;
    platform5.debug=true;
    //platform.scale=0.1;
    platforms.add(platform);
    platforms.add(platform2)
    platforms.add(platform3)
    platforms.add(platform4)
    platforms.add(platform5)
    //console.log(platform1)
  }
}


function draw(){
  //set background color 
  //player.velocityY-=0.5;
 background('grey')
  drawSprites();
  if(keyDown("right")){
    player.x+=2;
  }
  if(keyDown("left")){
    player.x-=2;
  }
  if(keyDown("right")){
    player.x+=2;
  }
  if(keyWentUp("space")){
    player.y-=40;
  }
  if(player.velocityY<0.1){
  player.velocityY = player.velocityY + 0.5;
  }
  /*if(player.y==310||player.y==410||player.y==510||player.y==210||player.y==610){
    //player.y-=1;
    print('e')
  }*/
  if(frameCount%40==0){
      
    new Bullet(shooter,5);
  }
  player.collide(ground)
  player.collide(platforms)
  platforms.isTouching(player,stopFall())
  function stopFall(){
    print(platforms.length);
    //player.velocityY=10;
  }
  //console.table(player.x,player.y);
}
