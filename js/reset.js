'use strict';


document.getElementById('reset').onclick = function() {
  resetGame();
};

function resetGame(){
  if(localStorage.gameState){
    document.getElementById('upButton').innerHTML = '';
    // let localGame = localGame.gameState;
    localStorage.removeItem('gameState');
    gameState.currentValue = 0;
    //Trevor added for timer
    gameState.timer = 0;
    
    generateTarget();
    generateDeck();
    storeInLocal('gameState', gameState);
    //Trevor added for timer
    timer();
  }
}
