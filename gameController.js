var displayController = new DisplayController();
var board = new Board();

(function(exports){

function GameController(){
  this.playerPosition = '';
  this.computerPosition = '';
  this.playerTurn = 1;
}

GameController.prototype.startGame = function () {
  displayController.drawMap();
};

GameController.prototype.moveShip = function(position){
  x = parseInputx(position);
  y = parseInputy(position);
  board.array[x][y] = 1;
  var changeTile = 'a' + x.toString() + y.toString();
  this.playerPosition = x.toString() + y.toString();
  displayController.updateTile(changeTile, "ship");
};

parseInputx = function(input){
  var x = input.slice(0, 1);
  x = parseInt(x);
  return x ;
};

parseInputy = function(input){
  var y = input.slice(-1);
  y = parseInt(y);
  return y;
};

GameController.prototype.checkTurn = function(){
  
};

GameController.prototype.randomComputerPosition = function(){
  var computerPosition = Math.floor(Math.random() * 99) + 0;
  return (computerPosition === this.playerPosition) ?
  this.positionComputerShip() : computerPosition;
};

GameController.prototype.placeComputerShip = function(){
  this.computerPosition = this.computerPosition.toString();
  var x = parseInputx(this.computerPosition);
  var y = parseInputy(this.computerPosition);
  board.array[x][y] = 2;
  console.log(this.computerPosition);
  console.log(board.array);
};

GameController.prototype.checkStrike = function(position){
  x = parseInputx(position);
  y = parseInputy(position);
  var tile = "a" + x.toString() + y.toString();
  if (board.array[x][y] !== 2){
    alert("You missed :(");
    displayController.updateTile(tile, "miss");
  }
  else{
    alert("You sunk your opponent's ship!");
  }
};

exports.GameController = GameController;
  })(this);
