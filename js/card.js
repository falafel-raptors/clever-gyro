'use strict';
/*global gameState clearHTML htmlTextHack generateDeck randomInclusiveNumGen storeInLocal */

//iterate over our cards, including current value
var cardArray = ['upButton', 'downButton', 'leftButton', 'rightButton'];

//To change individual card values
function buildNewCard(cardButton, gameStateItem) {
  clearHTML(cardButton);
  var ranNum = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  gameStateItem = {int: ranNum, str: String(ranNum), operator: gameStateItem.operator};
  console.log('gameStateItem.operator', gameStateItem.operator);
  console.log('gameStateItem', gameStateItem);
  htmlTextHack('p', gameStateItem.operator+gameStateItem.str, cardButton);
  storeInLocal('gameState', gameState);
  clearHTML('currentValue');
  htmlTextHack('p', String(gameState.currentValue), 'currentValue');
}

//displays HTML to screen, and also clears
function buildCards(){
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

  buildCards();

  //save to local storage
  storeInLocal('gameState', gameState);
}


