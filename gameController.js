var displayController = new DisplayController();
var board = new Board();

(function(exports){

function GameController(){
}

GameController.prototype.startGame = function () {
  displayController.drawMap();
};

GameController.prototype.moveShip = function(position){
  var x = position.slice(0, 1);
  var y = position.slice(-1);
  board.array[x][y] = 1;
  var changeTile = 'a' + x.toString() + y.toString();
  displayController.updateTile(changeTile);
};

exports.GameController = GameController;
  })(this);
