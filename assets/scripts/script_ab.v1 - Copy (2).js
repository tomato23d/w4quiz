// declare var 

var title = document.getElementById("showTitle");
var choices = document.getElementById("showChoices");
var answer = document.getElementById("showAnswer");
var selection = document.getElementById("showSelection");
var timer = document.getElementById("timer");



var bStart = document.querySelector("#bStart");
var bResult = document.querySelector("#bResult");

var secondsLeft = 60;
const secondsLeftArr = [];


for (let i= secondsLeft; i > 0; i-- ){secondsLeftArr.push(i)};

var listing = document.createElement("ul");

var li1 = document.createElement("li"); li1.id = "li1";
var li2 = document.createElement("li"); li2.id = "li2";
var li3 = document.createElement("li"); li3.id = "li3";
var li4 = document.createElement("li"); li4.id = "li4";

var B11 = document.createElement("button"); B11.id = "b11"; 
var B22 = document.createElement("button"); B22.id = "b22"; 
var B33 = document.createElement("button"); B33.id = "b33"; 
var B44 = document.createElement("button"); B44.id = "b44"; 



B11.innerText = "Choice 1";
B22.innerText = "Choice 2";
B33.innerText = "Choice 3";
B44.innerText = "Choice 4";

listing.appendChild(B11);
listing.appendChild(B22);
listing.appendChild(B33);
listing.appendChild(B44);

// iterate through questions
var number = 0;
var rightIndex = 0;
var QuestionNumber = 1;
var victory = 0;
 
// start with button Start Quiz
const myButtonChoice = ["b11", "b22", "b33", "b44"];

 function publishQuestion (){
setClock();
console.log("current question index: "+ number);
console.log("QuestionNumber: "+ QuestionNumber);
    
   li1.textContent = questions[number].choices[0];
   li2.textContent = questions[number].choices[1];
   li3.textContent = questions[number].choices[2];
   li4.textContent = questions[number].choices[3];
   
   listing.appendChild(li1);
   listing.appendChild(li2);
   listing.appendChild(li3);
   listing.appendChild(li4);

// publish on a screen question title and four choices   
title.textContent = questions[number].title;
choices.appendChild(listing);
answer.textContent = questions[number].answer;
bResult.setAttribute("style", "color:black");
choices.addEventListener('click', myChoice);
number++ ;
};

//select an answer 

function myChoice (event){
      event.preventDefault();
      var myChoice = event.target.id;
      console.log("the index of button: "+ myButtonChoice.indexOf(myChoice));
      console.log("the button id" +myChoice);
      
   
      for (let x = 0; x < questions.length; x++)
      for (let i = 0; i < questions[0].choices.length; i++)
      if  (!(questions[x].choices[i]=== questions[x].answer) && (myButtonChoice.indexOf(myChoice) ===i))
      {BOrange()}
      else {BGreen()}

};


 bStart.addEventListener("click", function(){
      publishQuestion(); QuestionNumber++});

//choices.addEventListener('click', myChoice);
function BOrange() {
      bResult.setAttribute("style", "color:orange")
};

function BGreen() {
      bResult.setAttribute("style", "color:green")
};


function setClock(){
var timerInterval = setInterval(function() {
    secondsLeft--;
   timer.textContent = ("Seconds left: " + secondsLeft);
   if(secondsLeft === 0){clearInterval(timerInterval); 
   timer.textContent = "The game is finished!";}
   }, 1000);    };
    
 
