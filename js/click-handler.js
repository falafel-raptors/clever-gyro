'use strict';
/*global gameState generateDeck storeInLocal */

document.addEventListener('DOMContentLoaded', function(e) { 
  e.preventDefault();
  var cards = document.getElementById('cards');

  var pressedButton = e.key;
  if(pressedButton === 'w'){
    console.log('pressedButton:', pressedButton);
  }

  var handleClick = function(card) {
    //math logic: checks operator for negative, and multiples if so.
    var upCount = gameState.cardUp.operator === '-' ? gameState.cardUp.int * -1 : gameState.cardUp.int;
    var downCount = gameState.cardDown.operator === '-' ? gameState.cardDown.int * -1 : gameState.cardDown.int;
    var leftCount = gameState.cardLeft.operator === '-' ? gameState.cardLeft.int * -1 : gameState.cardLeft.int;
    var rightCount = gameState.cardRight.operator === '-' ? gameState.cardRight.int * -1 : gameState.cardRight.int;

    //check the element based on that p, and increases current value
    if(card.target.parentElement.id === 'upButton'){
      gameState.currentValue += upCount;
      console.log(card.target.parentElement.id);
    }
    if(card.target.parentElement.id === 'leftButton'){
      console.log(card.target.parentElement.id);
      gameState.currentValue += leftCount;
    }
    if(card.target.parentElement.id === 'rightButton'){
      console.log(card.target.parentElement.id);
      gameState.currentValue += rightCount;
    }
    if(card.target.parentElement.id === 'downButton'){
      console.log(card.target.parentElement.id);
      gameState.currentValue += downCount;
    }
    //generate all four cards
    //TODO: update for single card.
    generateDeck();
    console.log('current value', gameState.currentValue);

    //save to local storage
    storeInLocal ('gameState', gameState);
  };

  cards.addEventListener('click', handleClick);

});

