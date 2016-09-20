var container = document.getElementById('character');
var board = new Board();
(function(exports){

function DisplayController(){
}

DisplayController.prototype.drawMap = function () {
  for(var i=0; i < board.array.length; i++){
    for(var j=0; j < board.array[i].length; j++){

      if(parseInt(board.array[i][j]) === 0){
        $('#container').append('<div class="water"></div>');
      }
    }
  }
};


exports.DisplayController = DisplayController;
  })(this);
