class Game {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1, car2, car3, car4];

    car1.addAnimation("rightB", carRight1);
    car2.addAnimation("rightG", carRight2);
    car3.addAnimation("rightO", carRight3);
    car4.addAnimation("rightY", carRight4);

    car1.addAnimation("leftB", carLeft1);
    car2.addAnimation("leftG", carLeft2);
    car3.addAnimation("leftO", carLeft3);
    car4.addAnimation("leftY", carLeft4);

    car1.addAnimation("upB", carUp1);
    car2.addAnimation("upG", carUp2);
    car3.addAnimation("upO", carUp3);
    car4.addAnimation("upY", carUp4);

    car1.addAnimation("downB", carDown1);
    car2.addAnimation("downG", carDown2);
    car3.addAnimation("downO", carDown3);
    car4.addAnimation("downY", carDown4);

    var r = Math.round(random(1,4));

    //r1 = red
    //r2 = blue
    //r3 = yellow
    //r4 = green

    if(r === 1) {
      point1 = createSprite(160, 300, 20, 20);
      point1.shapeColor = "red";

      point2 = createSprite(1000, 800, 20, 20);
      point2.shapeColor = "red";

      point3 = createSprite(1800, 100, 20, 20);
      point3.shapeColor = "red";
    }else if(r === 2) {
      point1 = createSprite(480, 740, 20, 20);
      point1.shapeColor = "blue";

      point2 = createSprite(1000, 600, 20, 20);
      point2.shapeColor = "blue";

      point3 = createSprite(1600, 470, 20, 20);
      point3.shapeColor = "blue";
    }else if(r === 3) {
      point1 = createSprite(500, 620, 20, 20);
      point1.shapeColor = "yellow";

      point2 = createSprite(750, 800, 20, 20);
      point2.shapeColor = "yellow";

      point3 = createSprite(1500, 400, 20, 20);
      point3.shapeColor = "yellow";
    }else {
      point1 = createSprite(160, 750, 20, 20);
      point1.shapeColor = "green";
      
      point2 = createSprite(700, 200, 20, 20);
      point2.shapeColor = "green";

      point3 = createSprite(1500, 700, 20, 20);
      point3.shapeColor = "green";
    }
     
  }

  play() {
    form.hide();

    Player.getPlayerInfo();

    player.getCarsAtEnd();
    
    if(allPlayers !== undefined) {

      background("black");

      wall = createSprite(200,250,200,20);
      wall.shapeColor = "blue";
      wall2 = createSprite(150,50,20,100);
      wall2.shapeColor = "blue";
      wall3 = createSprite(200,300,20,100);
      wall3.shapeColor = "blue";
      wall4 = createSprite(300,110,20,100);
      wall4.shapeColor = "red";
      wall5 = createSprite(250,500,400,20);
      wall5.shapeColor = "yellow";
      wall6 = createSprite(200,700,20,200);
      wall6.shapeColor = "gray";
      wall7 = createSprite(50,700,100,20);
      wall7.shapeColor = "purple";
      wall8 = createSprite(400,700,200,20);
      wall8.shapeColor = "purple";
      wall9 = createSprite(550,700,20,200);
      wall9.shapeColor = "blue";
      wall10 = createSprite(550,250,20,300);
      wall10.shapeColor = "blue";
      wall11 = createSprite(900,500,400,20);
      wall11.shapeColor = "yellow";
      wall12 = createSprite(1600,500,400,20);
      wall12.shapeColor = "yellow";
      wall13 = createSprite(1000,150,200,20);
      wall13.shapeColor = "blue";
      wall14 = createSprite(900,700,20,220);
      wall14.shapeColor = "red";
      wall15 = createSprite(900,700,220,20);
      wall15.shapeColor = "red";
      wall16 = createSprite(1500,150,300,20);
      wall16.shapeColor = "yellow";
      wall17 = createSprite(1600,300,300,20);
      wall17.shapeColor = "yellow";
      wall18 = createSprite(900,300,20,150);
      wall18.shapeColor = "purple";
      wall19 = createSprite(800,300,200,20);
      wall19.shapeColor = "purple";
      wall20 = createSprite(1200,300,20,200);
      wall20.shapeColor = "blue";
      wall21 = createSprite(1500,700,500,20);
      wall21.shapeColor = "blue";
      wall22 = createSprite(1400,760,20,100);
      wall22.shapeColor = "blue";
      wall23 = createSprite(1600,640,20,100);
      wall23.shapeColor = "blue";

      var index = 0;

      //x and y position of the cars
      var x = 230;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        
        //position the cars a little away from each other in x direction
        var x = x + 260;
        //use data form the database to display the cars in y direction
        y = 50;
        cars[index-1].x = player.readX();
        cars[index-1].y = player.readY();

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    /*if(keyDown(UP_ARROW) && player.index !== null) {
      player.y = player.y - 2

      player.addAnimation("up", carUp+player.index);
      
    }

    if(keyDown(DOWN_ARROW) && player.index !== null){
      player.y = player.y + 2

      player.addAnimation("down", carDown+player.index);
    }

    if(keyDown(LEFT_ARROW) && player.index !== null){
      player.x = player.x - 2

      player.addAnimation("left", carLeft+player.index);
    }

    if(keyDown(RIGHT_ARROW) && player.index !== null){
      player.x = player.x - 2

      player.addAnimation("right", carRight+player.index);
    }
*/
    console.log(player.index);

    switch(player.index) {
      case 1: {
        if(keyDown(UP_ARROW)) {
          player.y = player.y - 10
    
          car1.changeAnimation("upB", carUp1);
          
          player.update();
        }
    
        if(keyDown(DOWN_ARROW)){
          player.y = player.y + 10
    
          car1.changeAnimation("downB", carDown1);

          player.update();
        }
    
        if(keyDown(LEFT_ARROW)){
          player.x = player.x - 10
    
          car1.changeAnimation("leftB", carLeft1);

          player.update();
        }
    
        if(keyDown(RIGHT_ARROW)){
          player.x = player.x - 10
    
          car1.changeAnimation("rightB", carRight1);

          player.update();
        }

        break;
      }

      case 2: {
        if(keyDown(UP_ARROW)) {
          player.y = player.y - 10
    
          car2.changeAnimation("upG", carUp2);

          player.update();
        }
    
        if(keyDown(DOWN_ARROW)){
          player.y = player.y + 10
    
          car2.changeAnimation("downG", carDown2);

          player.update();
        }
    
        if(keyDown(LEFT_ARROW)){
          player.x = player.x - 10
    
          car2.changeAnimation("leftG", carLeft2);

          player.update();
        }
    
        if(keyDown(RIGHT_ARROW)){
          player.x = player.x - 10
    
          car2.changeAnimation("rightG", carRight2);
          
          player.update();
        }

        break;
      }

      case 3: {
        if(keyDown(UP_ARROW)) {
          player.y = player.y - 10
    
          car3.changeAnimation("upO", carUp3);

          player.update();
        }
    
        if(keyDown(DOWN_ARROW)){
          player.y = player.y + 10
    
          car3.changeAnimation("downO", carDown3);
          
          player.update();
        }
    
        if(keyDown(LEFT_ARROW)){
          player.x = player.x - 10
    
          car3.changeAnimation("leftO", carLeft3);

          player.update();
        }
    
        if(keyDown(RIGHT_ARROW)){
          player.x = player.x - 10
    
          car3.changeAnimation("rightO", carRight3);

          player.update();
        }

        break;
      }

      case 4: {
        if(keyDown(UP_ARROW)) {
          car4.y = car4.y - 10
    
          car4.changeAnimation("upY", carUp4);

          player.update();
        }else if(keyDown(DOWN_ARROW)){
          car4.y = car4.y + 10
    
          car4.changeAnimation("downY", carDown4);

          player.update();
        }else if(keyDown(LEFT_ARROW)){
          car4.x = car4.x - 10
    
          car4.changeAnimation("leftY", carLeft4);

          player.update();
        }else if (keyDown(RIGHT_ARROW)){
          car4.x = car4.x - 10
    
          car4.changeAnimation("rightY", carRight4);

          player.update();
        }

        break;
      }
    }

    if(player.points === 3) {
      player.rank = player.rank + 1;

      Player.updateCarsAtEnd(player.rank);
    }

    //if(player.distance >= 5150) {
      //gameState = 2;

      //textSize(30);
      //stroke("white");
      //text("Your rank is: " + player.rank, displayWidth/2, y - 100);
      
    //}

    if(isTouching(car1, point1)||(isTouching(car1,point2)||(isTouching(car1, point3)))) {
      player.points = player.points + 1;

      point1.destroy();
      player.update();
    }

    if(isTouching(car2, point1)||(isTouching(car2,point2)||(isTouching(car2, point3)))) {
      player.points = player.points + 1;

      point2.destroy();
      player.update();
    }

    if(isTouching(car3, point1)||(isTouching(car3,point2)||(isTouching(car3, point3)))) {
      player.points = player.points + 1;

      point3.destroy();
      player.update();
    }

    if(player.points > 1) {
      game.update(3);
    }
    
    text("Points:" + player.points, displayWidth/2, player.y - 60);
    
    drawSprites();
  }

  end() {
    game.update(2);
  }

  updateX() {
    return x;
  }

  updateY() {
    return y;
  }
}
