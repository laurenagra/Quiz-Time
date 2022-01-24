// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

//Start button maybe a quiz start function 
//Array containing objects 
//Objects must determine which answers are correct
//Interval- check through code from class for syntax
//if 60 seconds take 5 seconds off for a wrong answer
var startQuiz = document.getElementById("start-btn");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerEl = document.querySelector(".timer-count");


//Identify the questions I want to ask
var questions = [
    {
        text: 'Which of the following type of variable takes precedence over other if names are same?',
        choices: ['A - global variable',

        'B - local variable',
        
        'C - Both of the above.',
        
        'D - None of the above.'],
        correct: 'B - local variable'
    },
    {
        text: 'All user-defined objects and built-in objects are descendants of an object called Object?',
        choices: [ 
            'A - true',
            'B - false'],
        correct: 'A - true'
    }, 
    { 
        text: 'Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browsers locale settings?',
        choices: [ 'A - toExponential()',

            'B - toFixed()',

            'C - toLocaleString()',

            'D - toString()'
            ],
            correct: 'C - toLocaleString()'
    },
    {
        text: 'Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?',
        choices: ['A - localeCompare()',
            'B - search()',
        
            'C - substr()',
        
            'D - concat()',
         ],
         correct: 'A - localeCompare()'
    },
    {
        text: 'Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?',
        choices: [ 'A - indexOf()',

            'B - join()',
            
            'C - lastIndexOf()',
            
            'D - map()'
        ],
        correct: 'C - lastIndexOf()'
    }
]



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