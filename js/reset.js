'use strict';
/*global gameState timer generateScoreboard generateTarget generateDeck storeInLocal */

document.getElementById('reset').onclick = function() {
  resetGame();
};

function resetGame(){
  if(localStorage.gameState){
    if(gameState.currentValue === gameState.targetValue){
      timer();
    }
    document.getElementById('upButton').innerHTML = '';
    localStorage.removeItem('gameState');
    gameState.currentValue = 0;
    gameState.timer = 0;
    generateScoreboard();
    generateTarget();
    generateDeck();
    storeInLocal('gameState', gameState);
  }
}
