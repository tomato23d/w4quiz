// declare var 

var title = document.getElementById("showTitle");
var choices = document.getElementById("showChoices");

var bStart = document.querySelector("#bStart");

var secondsLeft = 60;
const secondsLeftArr = [];


var showTime = document.getElementById("timer");

for (let i= secondsLeft; i > 0; i-- ){secondsLeftArr.push(i)};

var listing = document.createElement("ul");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

//li1.textContent = questions[1].choices[0];
//li2.textContent = questions[1].choices[1];
//li3.textContent = questions[1].choices[2];
//li4.textContent = questions[1].choices[3];

//listing.appendChild(li1);
//listing.appendChild(li2);
//listing.appendChild(li3);
//listing.appendChild(li4);

var number = 0;
function publishQuestion (){
   li1.textContent = questions[number].choices[0];
   li2.textContent = questions[number].choices[1];
   li3.textContent = questions[number].choices[2];
   li4.textContent = questions[number].choices[3];
   
   listing.appendChild(li1);
   listing.appendChild(li2);
   listing.appendChild(li3);
   listing.appendChild(li4);
   
title.textContent = questions[number].title;
choices.appendChild(listing);
};


bStart.addEventListener("click", function(){
publishQuestion(); number++})








//function setClock(){
//var timerInterval = setInterval(function() {
   // secondsLeft--;
   // if(secondsLeft === 0){clearInterval(timerInterval); 
  //  timer.textContent = " seconds left: " + secondsLeft;}
  //  }, 1000);    }
    
