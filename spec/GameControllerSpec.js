describe("Map", function() {
  var game;

  beforeEach(function() {
    game = new gameController();
  });

  it("should return a random position for the computer", function() {
    game.placeComputerShip();
    expect(game.computerPosition > 1 && game.computerPosition < 100).toBeTruthy();
  });

});
