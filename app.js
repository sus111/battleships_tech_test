var gameController = new GameController();

  window.onload=function(){
    gameController.startGame();

    $("#submit-position").on("click", function() {
      var position = $('#enter-position').val();
      gameController.moveShip(position);
    });

    $("#play-game").on("click", function() {
      gameController.computerPosition = gameController.randomComputerPosition();
      gameController.placeComputerShip(gameController.computerPosition);
    });

    $("#strike-button").on("click", function() {
      var strike = $('#enter-strike-position').val();
      gameController.checkStrike(strike);
    });

    $("#computer-turn-button").on("click", function() {
      var strike = $('#enter-strike-position').val();
      gameController.checkStrike(strike);
    });

  };
