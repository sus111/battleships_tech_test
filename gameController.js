var displayController = new DisplayController();

(function(exports){

function GameController(){
}

GameController.prototype.startGame = function () {
  displayController.drawMap();
};


exports.GameController = GameController;
  })(this);
