var container = document.getElementById('character');
(function(exports){

function DisplayController(){
}

DisplayController.prototype.drawMap = function () {
  for(var i=0; i < board.array.length; i++){
    for(var j=0; j < board.array[i].length; j++){

      if(parseInt(board.array[i][j]) === 0){
        var x = i.toString();
        var y = j.toString();
        var waterTile = x + y;
        $('#container').append('<div class= "water" id=' + "a" + waterTile + '></div>');
      }
    }
  }
};

DisplayController.prototype.updateTile = function(tile, newClass) {
  document.getElementById(tile).setAttribute("class", newClass);
};

exports.DisplayController = DisplayController;
  })(this);
