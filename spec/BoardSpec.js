describe("Map", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("should be an array", function() {
    expect(board.array).toEqual(jasmine.any(Array));
  });

  it("should be an array of 10 arrays", function(){
    expect(board.array.length).toEqual(10);
  });
  it("each array should contain 10 elements", function(){
    for(var i=0; i<board.array.length; i++){
      expect(board.array[i].length).toEqual(10);
    }
  });


});
