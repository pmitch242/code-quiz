// =====================================Varibles==========================================
var body = document.body;
var main = document.querySelector(".main");
var listContainer = document.querySelector(".listcontainer");

// Elements created
var backButton = document.createElement("button");


//Functions
function replacePage() {
    location.replace("index.html")
}

// Set Elements
backButton.textContent = "BACK";
main.appendChild(backButton);

scoreDisplay = localStorage.getItem("scores");
scoreDisplay = JSON.parse(scoreDisplay);
if( scoreDisplay != null){

    for (i = 0; i < scoreDisplay.length; i++) {
        var scoreLi = document.createElement("li");
        scoreLi.innerHTML = scoreDisplay[i];
        scoreLi.setAttribute("class", "list-group-item text-left")
        listContainer.append(scoreLi);
        
    }
}

backButton.onclick = function () {
    replacePage();
}
