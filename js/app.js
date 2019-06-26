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
  targetMin: 1,
  targetMax: 50,
  timer: 0,
};

var leaderBoard = [];
var difficulty = 1;

var interval;
function timer (){
  interval = setInterval(myTimer,100);
}

function saveState(){
  storeInLocal('leaderBoard', leaderBoard);
  storeInLocal('gameState', gameState);
  storeInLocal('difficulty', difficulty);
}

function init(){
  if(localStorage.leaderBoard){
    leaderBoard = returnFromLocal('leaderBoard');
  }
  if(localStorage.difficulty){
    difficulty = returnFromLocal('difficulty');
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
