var gameController = new GameController();

  window.onload=function(){
    gameController.startGame();
    
    $("#submit-position").on("click", function() {
      var position = $('#enter-position').val();
      gameController.moveShip(position);
    });

  };
