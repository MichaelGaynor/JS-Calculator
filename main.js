//Grabbing Elements
var numOne = document.querySelector('#num_one');
var numTwo = document.querySelector('#num_two');
var calcBtn = document.querySelector('#calculateBtn')
var answer = document.querySelector('#answer');

//Declaring Variable
var solution;


//Find Answer
var mathIt = function(){
return (Number(numOne.value) + Number(numTwo.value)) 
};

//Display Answer
var showMe = function(){
  answer.textContent = mathIt();
  // answer.textContent = solution;
};

//Button Click
calcBtn.addEventListener('click', showMe)