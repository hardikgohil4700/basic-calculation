var p = 2000;
var r=10;
var y=5;

var s=(p*r*y)/100;
var p=(100*s)/(r*y);
var r=(100*s)/(p*y);
var y=(100*s)/(p*r);
var s=p+s;
var t=s-p;


document.getElementById("title").innerHTML = " Simple Tnterest";

document.getElementById("principle").innerHTML = " Principal Amount :-";

document.getElementById("principle-amout").innerHTML = p;

document.getElementById("ratep").innerHTML = "  Rate of Interest :-";

document.getElementById("rataamount").innerHTML = r;

document.getElementById("time").innerHTML = "  Number of Years:-";

document.getElementById("year").innerHTML = y;

document.getElementById("accured").innerHTML="Total Accrued amount :- "

document.getElementById("amount").innerHTML=s;

document.getElementById("Interest").innerHTML= "Interest :-";

document.getElementById("integar").innerHTML=t;







