'use strict';
/*global gameState clearHTML htmlTextHack generateDeck randomInclusiveNumGen storeInLocal */

//iterate over our cards, including current value
var cardArray = ['upButton', 'downButton', 'leftButton', 'rightButton'];

//TODO: kill repeat function, pass params for button and card

//build only a single card
function buildCardUp() {
  clearHTML('upButton');
  //create a new number
  var up = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  //save into game state our object
  gameState.cardUp = { int: up, str: String(up), operator: '-' };
  //generating html text
  htmlTextHack('p', '-'+gameState.cardUp.str, 'upButton');
  //push to local s
  storeInLocal('gameState', gameState);
}
function buildCardDown() {
  clearHTML('downButton');
  var down = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  gameState.cardDown = { int: down, str: String(down), operator: '-' };
  htmlTextHack('p', '-'+gameState.cardDown.str, 'downButton');
  storeInLocal('gameState', gameState);
}
function buildCardLeft() {
  clearHTML('leftButton');
  var left = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  gameState.cardLeft = { int: left, str: String(left), operator: '+' };
  htmlTextHack('p', gameState.cardLeft.str, 'leftButton');
  storeInLocal('gameState', gameState);
}
function buildCardRight() {
  clearHTML('rightButton');
  var right = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  gameState.cardRight = { int: right, str: String(right), operator: '+' };
  htmlTextHack('p', gameState.cardRight.str, 'rightButton');
  storeInLocal('gameState', gameState);
}

//displays HTML to screen, and also clears
function buildCard(){
  //create array to iterate over
  var deckObjects = [gameState.cardUp, gameState.cardDown,gameState.cardLeft,gameState.cardRight];

  //clear and build cards
  for(let i = 0; i<cardArray.length; i++){
    clearHTML(cardArray[i]);
    htmlTextHack('p',deckObjects[i].operator+deckObjects[i].str, cardArray[i]);
  }
  //clear and build current value div
  clearHTML('currentValue');
  htmlTextHack('p', String(gameState.currentValue), 'currentValue');
}

//first generator that builds all four cards to the screen
function generateDeck(){
  var up = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  var down = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  var left = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  var right = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);

  var cardUp = {
    int: up,
    str: String(up),
    operator: '-'
  };
  var cardDown = {
    int: down,
    str: String(down),
    operator: '-'
  };
  var cardRight = {
    int: right,
    str: String(right),
    operator: '+'
  };
  var cardLeft = {
    int: left,
    str: String(left),
    operator: '+'
  };

  //save into gameState
  gameState.cardUp = cardUp;
  gameState.cardDown = cardDown;
  gameState.cardLeft = cardLeft;
  gameState.cardRight = cardRight;
  // console.log(gameState);

  buildCard();

  //save to local storage
  storeInLocal('gameState', gameState);
}


