// =====================================Varibles==========================================
var body = document.body;
var main = document.querySelector(".main");
var timerElement = document.querySelector(".timer");
var timer = 75;

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

// start timer
function startTimer() {
    var timerInterval = setInterval(function () {
        timer--;
        timerElement.textContent = timer;

        if (timer <= 0) {
            alert("you lost :(");
            clearInterval(timerInterval);
        }
    }, 1000);
}


// start quiz
function startQuiz() {
    // clearPage();
    startTimer();

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
            

            choicesBtn.onclick = function () {
                console.log("You selected: " + this.textContent);
                console.log("Answer is " + answerPull);
                
                if (this.textContent === answerPull) {
                    console.log("correct");
                    var answerDiv = document.createElement("div");
                    answerDiv.textContent = ("Correct!")
                    main.appendChild(answerDiv);

                }
                else {
                    console.log("wrong sir");
                    var answerDiv = document.createElement("div");
                    answerDiv.textContent = ("Wrong!")
                    main.appendChild(answerDiv);
                    timer = timer - 15;
                }
            }
        }
    }
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


// Execute Main Function

mainPage();

