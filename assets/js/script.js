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



// Main page
function mainPage() {
    clearPage();
    main.appendChild(mainPageh1);
    main.appendChild(mainPagep);
    main.appendChild(mainPageStartBtn);

    // start quiz
    mainPageStartBtn.addEventListener("click", function () {
        clearPage();
    })
}


// Execute Main Function

mainPage();

