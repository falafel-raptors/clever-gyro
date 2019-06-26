'use strict';
/*global gameState interval*/
/* eslint-disable no-unused-vars */

function myTimer(){
  var timeEl = document.getElementById('timer');
  gameState.timer++;
  timeEl.textContent = (gameState.timer/10).toFixed(1);
  if (gameState.currentValue === gameState.targetValue){
    clearInterval(interval);
  }
}

