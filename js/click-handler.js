'use strict';

/*global gameState generateDeck storeInLocal countUpdater */

document.addEventListener('DOMContentLoaded', function(e) { 
  e.preventDefault();
  var cards = document.getElementById('cards');

  var pressedButton = e.key;
  if(pressedButton === 'w'){
    console.log('pressedButton:', pressedButton);
  }

  var handleClick = function(card) {
    //check the element based on that p, and increases current value
    if(card.target.parentElement.id === 'upButton'){
      console.log(card.target.parentElement)
      console.log(typeof (card.target.parentElement.id));
      gameState.currentValue += countUpdater(gameState.cardUp);
      buildNewCard('upButton');
    }
    if(card.target.parentElement.id === 'leftButton'){
      console.log(typeof (card.target.parentElement.id));
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
    console.log('current value:', gameState.currentValue);

    //save to local storage
    storeInLocal ('gameState', gameState);
  };
  cards.addEventListener('click', handleClick);

});

