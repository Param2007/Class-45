class Player {
  constructor(){
    this.index = null;
    this.points = 0;
    this.name = null;
    this.rank = null;
    this.xPos = game.updateX();
    this.yPos = game.updateY();
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      points: this.points,
      x: this.xPos,
      y: this.yPos
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd() {
    var getCarsAtEndRef = database.ref('CarsAtEnd');
    getCarsAtEndRef.on("value",(data) => {
      this.rank = data.val();
    });
  }

  static updateCarsAtEnd(rank) {
    var updateCarsAtEnd = database.ref('/');
    updateCarsAtEnd.update({
      CarsAtEnd: rank
    });
  }

  readX() {
    var readRefX = database.ref('players/x');
    readRefX.on("value",(data) => {
      this.x = data.val();
    });
  }

  readY() {
    var readRefY = database.ref('players/y');
    readRefY.on("value",(data) => {
      this.y = data.val();
    });
  }

  writeX() {

  }
}
