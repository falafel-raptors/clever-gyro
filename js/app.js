'use strict';
/*global returnFromLocal buildTarget buildCards generateTarget storeInLocal generateScoreboard generateDeck myTimer */
/* eslint-disable no-unused-vars */

// globals
var gameState = {
  hasSeenRules: false,
  rulesView: false,
  victoryView: false,
  targetValue: 1,
  currentValue: 0,
  cardUp: {
    int: 0,
    str: '0',
    operator: '+'
  },
  cardLeft: {
    int: 0,
    str: '0',
    operator: '+'
  },
  cardRight: {
    int: 0,
    str: '0',
    operator: '+'
  },
  cardDown: {
    int: 0,
    str: '0',
    operator: '+'
  },
  minRange: 1,
  maxRange: 10,
  targetMin: 11,
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
  }
  generateScoreboard();
  timer();
}

function hardReset(){
  gameState = {
    hasSeenRules: false,
    rulesView: false,
    victoryView: false,
    targetValue: 1,
    currentValue: 0,
    cardUp: {
      int: 0,
      str: '0',
      operator: '+'
    },
    cardLeft: {
      int: 0,
      str: '0',
      operator: '+'
    },
    cardRight: {
      int: 0,
      str: '0',
      operator: '+'
    },
    cardDown: {
      int: 0,
      str: '0',
      operator: '+'
    },
    minRange: 1,
    maxRange: 10,
    targetMin: 11,
    targetMax: 50,
    timer: 0,
  };
  leaderBoard = [];
  difficulty = 1;
  localStorage.clear();
}

init();
