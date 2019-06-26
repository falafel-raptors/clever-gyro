'use strict';
/*global returnFromLocal buildTarget buildCards generateTarget writeRules generateScoreboard generateDeck */

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
  targetMin: 100,
  targetMax: 200,
  time: 99.3
};

var leaderBoard = [3.2, 10.4, 9.5, 1.1];

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
    buildCards();
    generateScoreboard();
  }else{
    generateTarget();
    // writeRules('modal');
    generateDeck();
    generateScoreboard();
  }
  console.log('gamestate', gameState);
}

init();
