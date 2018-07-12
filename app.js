'use strict';

alert ('Answer the following with Y or N');
var score = 0;
var answerOne = prompt('Did I play college basketball?');
console.log('Did I play College Basketball, correct answer yes.', answerOne);
if (answerOne.toUpperCase() === 'Y') {
  alert('Correct, ball is life.');
  score++;
  console.log('Number of questions correct= ', score);
} else if (answerOne.toUpperCase() === 'N') {
  alert ('Incorrect, ball is always life.');
} else {
  alert('Wrong input.');
}      
var answerTwo = prompt('Do I like to travel?');
console.log('Do I like to Travel, correct answer yes.', answerTwo);
if (answerTwo.toUpperCase() === 'Y') {
  alert ('Correct, I love an adventure!');
  score++; 
  console.log('Number of questions correct= ', score);
} else if (answerTwo.toUpperCase() === 'N'){
  alert ('Incorrect, I am always up for an adventure!');
} else {
  alert('Wrong input');
}       
var answerThree = prompt('Do I have a dog?');
console.log('Do I have a dog, correct answer yes.', answerThree);
if (answerThree.toUpperCase() === 'Y') {
  alert ('Correct, his name is Chief and I love him.');
  score++;
  console.log('Number of questions correct=', score);
}else if (answerThree.toUpperCase() === 'N'){
  alert ('Incorrect, I have a Bernese Mountain Dog.');
} else {
  alert('Wrong input');
}    
var answerFour = prompt('Do I have a background in Tech?');
console.log('Do I have a background in tech, correct answer yes.', answerFour);
if (answerFour.toUpperCase() === 'Y'){
  alert ('Correct, but on the sales and customer service side mainly.');
  score++;
  console.log('Number of questions correct= ', score);
} else if (answerFour.toUpperCase() === 'N'){
  alert ('Incorrect, though I am inexperienced, I do have some knowledge of code.');
} else {
  alert('Wrong input');
}    
var answerFive = prompt('Am I from Seattle?');
console.log('Am I From Seattle, correct answer yes.', answerFive);
if (answerFive.toUpperCase() === 'Y'){
  alert ('Incorrect, I am from Spokane');
} else if (answerFive.toUpperCase() === 'N'){
  alert ('Correct, I am from Spokane');
  score++;
  console.log('Number of questions correct= ', score);
} else {
  alert('Wrong input');
}      

console.log('How many bones have I broken?', answerSix);
var bones = 0;
while (bones < 3) {
  var answerSix = Number(prompt('How many bones have I broken?'));
  if (answerSix > 3){
    alert('That answer is too high!'); 
    bones++;
  } else if (answerSix < 3){
    alert('That answer is too low!');
    bones++;
  } if (answerSix === 3) {
    alert('That is the correct answer');
    score++; 
    break;
  } } 

var beers = 0;
while (beers < 7) {
  var answerSeven = prompt('What is one of my two favorite beers?');
  console.log('Is this hitting',answerSeven);
  if ((answerSeven === 'Lagunitas Pale Ale')||(answerSeven ==='Irish Death')){
    alert('That is one of my favorite beers!');
    score++;
    break;
  } else {
    console.log("is it hitting"); 
    alert('That is not one of my favorite beers!');
    beers++;
  } }

if (score > 4) {
  alert('You know me pretty well! You got ' + score + ' answers correct');
} else if (score < 4){
  alert('You dont know me too well! You got ' + score + ' answers correct');
}