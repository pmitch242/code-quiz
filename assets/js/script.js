// =====================================Varibles==========================================
var body = document.body;
var main = document.querySelector(".main");
var timerElement = document.querySelector(".timer");
var questionDiv = document.querySelector(".question-Div");
var optionA = document.querySelector(".option-A");
var optionB = document.querySelector(".option-B");
var optionC = document.querySelector(".option-C");
var optionD = document.querySelector(".option-D");
var options = document.querySelector(".options");
var timer = 75;
var questionsAnswered = 5;
var highscorePulled = [];

// Elements created
var mainPageh1 = document.createElement("h1");
var mainPagep = document.createElement("p");
var mainPageStartBtn = document.createElement("button");
var titleH3 = document.createElement("h3");



// Set Elements
mainPageh1.textContent = "Coding Quiz Challenge";
mainPagep.textContent = "EXPLAIN RULES HERE... PRESS START TO BEGIN!!!";
mainPageStartBtn.innerHTML = "START";

// =====================================Functions==========================================

// reset page
function clearPage() {
    main.textContent = " ";
    body.appendChild(main);
    console.log("Body was cleared!");
}

//builds scorecard 
function scoreStart() {
    highscorePulled = JSON.parse(localStorage.getItem("scores") || "[]");
}

function scoreFinal(){
    highscorePulled = JSON.parse(localStorage.getItem("scores") || "[]");
    highscorePulled.push(timer);

    localStorage.setItem("scores", JSON.stringify(highscorePulled));
    scoreStart();
}

//Launch Highscore Page
function replacePage() {
    location.replace("highscores.html")
}

// start timer
function startTimer() {
    var timerInterval = setInterval(function () {
        timer--;
        timerElement.textContent = timer;

        if (timer <= 0) {
            scoreStart();
            replacePage();
            clearInterval();
        }
    }, 1000);
}

// Pick random number for questions array
function pickRandom() {

    var ran = Math.floor(Math.random() * questions.length);
    return ran;
}

// var currentQuestion = 0;
// start quiz
function generateQuestion() {
    clearPage();
    var ranQuestions = questions[pickRandom()];
    questionDiv.textContent = ranQuestions.title;

    console.log(ranQuestions.title);
    var choicesPull = ranQuestions.choices;
    var answerPull = ranQuestions.answer;

    // ==============================================================================================================
    // clear the div so any previous questions dont exist
    questionDiv.textContent = "";
    optionA.textContent = "";
    optionB.textContent = "";
    optionC.textContent = "";
    optionD.textContent = "";

    //add the title of the question into the h1
    questionDiv.textContent = ranQuestions.title;
    optionA.textContent = choicesPull[0];
    optionB.textContent = choicesPull[1];
    optionC.textContent = choicesPull[2];
    optionD.textContent = choicesPull[3];

    // add the h1 to the questionDiv
    main.appendChild(questionDiv);
    main.appendChild(optionA);
    main.appendChild(optionB);
    main.appendChild(optionC);
    main.appendChild(optionD);


    optionA.onclick = "";
    optionA.onclick = function () {
        console.log("You selected: " + optionA.textContent);
        console.log("Answer is " + answerPull);

        if (options.textContent === answerPull) {
            console.log("correct");
            var answerDiv = document.createElement("div");
            answerDiv.textContent = ("Correct!")
            main.appendChild(answerDiv);
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            generateQuestion();

        }
        else {
            console.log("wrong sir");
            var answerDiv = document.createElement("div");
            answerDiv.textContent = ("Wrong!")
            main.appendChild(answerDiv);
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            timer = timer - 15;
            generateQuestion();
        }
    }

    optionB.onclick = ""
    optionB.onclick = function () {
        console.log("You selected: " + optionB.textContent);
        console.log("Answer is " + answerPull);

        if (optionB.textContent === answerPull) {
            console.log("correct");
            var answerDiv = document.createElement("div");
            answerDiv.textContent = ("Correct!")
            main.appendChild(answerDiv);
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            generateQuestion();

        }
        else {
            console.log("wrong sir");
            var answerDiv = document.createElement("div");
            answerDiv.textContent = ("Wrong!")
            main.appendChild(answerDiv);
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            generateQuestion();
            timer = timer - 15;
        }
    }

    optionC.onclick = ""
    optionC.onclick = function () {
        console.log("You selected: " + optionC.textContent);
        console.log("Answer is " + answerPull);

        if (optionC.textContent === answerPull) {
            console.log("correct");
            var answerDiv = document.createElement("div");
            answerDiv.textContent = ("Correct!")
            main.appendChild(answerDiv);
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            generateQuestion();
        }
        else {
            console.log("wrong sir");
            var answerDiv = document.createElement("div");
            answerDiv.textContent = ("Wrong!")
            main.appendChild(answerDiv);
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            generateQuestion();
            timer = timer - 15;
        }
    }

    optionD.onclick = ""
    optionD.onclick = function () {
        console.log("You selected: " + optionD.textContent);
        console.log("Answer is " + answerPull);

        if (optionD.textContent === answerPull) {
            console.log("correct");
            var answerDiv = document.createElement("div");
            answerDiv.textContent = ("Correct!")
            main.appendChild(answerDiv);
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            generateQuestion();
        }
        else {
            console.log("wrong sir");
            var answerDiv = document.createElement("div");
            answerDiv.textContent = ("Wrong!")
            main.appendChild(answerDiv);
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            generateQuestion();
            timer = timer - 15;
        }
    }

    if (questionsAnswered === 0) {
        scoreFinal();
        replacePage();
    }
}


// Main page
function startingPage() {
    clearPage();
    main.appendChild(mainPageh1);
    main.appendChild(mainPagep);
    main.appendChild(mainPageStartBtn);

    // start quiz
    mainPageStartBtn.addEventListener("click", function () {
        clearPage();
        startTimer();
        generateQuestion();
    });
}


// Execute Main Function

startingPage();
