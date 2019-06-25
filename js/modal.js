'use strict';
/*global gameState clearHTML htmlTextHack storeInLocal */

var rulesButton = document.getElementById('rules');
rulesButton.addEventListener('click',toggleRule);

function toggleRule(e){
  e.preventDefault();

  //flip our toggle to display and hide the rules information
  if(gameState.rulesView === false){
    writeRules('modal');
    gameState.rulesView = true;
  }else if(gameState.rulesView === true){
    clearHTML('modal');
    gameState.rulesView = false;
  }
}

function writeRules (id) {

  //clear first
  clearHTML(id);

  //these are the rules
  var rules = 'Welcome to the Game!  You have a target number you must reach.  Choose one of four cards, and get to your target.  May the odds be ever in your favor.';

  //write
  htmlTextHack('p', rules, id);
  //flip hasSeenRules
  gameState.hasSeenRules = true;

  //save state
  storeInLocal ('gameState', gameState);

}
