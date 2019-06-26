'use strict';
/*global gameState randomInclusiveNumGen */
/* eslint-disable no-unused-vars */

//use the array index to return our operator as a string
function generateOperator() {
  //array of all operators in the game
  var arrayOfOperators =  ['+', '-', '*', '/', '%'];
  //choose a random index value
  var randomIndex = randomInclusiveNumGen(0, 4);
  //make modulo less likely, and pluses and negatives more.
  if (randomIndex === 4){
    var makeModuloLessCommon = randomInclusiveNumGen(0, 2);
    if (makeModuloLessCommon === 0 || makeModuloLessCommon === 1){
      randomIndex = randomInclusiveNumGen(0, 1);
    }
  }
  //return operator as string
  return arrayOfOperators[randomIndex];
}
//functions to perform math operation, based on the string operator value. returns value.
function doMath(gameStateItem){
  var calculated = 0;
  var cardInt =  gameStateItem.int;
  var cardOp = gameStateItem.operator;
  var current = gameState.currentValue;

  if (cardOp === '+'){
    calculated = current + cardInt;
  }
  if (cardOp === '-'){
    calculated = current - cardInt;
  }
  if (cardOp === '*'){
    calculated = current * cardInt;
  }
  if (cardOp === '/'){
    calculated = Math.round( current / cardInt );
  }
  if (cardOp === '%'){
    calculated = current % cardInt;
  }

  return calculated;
}