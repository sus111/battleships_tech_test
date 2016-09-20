var Browser = require('zombie');
var assert = require('assert');
var chai = require('chai');
var expect  = chai.expect;
var assert = chai.assert;

describe('home page', function() {
 beforeEach(function() {
   this.browser = new Browser({ site: 'http://localhost:8080' });
 });

 beforeEach(function(done) {
   this.browser.visit('/', done);
 });

 it('should have an input box to place ship', function(){
   this.browser.assert.element('#enter-position');
   this.browser.assert.element('#submit-position');
 });

  it('should place the ship in the position entered', function(){
    var browser = this.browser;
    this.browser.fill('#enter-position', "3, 3");
    this.browser.pressButton('Submit Position');
    this.browser.wait().then( function() {
        browser.assert.hasClass('#a33', 'ship');
      });
  });

});
