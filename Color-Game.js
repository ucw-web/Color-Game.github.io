var numSquares = 6;
var colors = generateRandomColors(numSquares);
var sq = document.querySelectorAll(".square");
var pickedColor = pickColor();

var colorDisplay = document.getElementsByTagName("colordisplay");
colordisplay.textContent = pickedColor;

var messg = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementsByTagName("reset");
var easyButton = document.getElementsByTagName("easyBtn");
var hardButton = document.getElementsByTagName("hardBtn");
var static = document.getElementsByClassName("static");

    easyBtn.addEventListener("click", function(){
        hardBtn.style.backgroundColor = "none";
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        numSquares = 3;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colordisplay.textContent = pickedColor;
        for(var i = 0; i<sq.length; i++){
            if(colors[i]){
            sq[i].style.backgroundColor = colors[i];
            }
            else{
                sq[i].style.display = "none";
            }
        }
    }); 
    hardBtn.addEventListener("click", function(){
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colordisplay.textContent = pickedColor;
        for(var i = 0; i<sq.length; i++){
            sq[i].style.backgroundColor = colors[i];
                sq[i].style.display = "block";
        }
    });  

    reset.addEventListener("click", function(){
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colordisplay.textContent = pickedColor;
        messg.textContent = "";
        colordisplay.classList.remove("static");
        h1.style.backgroundColor = "steelblue";
        reset.textContent = "New Color";
        for(var i =0; i<sq.length; i++){
            sq[i].style.backgroundColor = colors[i];
        }
    });
for(var i = 0; i < sq.length; i++){
    sq[i].style.backgroundColor = colors[i];
sq[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
        messg.textContent = "Correct!";
        messg.style.color = "green";
        changeColor(clickedColor);
        colordisplay.classList.add("static");
        h1.style.backgroundColor = clickedColor;
        reset.textContent = "Play again?";
    }
    else{
        messg.textContent = "Wrong!";
        messg.style.color = "red";
        this.style.backgroundColor = "#232323";
    }
});
}
function changeColor(color){
    for(var i = 0; i < sq.length; i++){
        sq[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i=0; i < num; i++){
        // Looping each time and adding six random colors
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
setInterval(change, 1000);
function change(){
    // colordisplay.style.color = "white";
    h1.style.color = randomColor();
}



























