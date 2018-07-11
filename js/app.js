
     
    'use strict';

    alert ('Answer the following with Y or N')
    var answerOne = prompt('Did I play college basketball?')
    console.log('Did I play College Basketball, correct answer yes.', answerOne)
    if (answerOne.toUpperCase() === 'Y') {
        alert ('Correct, ball is life.');
    } else if (answerOne.toUpperCase() === 'N') {
        alert ('Incorrect, ball is always life.');
    } else {
        alert('Wrong input.');
    }
    var answerTwo = prompt('Do I like to travel?')
    console.log('Do I like to Travel, correct answer yes.', answerTwo)
    if (answerTwo.toUpperCase() === 'Y') {
        alert ('Correct, I love an adventure!');
    } else if (answerTwo.toUpperCase() === 'N'){
        alert ('Incorrect, I am always up for an adventure!');
    } else {
        alert('Wrong input');
    }
    var answerThree = prompt('Do I have a dog?')
    console.log('Do I have a dog, correct answer yes.', answerThree)
    if (answerThree.toUpperCase() === 'Y') {
        alert ('Correct, his name is Chief and I love him.');
    }else if (answerTwo.toUpperCase() === 'N'){
        alert ('Incorrect, I have a Bernese Mountain Dog.');
    } else {
        alert('Wrong input');
    }
    var answerFour = prompt('Do I have a background in Tech?')
    console.log('Do I have a background in tech, correct answer yes.', answerFour)
    if (answerFour.toUpperCase() === 'Y'){
        alert ('Correct, but on the sales and customer service side mainly.');
    } else if (answerFour.toUpperCase() === 'N'){
        alert ('Incorrect, though I am inexperienced, I do have some knowledge of code.');
    } else {
        alert('Wrong input');
    }
    var answerFive = prompt('Am I from Seattle?')
    console.log('Am I From Seattle, correct answer yes.', answerFive)
    if (answerFive.toUpperCase() === 'Y'){
        alert ('Incorrect, I am from Spokane');
    } else if (answerFive.toUpperCase() === 'N'){
        alert ('Correct, I am from Spokane');
    } else {
        alert('Wrong input');
}

