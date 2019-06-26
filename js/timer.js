'use strict';

var time =0;
function myTimer(){
  var timeEl = document.getElementById('timer');
  gameState.timer++;
  timeEl.textContent = (gameState.timer/10).toFixed(1);
  if (gameState.currentValue === gameState.targetValue){
    clearInterval(interval);
  }
}

