const startButton = document.getElementById("start_button");
const timer = document.getElementById("timer");
const questions = document.getElementById("question");
let timeLeft = 10;
const introduction = document.getElementById("intro");
const choice1 = document.getElementById("choice1");
const questionText = document.getElementById("question-text");


questions.style.display = "none";

const answerDisplay = document.getElementById("display-answer");


var startTimer = function(){
    const timeId = setInterval(function(){
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;      
        if (timeLeft === 0) {
            clearInterval(timeId);
        }
    }, 1000);

}


startButton.addEventListener("click", function(){   
    startTimer();
    startButton.style.display = "none";
    introduction.style.display = "none";
    gameStart();
});


var gameStart = function() {
    questions.style.display = "block";
    questionText.innerHTML = questionsArray[0].question;
    choice1.innerHTML = questionsArray[1].choice1;
  
    // choice2.innerHTML = questionsArray[2].choice2;
    // choice3.innerHTML = questionsArray[3].choice3;
    // choice4.innerHTML = questionsArray[4].choice4;
}

// displaying questions
// var displayQuestions = function() {
//     questions.innerHTML = questionsArray[i].question;
//     choice1.innerHTML = questionsArray[i].choice1;
//     choice2.innerHTML = questionsArray[i].choice2;
//     choice3.innerHTML = questionsArray[i].choice3;
//     choice4.innerHTML = questionsArray[i].choice4;
// };

//check answers
// var checkAnswer = function() {
//     if (answer === questionsArray[i].answer) {
//         timeLeft +=10;
//         answerDisplay.innerHTML = "Correct!";
//         answerDisplay.style.display = "block";
//     } if (answer !== questionsArray[i].answer){
//         timeLeft -=10;
//         answerDisplay.innerHTML = "Wrong!"
//     }
// };



// document.getElementById("start_button").style.display = "none";





//questions object array
let questionsArray = [
    {
        question: "Commonly used data types Do Not Include: ",
        choice1: "1. strings",
        choice2: "2. booleans",
        choice3: "3. alerts",
        choice4: "4. numbers",
        answer: 3,
    },
    {
        question: "The condition in an if / else statement is enclosed with __________.",
        choice1: "1. quotes",
        choice2: "2. curly brackets",
        choice3: "3. parenthesis",
        choice4: "4. square brackets",
        answer: 3,
    },
    {   question: "Arrays in Javascript can be used to store __________.",
        choice1: "1. numbers and string",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
        answer: 4,
    },
    {   question: "String values muct be enclosed within _____ when being assigned to variables.",
        choice1: "1. commas",
        choice2: "2. curly brackets",
        choice3: "3. quotes",
        choice4: "4. parenthesis",
        answer: 2,
    },
    {   question: "A very useful tool use during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. terminal/bash",
        choice3: "3. for loops",
        choice4: "4. console.log",
        answer: 4,
    }
]
