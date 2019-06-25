'use strict';
/*global gameState generateDeck storeInLocal countUpdater */

document.addEventListener('DOMContentLoaded', function(e) { 
  e.preventDefault();
  var cards = document.getElementById('cards');

  var handleClick = function(card) {
    //check the element based on that p, and increases current value
    if(gameState.currentValue === gameState.targetValue){
      card.removeEventListener('click', handleClick);
    } else {
      if(card.target.parentElement.id === 'upButton'){
        gameState.currentValue += countUpdater(gameState.cardUp);
        buildNewCard('upButton');
      }
      if(card.target.parentElement.id === 'leftButton'){
        gameState.currentValue += countUpdater(gameState.cardLeft);
        buildNewCard('leftButton');
      }
      if(card.target.parentElement.id === 'rightButton'){
        gameState.currentValue += countUpdater(gameState.cardRight);
        buildNewCard('rightButton');
      }
      if(card.target.parentElement.id === 'downButton'){
        gameState.currentValue += countUpdater(gameState.cardDown);
        buildNewCard('downButton');
      }
    //save to local storage
    storeInLocal ('gameState', gameState);
  }
  cards.addEventListener('click', handleClick);
  }
})
