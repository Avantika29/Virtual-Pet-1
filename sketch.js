var dog,dog_happy,food,database,foodStock;
var dogImg;

function preload()
{
  dogImg = loadImage("dogImg.png")
  dog_happy = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,100,30,50)
  dog.addImage(dogImg);

  database = firebase.database();

  foodStock = database.ref("food");
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
writeStock(food);
dog.addImage(dog_happy)
}

  drawSprites();
  
}

function readPosition(data){
  food = data.val();
 
  }

  function writePosition(x){
if(x <= 0){
  x = 0
} else{
  x = x - 1;
}
database.ref("/").update
Food : x;
  }


