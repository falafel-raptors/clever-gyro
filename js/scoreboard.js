'use strict';
/*global gameState appendChildtoParent leaderBoard */
/* eslint-disable no-unused-vars */

var tbody = document.getElementById('leaderBody');

function generateScoreboard(){
  tbody.innerHTML = '';
  let time = gameState.timer / 10;
  time += 0.1;
  // removes initial 0.1 push when page first loads
  if(gameState.targetValue !== 0){
    leaderBoard.push(time.toFixed(1));
  }
  let sortedScoreboard = leaderBoard.sort(function(a,b){return a-b});
  for(let i=0; i<sortedScoreboard.length; i++){
    let trEl = document.createElement('tr');
    trEl.setAttribute('id', ('row'+i));
    let tdEL = document.createElement('td');
    tdEL.textContent = sortedScoreboard[i] + ' seconds';
    appendChildtoParent(trEl, tdEL);
    appendChildtoParent(tbody, trEl);
  }
}
