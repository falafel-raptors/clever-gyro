'use strict';
/*global gameState appendChildtoParent leaderBoard */
var tbody = document.getElementById('leaderBody');

function generateScoreboard(){
  // var scoreboardArray = [3.2, 10.4, 9.5, 1.1];
  let sortedScoreboard = leaderBoard.sort(function(a,b){return a-b});
  console.log(sortedScoreboard);
  for(let i=0; i<sortedScoreboard.length; i++){
    let trEl = document.createElement('tr');
    trEl.setAttribute('id', ('row'+i));
    console.log(trEl);
    let tdEL = document.createElement('td');
    tdEL.textContent = sortedScoreboard[i];
    appendChildtoParent(trEl, tdEL);
    appendChildtoParent(tbody, trEl);
  }
}

// generateScoreboard();

