// declare var for each select id on a form

var monthInput = document.getElementById("#month");
console.log(month);
var dayInput = document.getElementById("#day");
var weatherInput = document.getElementById("#weather");
var saveButton = document.querySelector("#save");


saveButton.addEventListener("click", function(event){
event.preventDefault();
var month = document.getElementById("#month").value;
var day = document.getElementById("#day").value;


localStorage.setItem("month", month);
localStorage.setItem("day", day)

})

