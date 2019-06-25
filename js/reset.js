'use strict';

document.getElementById('reset').onclick = function() {
  if(localStorage.gameState){
    document.getElementById('upButton').innerHTML = '';
    localStorage.clear();
    gameState.currentValue = 0;
    storeInLocal('gameState', gameState);
    generateDeck();
    generateTarget();
  }
};
