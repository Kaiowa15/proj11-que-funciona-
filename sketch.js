
var player, player_running;

var path, path_image;

var invisiblewall1;

var invisiblewall2;




function preload(){
  //imagens pré-carregadas
  player_running = loadAnimation("Runner-1.png", "Runner-2.png")


 path_image = loadImage("path.png")
 
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui

  path = createSprite(200,200,400,280)
  path.addImage("path",path_image)
  path.y = path.width /2;
  path.velocity.y = 4;



  player = createSprite(180,360,10,10)
  
  player.addAnimation("running", player_running);
  player.scale = 0.05

 
  createEdgeSprites()






}

function draw() {
  background(55);

  invisiblewall1 = createSprite(20,200,20,300);
  invisiblewall1.visible = false;
 player.collide(invisiblewall1)

 invisiblewall2 = createSprite(380,200,20,300);
 invisiblewall2.visible = false;
 player.collide(invisiblewall2)


 if (path.y > 400){
  path.y = path.width/2;
} 



 if(keyDown(RIGHT_ARROW)) {
  player.x = player.x +5


  }

  if(keyDown(LEFT_ARROW)) {
    player.x = player.x -5
 
 
  }















 drawSprites ()

}
