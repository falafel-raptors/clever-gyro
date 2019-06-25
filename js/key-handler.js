'use strict';
/*global gameState generateDeck storeInLocal */

document.addEventListener('keydown', handleKeyDown, false);

//contains and checks for key press: WASD and arrows UDLR.
function handleKeyDown(e) {
  //math logic: checks operator for negative, and multiples if so.
  var upCount = gameState.cardUp.operator === '-' ? gameState.cardUp.int * -1 : gameState.cardUp.int;
  var leftCount = gameState.cardLeft.operator === '-' ? gameState.cardLeft.int * -1 : gameState.cardLeft.int;
  var rightCount = gameState.cardRight.operator === '-' ? gameState.cardRight.int * -1 : gameState.cardRight.int;
  var downCount = gameState.cardDown.operator === '-' ? gameState.cardDown.int * -1 : gameState.cardDown.int;
  var keyCode = e.keyCode;
  var keyCodeArray = [87, 38, 65, 37, 68, 39, 83, 40];

  //check the keydown event, and increases current value
  if(keyCodeArray.includes(keyCode)){
    if(keyCode === 87 || keyCode === 38){
      gameState.currentValue += upCount;
    }
    if(keyCode === 65 || keyCode === 37){
      gameState.currentValue += leftCount;
    }
    if(keyCode === 68 || keyCode === 39){
      gameState.currentValue += rightCount;
    }
    if(keyCode === 83 || keyCode === 40){
      gameState.currentValue += downCount;
    }
    //TODO: generate only one card, unless first iteration
    generateDeck();
  }

  //save to local storage
  storeInLocal ('gameState', gameState);
}

