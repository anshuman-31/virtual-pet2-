var dog,dogImg;
var happyDog;
var database;
var foodS;
var foodStock;
var fedTime;
var lastFed;
var feed;
var addFood;
var foodObj;

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  
  addFood=createButton("add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
   
  var foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}
  drawSprites();
  text("Foodremaining:",30,30)
  fill("white")
  stroke("black");
  textSize(5)
  fill("white");
  stroke("black")
  textSize(5);
}
fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed :"+ lastFed%12 + "PM",350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else {
  text("Last Feed : "+lastFEd + "AM",350,30);
}


function readStock(data){
  foodS.data.val();
}
function writeStocks(){
  if(x<=0){
    x=0;
  }else{
    x=x+1;
  }
  
  database.ref('/').update({
    food:x
  })
}
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}


