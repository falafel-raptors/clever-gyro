'use strict';
/*global gameState buildNewCard storeInLocal doMath handleKeyDown generateScoreboard leaderBoard playAudio */
/* eslint-disable no-unused-vars */

var cards = document.getElementById('cards');

function handleClick (e) {
  e.preventDefault();
  //check the element based on that p, and increases current value
  if(e.target.id === 'upButton'|| e.target.parentElement.id === 'upButton'){
    //call function here to do the math
    gameState.currentValue = doMath(gameState.cardUp);
    buildNewCard('upButton');
  }
  else if(e.target.id === 'leftButton'|| e.target.parentElement.id === 'leftButton'){
    //call function to do the math
    gameState.currentValue = doMath(gameState.cardLeft);
    buildNewCard('leftButton');
  }
  else if(e.target.id === 'rightButton'|| e.target.parentElement.id === 'rightButton'){
    //call function to do the math
    gameState.currentValue = doMath(gameState.cardRight);
    buildNewCard('rightButton');
  }
  else if(e.target.id === 'downButton'|| e.target.parentElement.id === 'downButton'){
    //call function to do the math
    gameState.currentValue = doMath(gameState.cardDown);
    buildNewCard('downButton');
  }
  //save to local storage
  if(gameState.currentValue === gameState.targetValue){
    cards.removeEventListener('click', handleClick);
    document.removeEventListener('keydown', handleKeyDown, false);
    let time = gameState.timer / 10;
    time += 0.1;
    leaderBoard.push(time.toFixed(1));
    document.getElementById('currentValue').style.backgroundImage = 'url(\'assets/pita-raptor.png\')';
    document.getElementById('currentValue').style.backgroundSize = '175px 175px';
    document.getElementById('target-circle').style.backgroundColor = '#0ED900';
    playAudio();
    generateScoreboard();
    

  }
  storeInLocal ('gameState', gameState);
}

cards.addEventListener('click', handleClick);
