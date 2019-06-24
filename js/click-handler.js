'use strict';
/*global randomInclusiveNumGen */
var currentVal = 0;
var min = 1;
var max = 10;
var targetVal = 20;

document.addEventListener('DOMContentLoaded', function(e) { 
  e.preventDefault();

  var up = document.getElementById('upButton').innerHTML;
  var left = document.getElementById('leftButton').innerHTML;
  var right = document.getElementById('rightButton').innerHTML;
  var down = document.getElementById('downButton').innerHTML;




  var handleClick = function(button) {
    if(button.target.id === 'upButton' || button.target.id === 'leftButton' || button.target.id === 'rightButton' || button.target.id === 'downButton'){
      currentVal += parseInt(button.target.innerHTML);
      console.log(currentVal);
      var randNum = randomInclusiveNumGen(min, max);
      button.target.innerHTML = randNum;
    }
  };



  document.addEventListener('click', handleClick);






});

