'use strict';

//math logic: checks operator for negative, and multiples if so.    
function countUpdater(gameStateItem){
  var countUpdate = gameStateItem.operator === '-' ? gameStateItem.int * -1 : gameStateItem.int;
  return countUpdate;
}