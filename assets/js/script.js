// =====================================Varibles==========================================
var body = document.body;
var main = document.querySelector(".main");
var timerElement = document.querySelector("timer");
var timerStart = 75;

// Elements created
var mainPageh1 = document.createElement("h1");
var mainPagep = document.createElement("p");
var mainPageStartBtn = document.createElement("button");
var titleH3 = document.createElement("h3");
var answerP = document.createElement("p");



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

// start quiz
function startQuiz() {
    // clearPage();


    // Pick random number for questions array
    function pickRandom() {
        var ran = Math.floor(Math.random() * questions.length);
        return ran;
    }

    for (var i = 0; i < 5; i++) {
        clearPage();
        var ranQuestions = questions[pickRandom()];
        titleH3.textContent = ranQuestions.title;
        main.appendChild(titleH3);
        console.log(ranQuestions.title);
        var choicesPull = ranQuestions.choices;
        var answerPull = ranQuestions.answer;

        for (var j = 0; j < choicesPull.length; j++) {
            var choicesBtn = document.createElement("button");
            choicesBtn.innerHTML = choicesPull[j];
            console.log(choicesPull[j]);
            main.appendChild(choicesBtn);
        }

    }
}


// start timer
function startTimer() {

}

// Main page
function mainPage() {
    clearPage();
    main.appendChild(mainPageh1);
    main.appendChild(mainPagep);
    main.appendChild(mainPageStartBtn);

    // start quiz
    mainPageStartBtn.addEventListener("click", function () {
        clearPage();
        startQuiz();
    })
}


// =====================================Execute Functions==========================================

mainPage();

