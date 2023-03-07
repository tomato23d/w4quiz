// declare var 

var title = document.getElementById("showTitle");
var choices = document.getElementById("showChoices");
var answer = document.getElementById("showAnswer");
var selection = document.getElementById("showSelection");
var timer = document.getElementById("timer");

var B1 = document.getElementById("ch1");
var B2 = document.getElementById("ch2");
var B3 = document.getElementById("ch3");

var bStart = document.querySelector("#bStart");

var secondsLeft = 60;
const secondsLeftArr = [];


var showTime = document.getElementById("timer");

for (let i= secondsLeft; i > 0; i-- ){secondsLeftArr.push(i)};

var listing = document.createElement("ul");

var li1 = document.createElement("li"); li1.id = "li1";
var li2 = document.createElement("li"); li2.id = "li2";
var li3 = document.createElement("li"); li3.id = "li3";
var li4 = document.createElement("li"); li4.id = "li4";



var number = 0;

function publishQuestion (){
   // instead of li's, make them buttons and do it a loop
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
answer.textContent = questions[number].answer;

};


bStart.addEventListener("click", function(){
publishQuestion(); number++});

const myChoiceId = ["li1", "li2", "li3", "li4"];
const myButtonChoice = ["B1", "B2", "B3"];

function myChoice (event){
   //event.preventDefault();
   var myChoice = event.target;
   console.log(myChoice)
   for (let x =0; x < myButtonChoice.length; x++)
   {if (myChoice === B1){console.log("one")}
   else if (myChoice === B2){console.log("two")}
   else {console.log("three")}}
   //selection.innerHTML = myChoice;
};

choices.addEventListener('click', myChoice)



//control  /
function setClock(){
var timerInterval = setInterval(function() {
    secondsLeft--;
    console.log(secondsLeft);
    timer.textContent = secondsLeft;
   if(secondsLeft === 0){clearInterval(timerInterval); 
   timer.textContent = " seconds left: " + secondsLeft;}
   }, 1000);    }
    
   setClock();
