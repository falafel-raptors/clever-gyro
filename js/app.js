'use strict';

// globals
var gameState = {
  hasSeenRules: false,
  rulesView: false,
  victoryView: false,
  targetValue: 0,
  currentValue: 0,
  cardUp: 0,
  cardLeft: 0,
  cardRight: 0,
  cardDown: 0,
  minRange: 1,
  maxRange: 10,
};

//requirements:
//function to generate target value
//function to generate cards
//generate first four numbers
//function to check win condition
//function to reset game
//function to target modal
//function to save game state
//function to load game state
//function to handle clicks
//function to handle keys
//CSS



function init(){
  if(localStorage.gameState){
    gameState = returnFromLocal('gameState');
    buildTarget(gameState.targetValue);
    buildCard();
  }else{
    generateTarget();
    writeRules('modal');
    generateDeck();
  }
  console.log('gamestate', gameState);
}

init();
