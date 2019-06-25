'use strict';
/*global gameState generateDeck storeInLocal buildNewCard countUpdater */

document.addEventListener('keydown', handleKeyDown, false);

//contains and checks for key press: WASD and arrows UDLR.
function handleKeyDown(e) { 
  var keyCode = e.keyCode;
  var keyCodeArray = [87, 38, 65, 37, 68, 39, 83, 40];
  
  //check the keydown event, and increases current value
  if(keyCodeArray.includes(keyCode)){
    if(keyCode === 87 || keyCode === 38){
      gameState.currentValue += countUpdater(gameState.cardUp);
      buildNewCard('upButton');
    }
    if(keyCode === 65 || keyCode === 37){
      gameState.currentValue += countUpdater(gameState.cardLeft);
      buildNewCard('leftButton');
    }
    if(keyCode === 68 || keyCode === 39){
      gameState.currentValue += countUpdater(gameState.cardRight);
      buildNewCard('rightButton');
    }
    if(keyCode === 83 || keyCode === 40){
      gameState.currentValue += countUpdater(gameState.cardDown);
      buildNewCard('downButton');
    }
    console.log('current value:', gameState.currentValue);
  }
  //save to local storage
  storeInLocal ('gameState', gameState);
}

