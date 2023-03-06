

for (let x = 0; x < choices.length; x++){

var lix = document.createElement("li");
lix.textContent = questions[0].choices[i];
listing.appendChild(lix);}



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
