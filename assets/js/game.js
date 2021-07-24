const startButton = document.getElementById("start_button");
const timer = document.getElementById("timer");
const questionss = document.getElementById("question");
let timeLeft = 10;


var startTimer = function(){
    const timeId = setInterval(function(){
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;      
        if (timeLeft === 0) {
            clearInterval(timeId);
        }
    }, 1000);

}

document.getElementById("start_button").style.display = "none";

var startGame = function() {
  
}



startButton.addEventListener("click", function(){   
    startTimer();
});


    



//questions object array
let questions = [
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
