// declare var 

var title = document.getElementById("showTitle");
var choices = document.getElementById("showChoices");
var answer = document.getElementById("showAnswer");
var selection = document.getElementById("showSelection");
var timer = document.getElementById("timer");



var bStart = document.querySelector("#bStart");

var secondsLeft = 60;
const secondsLeftArr = [];


for (let i= secondsLeft; i > 0; i-- ){secondsLeftArr.push(i)};

var listing = document.createElement("ul");

var li1 = document.createElement("li"); li1.id = "li1";
var li2 = document.createElement("li"); li2.id = "li2";
var li3 = document.createElement("li"); li3.id = "li3";
var li4 = document.createElement("li"); li4.id = "li4";

var B11 = document.createElement("button"); B11.id = "b11i"; 
var B22 = document.createElement("button"); B22.id = "b22i"; 
var B33 = document.createElement("button"); B33.id = "b33i"; 
var B44 = document.createElement("button"); B44.id = "b44i"; 



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

// start with button Start Quiz
bStart.addEventListener("click", function(){
       publishQuestion(); number++});

 function publishQuestion (){
  
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

var rightIndex = 0;
var QuestionNumber = number+1;
const myButtonChoice = ["B11", "B22", "B33", "B44"];

//select an answer 
choices.addEventListener('click', myChoice);

function myChoice (event){
      event.preventDefault();
      var myChoice = event.target;
     
         for (let x =0; x < myButtonChoice.length; x++)
         {if (myChoice === myButtonChoice[x]){console.log("x")}
       
         else {console.log("hello")}}
      
   };
      for (let x = 0; x < questions[number].choices.length; x++)
      {if (questions[number].choices[x] === questions[number].answer)
            {rightIndex = x; 
                 gameOutcome1.push(QuestionNumber, rightIndex, true);
                  console.log("QuestionNumber: "+ QuestionNumber);
                  console.log("rightIndex: " + rightIndex);
                  console.log("correctChoice: "+ true);
                  

                 console.log (gameOutcome1[number]);
            
            }
       else {gameOutcome1.push(QuestionNumber, rightIndex, false);
            console.log("correctChoice: "+ false)}
      }
};



function setClock(){
var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = ("Seconds left: " + secondsLeft);
   if(secondsLeft === 0){clearInterval(timerInterval); 
   timer.textContent = "The game is finished!";}
   }, 1000);    }
    
 setClock();

 //