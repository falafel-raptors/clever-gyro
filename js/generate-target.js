'use strict';
/*global gameState randomInclusiveNumGen storeInLocal clearHTML htmlTextHack */
/* eslint-disable no-unused-vars */

//generate our target number, out of our range
function generateTarget() {

  // var target = randomInclusiveNumGen(gameState.minRange, gameState.MaxRange);
  var target = randomInclusiveNumGen(gameState.targetMin, gameState.targetMax);
  buildTarget(target);
}

function buildTarget(target) {
  //update global value
  gameState.targetValue = target;
  //save into local storage
  storeInLocal ('gameState', gameState);
  //clear HTML in case
  clearHTML('target-value');
  //display to HTML
  htmlTextHack('h1', String(target), 'target-value');
}
