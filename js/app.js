'use strict';
/*global returnFromLocal buildTarget buildCards generateTarget storeInLocal generateScoreboard generateDeck myTimer */
/* eslint-disable no-unused-vars */

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

var interval;
function timer (){
  interval = setInterval(myTimer,100);
}

function saveState(){
  storeInLocal('leaderBoard', leaderBoard);
  storeInLocal('gameState', gameState);
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
    generateDeck();
    generateScoreboard();
  }
  timer();
}

init();
