/*Build a background color switcher.Provide five color options for the user to select from, 
and whatever color they select becomes the background color of the page. */

var backgroundGreen = document.getElementById("green");
var backgroundRed = document.getElementById("red");
var backgroundBlue = document.getElementById("blue");
var backgroundBlack = document.getElementById("black");
var backgroundYellow = document.getElementById("yellow");

changeColor();

  backgroundGreen.addEventListener("click",()=> {
    changeColor("green")
});

  backgroundRed.addEventListener("click",()=> {
    changeColor("red")
});

 backgroundBlue.addEventListener("click",()=> {
    changeColor("blue")
});

backgroundBlack.addEventListener("click",()=> {
    changeColor("black")
});

backgroundYellow.addEventListener("click",()=> {
    changeColor("yellow")
});

function changeColor(color) {
  document.body.style.backgroundColor = color;
};


