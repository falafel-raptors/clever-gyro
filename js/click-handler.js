'use strict';
/*global gameState buildNewCard storeInLocal countUpdater */

var cards = document.getElementById('cards');

function handleClick (e) {
  e.preventDefault();
  //check the element based on that p, and increases current value
  if(gameState.currentValue === gameState.targetValue){
    leaderBoard.push(gameState.time);
    console.log(leaderBoard);
    generateScoreboard();
    cards.removeEventListener('click', handleClick);
    // TODO: produce modal
  } else {
    if(e.target.id === 'upButton'|| e.target.parentElement.id === 'upButton'){
      gameState.currentValue += countUpdater(gameState.cardUp);
      buildNewCard('upButton');
    }
    else if(e.target.id === 'leftButton'|| e.target.parentElement.id === 'leftButton'){
      gameState.currentValue += countUpdater(gameState.cardLeft);
      buildNewCard('leftButton');
    }
    else if(e.target.id === 'rightButton'|| e.target.parentElement.id === 'rightButton'){
      gameState.currentValue += countUpdater(gameState.cardRight);
      buildNewCard('rightButton');
    }
    else if(e.target.id === 'downButton'|| e.target.parentElement.id === 'downButton'){
      gameState.currentValue += countUpdater(gameState.cardDown);
      buildNewCard('downButton');
    }
    //save to local storage
    storeInLocal ('gameState', gameState);
  }
}

cards.addEventListener('click', handleClick);
