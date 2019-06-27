'use strict';
/*global gameState generateScoreboard cards handleClick storeInLocal buildNewCard doMath */

document.addEventListener('keydown', handleKeyDown, false);

//contains and checks for key press: WASD and arrows UDLR.
function handleKeyDown(e) {
  var keyCodes = e.keyCode;
  var keyCodeArray = [87, 38, 65, 37, 68, 39, 83, 40];

  if(keyCodeArray.indexOf(keyCodes) >-1){
    e.preventDefault();
  }
  //check the keydown event, and increases current value
  if(keyCodeArray.includes(keyCodes)){
    if(keyCodes === 87 || keyCodes === 38){
      gameState.currentValue = doMath(gameState.cardUp);
      buildNewCard('upButton');
    }
    if(keyCodes === 65 || keyCodes === 37){
      gameState.currentValue = doMath(gameState.cardLeft);
      buildNewCard('leftButton');
    }
    if(keyCodes === 68 || keyCodes === 39){
      gameState.currentValue = doMath(gameState.cardRight);
      buildNewCard('rightButton');
    }
    if(keyCodes === 83 || keyCodes === 40){
      gameState.currentValue = doMath(gameState.cardDown);
      buildNewCard('downButton');
    }
  }
  if(gameState.currentValue === gameState.targetValue){
    document.removeEventListener('keydown', handleKeyDown, false);
    cards.removeEventListener('click', handleClick);
    document.getElementById('currentValue').style.backgroundImage = 'url(\'assets/pita-raptor.png\')';
    document.getElementById('currentValue').style.backgroundSize = '175px 175px';
    generateScoreboard();
    playAudio();
  }
  //save to local storage
  storeInLocal ('gameState', gameState);
}

