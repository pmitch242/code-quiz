// =====================================Varibles==========================================
var body = document.body;
var main = document.querySelector(".main");

// Elements created
var backButton = document.createElement("button");

//Functions
function replacePage() {
    location.replace("index.html")
}

// Set Elements
backButton.textContent = "BACK";
main.appendChild(backButton);

 backButton.onclick = function(){
    replacePage();
 }
