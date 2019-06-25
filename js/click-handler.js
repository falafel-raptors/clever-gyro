'use strict';
/*global gameState generateDeck storeInLocal countUpdater */

// document.addEventListener('DOMContentLoaded', function(e) { 
//   e.preventDefault();
  var cards = document.getElementById('cards');


  function handleClick (e) {
    e.preventDefault();
    //check the element based on that p, and increases current value
    if(gameState.currentValue === gameState.targetValue){
      cards.removeEventListener('click', handleClick);
      // TODO: produce modal
    } else {
      if(e.target.parentElement.id === 'upButton'){
        gameState.currentValue += countUpdater(gameState.cardUp);
        buildNewCard('upButton');
      }
      if(e.target.parentElement.id === 'leftButton'){
        gameState.currentValue += countUpdater(gameState.cardLeft);
        buildNewCard('leftButton');
      }
      if(e.target.parentElement.id === 'rightButton'){
        gameState.currentValue += countUpdater(gameState.cardRight);
        buildNewCard('rightButton');
      }
      if(e.target.parentElement.id === 'downButton'){
        gameState.currentValue += countUpdater(gameState.cardDown);
        buildNewCard('downButton');
      }
    //save to local storage
    storeInLocal ('gameState', gameState);
    }
  }

  cards.addEventListener('click', handleClick);
// })
