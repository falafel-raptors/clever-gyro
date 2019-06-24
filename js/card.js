'use strict';

//call ran num by range
//assign operator +/-
//set numbers
//get cards
//set cards

//TODO: write an array of up down left right and iterate instead of all this code

function buildCard (){
  //clear card
  clearHTML('upButton');
  clearHTML('downButton');
  clearHTML('leftButton');
  clearHTML('rightButton');


  //build the card to display
  htmlTextHack('p', gameState.cardUp.str, 'upButton');
  htmlTextHack('p', gameState.cardDown.str, 'downButton');
  htmlTextHack('p', gameState.cardLeft.str, 'leftButton');
  htmlTextHack('p', gameState.cardRight.str, 'rightButton');
  
}


function generateDeck (){
  var up = randomInclusiveNumGen(1,10);
  var down = randomInclusiveNumGen(1,10);
  //TODO: drop the negative number later when we write modules
  var left = randomInclusiveNumGen(1,10);
  var right = randomInclusiveNumGen(1,10);

  var cardUp = {
    int: up,
    str: String(up),
    operator: -1
  };
  var cardDown = {
    int: down,
    str: String(down),
    operator: -1
  };
  var cardRight = {
    int: right,
    str: String(right),
    operator: 1
  };
  var cardLeft = {
    int: left,
    str: String(left),
    operator: 1
  };

  //save into gameState
  gameState.cardUp = cardUp;
  gameState.cardDown = cardDown;
  gameState.cardLeft = cardLeft;
  gameState.cardRight = cardRight;
  console.log(gameState);

  buildCard();

  //save to local storage
  storeInLocal ('gameState', gameState);

}


