'use strict';
/*global gameState generateDeck storeInLocal buildNewCard */

function countUpdater(gameStateItem){
  var countUpdate = gameStateItem.operator === '-' ? gameStateItem.int * -1 : gameStateItem.int;
  console.log('count update', countUpdate);
  return countUpdate;
}

document.addEventListener('keydown', handleKeyDown, false);

//contains and checks for key press: WASD and arrows UDLR.
//TODO: add count parameter function for updating currentValue and card int
function handleKeyDown(e, count) {
  //math logic: checks operator for negative, and multiples if so.
  var keyCode = e.keyCode;
  var keyCodeArray = [87, 38, 65, 37, 68, 39, 83, 40];
  


  
  //check the keydown event, and increases current value
  if(keyCodeArray.includes(keyCode)){
    if(keyCode === 87 || keyCode === 38){
      // console.log(upCount);
      gameState.currentValue += countUpdater(gameState.cardUp);
      buildNewCard('upButton', gameState.cardUp);
    }
    if(keyCode === 65 || keyCode === 37){
      gameState.currentValue += countUpdater(gameState.cardleft);
      buildNewCard('leftButton', gameState.cardLeft);
    }
    if(keyCode === 68 || keyCode === 39){
      gameState.currentValue += countUpdater(gameState.cardright);
      buildNewCard('rightButton', gameState.cardRight);
    }
    if(keyCode === 83 || keyCode === 40){
      gameState.currentValue += countUpdater(gameState.carddown);
      buildNewCard('downButton', gameState.cardDown);
    }
    //TODO: generate only one card, unless first iteration
    // generateDeck();
    console.log('current value:', gameState.currentValue);
  }

  //save to local storage
  storeInLocal ('gameState', gameState);
}

