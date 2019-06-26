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
  timer: 0
};

var leaderBoard = [];

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

//Trevor added for timer
var interval;
function timer (){
  interval = setInterval(myTimer,100);
}


function init(){
  if(localStorage.leaderBoard){
    leaderBoard = returnFromLocal('leaderBoard');
  }
  if(localStorage.gameState){
    gameState = returnFromLocal('gameState');
    buildTarget(gameState.targetValue);
    buildCards();
  }else{
    generateTarget();
    // writeRules('modal');
    generateDeck();
    generateScoreboard();
  }
  console.log('gamestate', gameState);
  //trevor added for timer
  timer();
}

init();

function saveState(){
  storeInLocal('leaderBoard', leaderBoard);
  storeInLocal('gameState', gameState);
}
