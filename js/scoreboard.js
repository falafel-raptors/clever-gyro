'use strict';
/*global appendChildtoParent leaderBoard */
/* eslint-disable no-unused-vars */

var tbody = document.getElementById('leaderBody');

function generateScoreboard(){
  tbody.innerHTML = '';
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
