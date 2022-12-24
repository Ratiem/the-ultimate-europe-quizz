//Wait for the DOM to finish loading before running the game

//List of Questions for the Quiz

let questions = [{
    question: "Europe is the most densely populated continent?",
    answer1: "True",
    answer2: "False",
    correct: "True",
},
{
    question: "10% of the world population lives in Europe?",
    answer1: "True",
    answer2: "False",
    correct: "True",
},
{
    question: "Amsterdam, The Netherlands is the largest container port in Europe?",
    answer1: "True",
    answer2: "False",
    correct: "False",
},
{
    question: "Barcelona is the capital city of Spain?",
    answer1: "True",
    answer2: "False",
    correct: "False",
},
{
    question: "Buda Castle is located in Prague?",
    answer1: "True",
    answer2: "False",
    correct: "False",
},
{
    question: "Istanbul, Turkey is the most populous city in Europe?",
    answer1: "True",
    answer2: "False",
    correct: "True",
},
{
    question: "24 countries are part of the European Union?",
    answer1: "True",
    answer2: "False",
    correct: "False",
},
{
    question: "You can find the EU headquarters in Berlin, Germany?",
    answer1: "True",
    answer2: "False",
    correct: "False",
},
{
    question: "Lisbon is the capital of Portugal?",
    answer1: "True",
    answer2: "False",
    correct: "True",
},
{
    question: "If you are flying to Charles de Gaulle, you are flying to Rome, Italy?",
    answer1: "True",
    answer2: "False",
    correct: "False",
},
{
    question: "The busiest airport in Germany is Frankfurt Airport?",
    answer1: "True",
    answer2: "False",
    correct: "True",
},
{
    question: "The Euro was invented in the year 2000?",
    answer1: "True",
    answer2: "False",
    correct: "False",
},
];

//Declare global variables

let startButton = document.getElementById("start-button");
let rulesButton = document.getElementById("rules-button");
let nextButton = document.getElementById("next-button");
let introArea = document.getElementById("intro-area");
let questionArea = document.getElementById("question-area");
let questionTitle = document.getElementById("question-title");
let answerButtons = document.getElementsByClassName("answer-btn");
let score = 0;
let quizScore = document.getElementById("score");
let correctAnswerCounter = 0;
const maxQuestion = 12;
const scorePoints = 1;
let questionCounter = 0;
let finalscore = document.getElementById("final-score");
let finalScoreText = document.getElementById("final-score-text");
let removedQuestions = [];
let answerOne = document.getElementById("answer1");
let answerTwo = document.getElementById("answer2");
let logoImg = document.getElementById("logo-img");
let questionElement = document.getElementById("question");
let endofGameArea = document.getElementById("end-of-game");

//Get the button elements and add the event listeners to them

startButton.addEventListener("click", function () {
    runGame(questionCounter, maxQuestion);
});

rulesButton.addEventListener("click", rules);



nextButton.addEventListener("click", function () {
    nextQuestion(questionCounter, maxQuestion);
});

/*Content displayed when the rules button is clicked*/

function rules() {
    introArea.innerHTML =
        `<h3>Rules</h3>
    <ol id="rules">
        <li>There are 12 questions</li>
        <li>There is one possible answer, click one of the two possible answers</li>
        <li>You will earn one point for each correct answer</li>
        <li>Click next to proceed after each question</li>
        </ol>`;
    rulesButton.classList.add("hide");

}

/**
 * When the Start Quiz button is pressed, the game area appears.
 * The first question is called.
 */

function runGame() {

    console.log("Started");
    startButton.classList.add("hide");
    rulesButton.classList.add("hide");
    introArea.classList.add("hide");
    questionArea.classList.remove("hide");
    nextButton.classList.add("hide");
    logoImg.classList.add("hide");
    displayQuestion(questionCounter);

}
