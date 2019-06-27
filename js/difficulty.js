'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//changes the range of the new cards to limit operators
function easy () {
  //limit to plus and minus
  difficulty = 'easy';
  gameState.targetMin = 11;
  gameState.targetMax = 50;
  resetGame();
}

function medium () {
  //limit to * and / and + and -
  difficulty = 'medium';
  gameState.targetMin = 51;
  gameState.targetMax = 100;
  resetGame();
}

function hard () {
  //no limit on inlcuding operators (%)
  difficulty = 'hard';
  gameState.targetMin = 100;
  gameState.targetMax = 999;
  resetGame();
}

//TODO: stub: ludicrous mode.  add the ability to limit vision of cards.
function ludicrous () {
  console.log('COMPLIANCE: ludicrous mode engaged.');
  //no limit on inlcuding operators (%)
  difficulty = 'ludicrous';
  gameState.targetMin = 1000;
  gameState.targetMax = 2000;
  resetGame();
}
