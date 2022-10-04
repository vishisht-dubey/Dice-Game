// For dice 1
var randomnumber = Math.random()*6 + 1;
var randomnumber1 = Math.floor(randomnumber);
var randomdiceimage = "images/dice"+randomnumber1+".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomdiceimage); 
//For dice 2
var randomnumbers = Math.random()*6 + 1;
var randomnumber2 = Math.floor(randomnumbers);
var randomdiceimage1 = "images/dice"+randomnumber2+".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomdiceimage1); 
//Game results
if(randomnumber1===randomnumber2)
{
    document.querySelector("h1").innerHTML="DRAW";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER2 WINS";
}
else if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER1 WINS";
}













