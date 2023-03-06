// declare var 

var title = document.getElementById("showTitle");
var choices = document.getElementById("showChoices");

var bStart = document.querySelector("#bStart");

var secondsLeft = 60;
const secondsLeftArr = [];


var showTime = document.getElementById("timer");

for (let i= secondsLeft; i > 0; i-- ){secondsLeftArr.push(i)};

console.log(secondsLeftArr);

console.log(questions[0].title);

title.textContent = questions[0].title;
//choices.textContent = questions[0].choices;
//choices.textContent = questions[0].choices[0];


//choices1.textContent = questions[0].choices[0];
//choices2.textContent = questions[0].choices[1];
//choices3.textContent = questions[0].choices[2];
//choices4.textContent = questions[0].choices[3];



var listing = document.createElement("ul");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = questions[0].choices[0];
li2.textContent = questions[0].choices[1];
li3.textContent = questions[0].choices[2];
li4.textContent = questions[0].choices[3];

listing.appendChild(li1);
listing.appendChild(li2);
listing.appendChild(li3);
listing.appendChild(li4);
console.log(listing);

choices.appendChild(listing);








//function setClock(){
//var timerInterval = setInterval(function() {
   // secondsLeft--;
   // if(secondsLeft === 0){clearInterval(timerInterval); 
  //  timer.textContent = " seconds left: " + secondsLeft;}
  //  }, 1000);    }
    
  


//saveButton.addEventListener("click", function(event){
//event.preventDefault();
//var month = document.getElementById("#month").value;

//localStorage.setItem("month", month);)})

