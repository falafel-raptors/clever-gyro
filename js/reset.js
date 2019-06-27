'use strict';
/*global gameState generateTarget generateDeck storeInLocal */

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
    generateTarget();
    generateDeck();
    storeInLocal('gameState', gameState);
    document.getElementById('target-circle').style.backgroundColor = '';
  }
}
