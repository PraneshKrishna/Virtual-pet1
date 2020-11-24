var dog,happyDog,database,foodS,foodStock;
var dogImg;
function preload()
{
dogImg.addImage("sprite/dogImg.png");
}

function setup() {
	createCanvas(500,500);
  dog = createSprite
  dog.loadImage("sprites/dogImg");
  database = firebase.database();
}


function draw() {  

  drawSprites();


}



