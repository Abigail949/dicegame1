var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "img/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "img/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);