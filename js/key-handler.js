'use strict';
/*global gameState generateDeck storeInLocal buildNewCard countUpdater */

document.addEventListener('keydown', handleKeyDown, false);

//contains and checks for key press: WASD and arrows UDLR.
function handleKeyDown(e) {
  var keyCodes = e.keyCode;
  var keyCodeArray = [87, 38, 65, 37, 68, 39, 83, 40];
  
  if(keyCodeArray.indexOf(keyCodes) >-1){
    e.preventDefault();
  }
  if(gameState.currentValue === gameState.targetValue){
    document.removeEventListener('keydown', handleKeyDown, false);
    // TODO: Produce modal
  } else {
    //check the keydown event, and increases current value
    if(keyCodeArray.includes(keyCodes)){
      if(keyCodes === 87 || keyCodes === 38){
        gameState.currentValue += countUpdater(gameState.cardUp);
        buildNewCard('upButton');
      }
      if(keyCodes === 65 || keyCodes === 37){
        gameState.currentValue += countUpdater(gameState.cardLeft);
        buildNewCard('leftButton');
      }
      if(keyCodes === 68 || keyCodes === 39){
        gameState.currentValue += countUpdater(gameState.cardRight);
        buildNewCard('rightButton');
      }
      if(keyCodes === 83 || keyCodes === 40){
        gameState.currentValue += countUpdater(gameState.cardDown);
        buildNewCard('downButton');
      }
    }
  }  
  //save to local storage
  storeInLocal ('gameState', gameState);
}

