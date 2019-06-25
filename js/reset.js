'use strict';


document.getElementById('reset').onclick = function() {
  resetGame();
}

function resetGame(){
  if(localStorage.gameState){
    document.getElementById('upButton').innerHTML = '';
    localStorage.clear();
    gameState.currentValue = 0;
    generateTarget();
    generateDeck();
    storeInLocal('gameState', gameState);
  }
};
