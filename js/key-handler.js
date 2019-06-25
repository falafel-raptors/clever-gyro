'use strict';
/*global gameState generateDeck storeInLocal */

document.addEventListener('keydown', handleKeyDown, false);

function handleKeyDown(e) {
  var upCount = gameState.cardUp.int * gameState.cardUp.operator;
  var leftCount = gameState.cardLeft.int * gameState.cardLeft.operator;
  var rightCount = gameState.cardRight.int * gameState.cardRight.operator;
  var downCount = gameState.cardDown.int * gameState.cardDown.operator;
  var keyCode = e.keyCode;
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
  generateDeck();
  console.log('current value', gameState.currentValue);

  //save to local storage
  storeInLocal ('gameState', gameState);
}

