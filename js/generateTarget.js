'use strict';

//generate our target number, out of our range
function generateTarget() {

  // var target = randomInclusiveNumGen(gameState.minRange, gameState.MaxRange);
  var target = randomInclusiveNumGen(1, 10);
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