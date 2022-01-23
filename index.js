// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

//Start button maybe a quiz start function 
//Array containing objects 
//Objects must determine which answers are correct
//Interval- check through code from class for syntax
//if 60 seconds take 5 seconds off for a wrong answer
var startQuiz = document.getElementById("start-btn");

function quiz() {
    console.log("Boop");
}

startQuiz.addEventListener("click", quiz)

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score