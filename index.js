var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1===randomNumber2){
    document.querySelector(".container h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML="🚩Player 1 wins!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML="🚩Player 2 wins!!";
}