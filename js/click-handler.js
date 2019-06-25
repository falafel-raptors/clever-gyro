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
    var upCount = gameState.cardUp.int * gameState.cardUp.operator;
    var leftCount = gameState.cardLeft.int * gameState.cardLeft.operator;
    var rightCount = gameState.cardRight.int * gameState.cardRight.operator;
    var downCount = gameState.cardDown.int * gameState.cardDown.operator;

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
    generateDeck();
    console.log('current value', gameState.currentValue);

    //save to local storage
    storeInLocal ('gameState', gameState);
  };

  cards.addEventListener('click', handleClick);

});

