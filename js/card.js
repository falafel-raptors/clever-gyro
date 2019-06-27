'use strict';
/*global gameState clearHTML htmlTextHack randomInclusiveNumGen storeInLocal generateOperator handleClick handleKeyDown */
/* eslint-disable no-unused-vars */

//iterate over our cards, including current value
var cardArray = ['upButton', 'downButton', 'leftButton', 'rightButton'];

//To change individual card values
function buildNewCard(cardButton) {
  //clear the card text
  clearHTML(cardButton); // ex: 'upButton'
  //set background to clear (if we were in ludicrious)
  document.getElementById(cardButton).style.backgroundColor = '';
  //create random number
  var ranNum = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  //generate a random operator
  var operatorChosen = generateOperator();

  if(cardButton === 'upButton'){
    gameState.cardUp = {int: ranNum, str: String(ranNum), operator: operatorChosen };
    htmlTextHack('p', gameState.cardUp.operator+gameState.cardUp.str, cardButton);
    //check for difficulty level: ludicrious
    if (difficulty === 'ludicrous') {
      //wait
      setTimeout(function(){
        //write out inner html to blank
        clearHTML(cardButton);
        //change background to black
        document.getElementById('upButton').style.backgroundColor = 'rgb(92, 112, 129)';
        // eslint-disable-next-line indent
        }, 2000 //seconds until it dissappears
      );//end settimeout
    }//end ludicrious if check
  }
  if(cardButton === 'downButton'){
    gameState.cardDown = {int: ranNum, str: String(ranNum), operator: operatorChosen};
    htmlTextHack('p', gameState.cardDown.operator+gameState.cardDown.str, cardButton);
    //check for difficulty level: ludicrious
    if (difficulty === 'ludicrous') {
      //wait
      setTimeout(function(){
        //write out inner html to blank
        clearHTML(cardButton);
        //change background to black
        document.getElementById('downButton').style.backgroundColor = 'rgb(92, 112, 129)';
        // eslint-disable-next-line indent
        }, 2000 //seconds until it dissappears
      );//end settimeout
    }//end ludicrious if check
  }
  if(cardButton === 'leftButton'){
    gameState.cardLeft = {int: ranNum, str: String(ranNum), operator: operatorChosen};
    htmlTextHack('p', gameState.cardLeft.operator+gameState.cardLeft.str, cardButton);
    //check for difficulty level: ludicrious
    if (difficulty === 'ludicrous') {
      //wait
      setTimeout(function(){
        //write out inner html to blank
        clearHTML(cardButton);
        //change background to black
        document.getElementById('leftButton').style.backgroundColor = 'rgb(92, 112, 129)';
        // eslint-disable-next-line indent
        }, 2000 //seconds until it dissappears
      );//end settimeout
    }//end ludicrious if check
  }
  if(cardButton === 'rightButton'){
    gameState.cardRight = {int: ranNum, str: String(ranNum), operator: operatorChosen};
    htmlTextHack('p', gameState.cardRight.operator+gameState.cardRight.str, cardButton);
    //check for difficulty level: ludicrious
    if (difficulty === 'ludicrous') {
      //wait
      setTimeout(function(){
        //write out inner html to blank
        clearHTML(cardButton);
        //change background to black
        document.getElementById('rightButton').style.backgroundColor = 'rgb(92, 112, 129)';
        // eslint-disable-next-line indent
        }, 2000 //seconds until it dissappears
      );//end settimeout
    }//end ludicrious if check
  }
  clearHTML('currentValue');
  htmlTextHack('p', String(gameState.currentValue), 'currentValue');
  storeInLocal('gameState', gameState);
}

//displays HTML to screen, and also clears
function buildCards(){
  //create array to iterate over
  var deckObjects = [gameState.cardUp, gameState.cardDown,gameState.cardLeft,gameState.cardRight];

  //clear and build cards
  for(let i = 0; i<cardArray.length; i++){
    clearHTML(cardArray[i]);
    htmlTextHack('p',deckObjects[i].operator+deckObjects[i].str, cardArray[i]);
  }
  //clear and build current value div
  clearHTML('currentValue');
  htmlTextHack('p', String(gameState.currentValue), 'currentValue');

  if(gameState.targetValue === gameState.currentValue){
    document.getElementById('target-circle').style.backgroundColor = 'rgb(145, 235, 140)';
  }
}

//first generator that builds all four cards to the screen
function generateDeck(){
  var up = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  var down = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  var left = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);
  var right = randomInclusiveNumGen(gameState.minRange, gameState.maxRange);

  //randomly generate our operators for init cards
  var cardUp = {
    int: up,
    str: String(up),
    operator: generateOperator()
  };
  var cardDown = {
    int: down,
    str: String(down),
    operator: generateOperator()
  };
  var cardRight = {
    int: right,
    str: String(right),
    operator: generateOperator()
  };
  var cardLeft = {
    int: left,
    str: String(left),
    operator: generateOperator()
  };

  //save into gameState
  gameState.cardUp = cardUp;
  gameState.cardDown = cardDown;
  gameState.cardLeft = cardLeft;
  gameState.cardRight = cardRight;
  // console.log(gameState);

  buildCards();
  var cards = document.getElementById('cards');
  cards.addEventListener('click', handleClick);
  document.addEventListener('keydown', handleKeyDown, false);

  //save to local storage
  storeInLocal('gameState', gameState);
}
