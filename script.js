/*Build a background color switcher.Provide five color options for the user to select from, 
and whatever color they select becomes the background color of the page. */

function changeColor(color) {
var x = document.getElementById("colorPicker");
var bgColor = x.options[x.selectedIndex].value;
document.body.style.backgroundColor = bgColor;
}
