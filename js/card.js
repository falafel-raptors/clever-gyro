'use strict';
/*global gameState clearHTML htmlTextHack generateDeck randomInclusiveNumGen storeInLocal */

//iterate over our cards, including current value
var cardArray = ['upButton', 'downButton', 'leftButton', 'rightButton'];

//To change individual card values
function buildNewCard(cardButton) {
  clearHTML(cardButton); // ex: 'upButton'
  var ranNum = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  if(cardButton === 'upButton'){
    gameState.cardUp = {int: ranNum, str: String(ranNum), operator: gameState.cardUp.operator};
    htmlTextHack('p', gameState.cardUp.operator+gameState.cardUp.str, cardButton);
  }
  if(cardButton === 'downButton'){
    gameState.cardDown = {int: ranNum, str: String(ranNum), operator: gameState.cardDown.operator};
    htmlTextHack('p', gameState.cardDown.operator+gameState.cardDown.str, cardButton);
  }
  if(cardButton === 'leftButton'){
    gameState.cardLeft = {int: ranNum, str: String(ranNum), operator: gameState.cardLeft.operator};
    htmlTextHack('p', gameState.cardLeft.operator+gameState.cardLeft.str, cardButton);
  }
  if(cardButton === 'rightButton'){
    gameState.cardRight = {int: ranNum, str: String(ranNum), operator: gameState.cardRight.operator};
    htmlTextHack('p', gameState.cardRight.operator+gameState.cardRight.str, cardButton);
  }
  clearHTML('currentValue');
  htmlTextHack('p', String(gameState.currentValue), 'currentValue');
  storeInLocal('gameState', gameState);
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


