// =====================================Varibles==========================================
var body = document.body;
var main = document.querySelector(".main");
var timerElement = document.querySelector(".timer");
var questionDiv = document.querySelector(".question-Div");
var optionA = document.querySelector(".option-A");
var optionB = document.querySelector(".option-B");
var optionC = document.querySelector(".option-C");
var optionD = document.querySelector(".option-D");
var timer = 75;
var questionsAnswered = 5;
var highscorePulled = [];
var userInitials = document.querySelector(".userInitials");
var submitButton = document.querySelector(".submitButton");
var initialsPulled = [];

// Elements created
var mainPageLi = document.createElement("li");
var mainPageInstru = document.createElement("li");
var mainPageStartBtn = document.createElement("button");
var titleH3 = document.createElement("h3");
var highScoreh3 = document.createElement("h3");
var scoreTold = document.createElement("h3");



// Set Elements
mainPageLi.textContent = "Coding Quiz Challenge";
mainPageLi.setAttribute("class", "list-group-item bg-info text-center text-white");
mainPageInstru.textContent = "Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty of 15 seconds.";
mainPageInstru.setAttribute("class", "list-group-item text-center");
mainPageStartBtn.innerHTML = "START";
highScoreh3.textContent = "All Done!!!";

//set Attributes
body.setAttribute("style", "max-width: 830px; margin: auto;");
main.setAttribute("style", "max-width: 630px");
mainPageStartBtn.setAttribute("style", "margin-top: 20px");
mainPageStartBtn.setAttribute("class", "btn btn-info");
highScoreh3.setAttribute("class", "list-group-item bg-info text-center text-white");
submitButton.setAttribute("style", "margin-top: 20px");
submitButton.setAttribute("class", "btn btn-info");
mainPageStartBtn.setAttribute("class", "btn btn-info");

// =====================================Functions==========================================

// reset page
function clearPage() {
    main.textContent = " ";
    body.appendChild(main);
    console.log("Body was cleared!");
}
//Score
function scoreStart() {
    highscorePulled = JSON.parse(localStorage.getItem("scores") || "[]");
}

function scoreFinal() {
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

        if (timer <= 0 && questionsAnswered != 0) {
            clearInterval(timerInterval);
            scoreStart();
            replacePage();
            // initials();        
        }
        else if (timer != 0 && questionsAnswered === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Pick random number for questions array
function pickRandom() {

    var ran = Math.floor(Math.random() * questions.length);
    return ran;
}

function initials() {
    clearPage();
    // clearInterval(timerInterval);
    main.appendChild(highScoreh3);
    timer = timer + 1;
    timerElement.textContent = "";
    main.appendChild(userInitials);
    main.appendChild(submitButton);

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("I was clicked");

        var initials = document.querySelector(".userInitials").value;

        if (initials === "") {
            displayMessage("error", "Initials cannot be blank");
        }
        initialsPulled = JSON.parse(localStorage.getItem("initials") || "[]");
        initialsPulled.push(initials);
        localStorage.setItem("initials", JSON.stringify(initialsPulled));
        replacePage();
    });
}

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

    //add the title of the question into the the options
    questionDiv.textContent = ranQuestions.title;
    optionA.textContent = choicesPull[0];
    optionB.textContent = choicesPull[1];
    optionC.textContent = choicesPull[2];
    optionD.textContent = choicesPull[3];

    // Append question and options
    main.appendChild(questionDiv);
    main.appendChild(optionA);
    main.appendChild(optionB);
    main.appendChild(optionC);
    main.appendChild(optionD);


    optionA.onclick = "";
    optionA.onclick = function () {
        console.log("You selected: " + optionA.textContent);
        console.log("Answer is " + answerPull);

        if (optionA.textContent === answerPull) {
            console.log("correct");
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            optionA.setAttribute("class", "btn btn-success btn-lg btn-block text-left");
            setInterval(function () {
                optionA.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
        else {
            console.log("wrong sir");
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            timer = timer - 15;
            optionA.setAttribute("class", "btn btn-danger btn-lg btn-block text-left");
            setInterval(function () {
                optionA.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
    }

    optionB.onclick = ""
    optionB.onclick = function () {
        console.log("You selected: " + optionB.textContent);
        console.log("Answer is " + answerPull);

        if (optionB.textContent === answerPull) {
            console.log("correct");
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            optionB.setAttribute("class", "btn btn-success btn-lg btn-block text-left");
            setInterval(function () {
                optionB.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();

        }
        else {
            console.log("wrong sir");
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            timer = timer - 15;
            optionB.setAttribute("class", "btn btn-success btn-lg btn-block text-left");
            setInterval(function () {
                optionB.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
    }

    optionC.onclick = ""
    optionC.onclick = function () {
        console.log("You selected: " + optionC.textContent);
        console.log("Answer is " + answerPull);

        if (optionC.textContent === answerPull) {
            console.log("correct");
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            optionC.setAttribute("class", "btn btn-success btn-lg btn-block text-left");
            setInterval(function () {
                optionC.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
        else {
            console.log("wrong sir");
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            timer = timer - 15;
            optionC.setAttribute("class", "btn btn-danger btn-lg btn-block text-left");
            setInterval(function () {
                optionC.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
    }

    optionD.onclick = ""
    optionD.onclick = function () {
        console.log("You selected: " + optionD.textContent);
        console.log("Answer is " + answerPull);

        if (optionD.textContent === answerPull) {
            console.log("correct");
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            optionD.setAttribute("class", "btn btn-danger btn-lg btn-block text-left");
            setInterval(function () {
                optionD.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
        else {
            console.log("wrong sir");
            questionsAnswered = questionsAnswered - 1;
            console.log(questionsAnswered);
            timer = timer - 15;
            optionD.setAttribute("class", "btn btn-danger btn-lg btn-block text-left");
            setInterval(function () {
                optionD.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
    }

    if (questionsAnswered === 0) {
        scoreFinal();
        initials();

    }
}


// Main page
function startingPage() {
    clearPage();
    main.appendChild(mainPageLi);
    main.appendChild(mainPageInstru);
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
