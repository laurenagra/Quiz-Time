// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

//Objects must determine which answers are correct
//Interval- check through code from class for syntax
//if 60 seconds take 5 seconds off for a wrong answer
var startQuiz = document.getElementById("start-btn");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerEl = document.querySelector(".timer-count");
var questionEl = document.querySelector(".quest");

var chosenQ = " ";
var numAns = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false; 
var timer;
var timerCount = 75;

//Array used to create question and answers on screen?
var ansToQ = [];
var ansChoice = [];

//Array of questions I want asked as well as the correct answers
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

function init() {
    getWins();
    getLosses();
}

function quiz() {
    console.log("Boop");
    isWin = false;
    timerCount = 75;
    startQuiz.disabled = true;
    renderQ();
    startTimer();
}

//correct function called when the "win condition" is met
function correct(){
    wordBlank.textContent = "That's correct!"
    winCounter++
    quiz.disabled = false;
    setWins()
}

//the incorrect function is called when timer reaches 0
function incorrect() {
    wordBlank.textContent = "Incorrect!"
    loseCounter++
    startQuiz.disabled = false;
    setLosses()
}

//Timer function
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timerEl.textCount = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0){
                clearInterval(timer);
                correct();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            incorrect();
        }
    }, 1000);
}

//Create the questions on the screen!
function renderQ(){
    //Randomly pick a question from the array
    chosenQ = questions[Math.floor(Math.random() * questions.length)];
    ansToQ = chosenQ.split('');
    numAns = ansToQ.length;
    ansChoice = []
    for (var i = 0; i < numAns; i++){
        ansChoice.push("_");
    }
    //Convert questionEl array into a string to render it on screen
    questionEl.textContent = ansChoice.join("");
}

//Update the correct count on screen and sets count to client storage
function setCorrect(){
    correct.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

//Update the incorrect count on tscreen and set count to client storage
function setInccorect(){
    incorrect.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}

//Check local storage for previous wins and losses
function getWins(){
    var storedWins = localStorage.getItem("winCount");
    if (storedWins === null){
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }
    //Render count to screen
    correct.textContent = winCounter;
}

function getLosses(){
    var storedLosses = localStorage.getItem("loseCount")
    if (storedLosses === null){
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    incorrect.textContent = loseCounter;
}

function checkWin(){
    if (chosenQ === ansChoice.join("")){
        isWin = true;
    }
}


//Adds event listener 
startQuiz.addEventListener("click", quiz);


// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score