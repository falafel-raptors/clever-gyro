'use strict';
/*global gameState timer generateScoreboard generateTarget generateDeck storeInLocal */
/* eslint-disable no-unused-vars */

document.getElementById('reset').onclick = function() {
  resetGame();
};

function resetGame(){
  if(localStorage.gameState){
    if(gameState.currentValue === gameState.targetValue){
      timer();
    }
    // document.getElementById('upButton').innerHTML = '';
    //set background to clear (if we were in ludicrious)
    document.getElementById('upButton').style.backgroundColor = '';
    document.getElementById('downButton').style.backgroundColor = '';
    document.getElementById('leftButton').style.backgroundColor = '';
    document.getElementById('rightButton').style.backgroundColor = '';

    localStorage.removeItem('gameState');
    gameState.currentValue = 0;
    gameState.timer = 0;
    generateScoreboard();
    generateTarget();
    generateDeck();
    storeInLocal('gameState', gameState);
    document.getElementById('target-circle').style.backgroundColor = '';
    document.getElementById('currentValue').style.backgroundImage = '';
    document.getElementById('currentValue').style.backgroundSize = '';
  }
}
