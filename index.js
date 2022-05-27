var dice = ["images/dice1.png", "images/dice4.png", "images/dice3.png", "images/dice6.png", "images/dice2.png", "images/dice5.png"];
var diceTwo = ["images/dice5.png", "images/dice6.png", "images/dice3.png", "images/dice2.png", "images/dice4.png", "images/dice1.png"];

var randomItem = dice[Math.floor(Math.random()*dice.length)];
var randomItemTwo = diceTwo[Math.floor(Math.random()*diceTwo.length)]

var secondDice = document.querySelector(".img2").setAttribute("src", randomItem);
var firstDice = document.querySelector(".img1").setAttribute("src", randomItemTwo);

if (randomItem > randomItemTwo){
    document.querySelector("h1").innerHTML = "Jogador 2 venceu";
}else if(randomItem < randomItemTwo){
    document.querySelector("h1").innerHTML = "Jogador 1 venceu";
}else {
    document.querySelector("h1").innerHTML = "Empate";
};
