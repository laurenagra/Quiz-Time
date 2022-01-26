var questions = [
  {
    text: "Which of the following type of variable takes precedence over other if names are same?",
    choices: [
      "A - global variable",

      "B - local variable",

      "C - Both of the above.",

      "D - None of the above.",
    ],
    answer: "B - local variable",
  },
  {
    text: "All user-defined objects and built-in objects are descendants of an object called Object?",
    choices: ["A - true", "B - false"],
    answer: "A - true",
  },
  {
    text: "Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browsers locale settings?",
    choices: [
      "A - toExponential()",

      "B - toFixed()",

      "C - toLocaleString()",

      "D - toString()",
    ],
    answer: "C - toLocaleString()",
  },
  {
    text: "Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?",
    choices: [
      "A - localeCompare()",
      "B - search()",

      "C - substr()",

      "D - concat()",
    ],
    answer: "A - localeCompare()",
  },
  {
    text: "Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
    choices: ["A - indexOf()", "B - join()", "C - lastIndexOf()", "D - map()"],
    answer: "C - lastIndexOf()",
  },
];

var isWin = false;
var startQuiz = document.getElementById("start-btn");
//Event listener
startQuiz.addEventListener("click", quiz);
//Calls quiz function

//correct function called when the "win condition" is met
function correct() {
  wordBlank.textContent = "That's correct!";
  winCounter++;
  quiz.disabled = false;
  //setWins();
}

//the incorrect function is called when timer reaches 0
function incorrect() {
  wordBlank.textContent = "Incorrect!";
  loseCounter++;
  startQuiz.disabled = false;
  //setLosses();
}

//Update the correct count on screen and sets count to client storage
function setCorrect() {
  var correct = document.querySelector(".win");
  var currentCorrect = parseInt(correct.textContent);
  correct.textContent = currentCorrect + 1;
  localStorage.setItem("win", currentCorrect + 1);
}

//Update the incorrect count on tscreen and set count to client storage
function setInccorect() {
  var incorrect = document.querySelector(".lose");
  var currentIncorrect = parseInt(incorrect.textContent);
  incorrect.textContent = currentIncorrect + 1;
  localStorage.setItem("lose", currentIncorrect + 1);
}

function quiz() {
  console.log("Boop");
  isWin = false;
  timerCount = 50;
  startQuiz.disabled = true;
  renderQ();
  startTimer();
}

var timer = document.querySelector(".timer-count");
var timerCount = 50;
//Timer function
function startTimer() {
  var timerInterval = setInterval(function () {
    timerCount--;
    timer.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        //correct();
      }
    }
    if (timerCount === 0) {
      clearInterval(timerInterval);
      //incorrect();
    }
    //console.log(timerCount);
  }, 1000);
}

var chosenQ = " ";
var numAns = 0;
var ansToQ = [];
var ansChoice = [];
var questionIndex;

//Sets timer count, once you press start button it disables the start button, renders the questions, and then starts timer
function renderQ() {
  //Randomly pick a question from the array
  chosenQ = questions[Math.floor(Math.random() * questions.length)];
  questionIndex = chosenQ[i];
  console.log(chosenQ.choices);
  var myQuestion = document.getElementById("card-questions");
  console.log(myQuestion);
  var choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";
  myQuestion.textContent = chosenQ.text;
  chosenQ.choices.forEach((element) => {
    var listItem = document.createElement("button");
    listItem.setAttribute("class", "btn-color");
    listItem.innerHTML = element;
    choicesEl.appendChild(listItem);
    listItem.addEventListener("click", function (e) {
      //renderQuestion() increments question index before event listener fires
      var currentQuestion = chosenQ;
      correct = currentQuestion.answer;
      userChoice = e.target.textContent;
      checkAnswer(userChoice, correct);
      console.log(correct);
    });
  });
  numAns = ansToQ.length;
  ansChoice = [];
  for (var i = 0; i < numAns; i++) {
    ansChoice.push("_");
  }
}

//   for (var i = 0; i < listItem.length; i++) {
//     // listItem[i].addEventListener("click", function (e){
//     // //renderQuestion() increments question index before event listener fires
//     // var currentQuestion = questions[choices];
//     // correct = currentQuestion.choices[currentQuestion.answer];
//     // userChoice = e.target.textContent
//     // checkAnswer (userChoice, answer);
//     // });
//     }

//Check answer function
function checkAnswer(userChoice, answer) {
  console.log(userChoice);
  console.log(answer);
  var rightOrWrong = document.getElementById("card-questions");
  if (userChoice === answer) {
    rightOrWrong.textContent = "Correct! :D";
    setCorrect();
  } else {
    rightOrWrong.textContent = "Incorrect, please try again";
    setInccorect();
    if (timerCount > 0) {
      timerCount = Math.floor(timerCount / 1.25);
    }
  }
  var answer = false;
  for (var i = 0; i < numAns; i++) {
    if (chosenQ[i] === answer) answer = true;
  }
  renderQ();
}
