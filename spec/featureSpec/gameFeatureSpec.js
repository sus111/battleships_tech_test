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

 it('should have a play game button', function(){
   this.browser.assert.element('#play-game');
 });

 it('should have a enter strike position', function(){
   this.browser.assert.element('#enter-strike-position');
   this.browser.assert.element('#strike-button');
 });

 it('should come up with an alert if it is a miss', function(){
   var browser = this.browser;
   this.browser.fill('#enter-strike-position', "4, 5");
   this.browser.pressButton('Strike');
  //  this.browser.wait().then( function() {
  //      browser.assert.alert('You missed!);
  //    });
 });

 it('should attack the player when computer turn clicked', function(){
   var browser = this.browser;
   this.browser.pressButton('Computer Turn');
 });



});
