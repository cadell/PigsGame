/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer, dice;

score = [0,0];
roundScore = 0;
activePlayer = 0;

//dice = Math.floor(Math.random()*6)+1;
//the document object gives you access to the DOM the query selectory element is used to select an element from our webpage.
//document.querySelector('#current-0').textContent = dice;
var buttonRoll = document.querySelector("button.btn-roll");
var buttonHold = document.querySelector("button.btn-hold");
var buttonNewGame = document.querySelector("button.btn-new");



function newGame()
{
    roundScore = 0;
    for(var i =0; i < 2; i++){
        document.querySelector('#score-'+i).textContent = 0;
        document.querySelector('#current-'+i).textContent = 0;
        score[i] = 0;
    }
}
 
function holdSwitch()
{
    score[activePlayer] += roundScore;
    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
    if(score[activePlayer] >= 100){
        window.alert("You WON Player "+(activePlayer+1)+" grats!!!");
        newGame();
    }
    roundScore = 0;
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
    if(activePlayer === 0) {activePlayer = 1;}
    else if(activePlayer === 1) {activePlayer = 0;}
    
}

function rollDice()
{
    dice = Math.floor(Math.random()*6)+1;
    if(dice != 1){
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }
    else if(dice === 1){
        roundScore = 0;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
        if(activePlayer === 0) {activePlayer = 1;}
        else if(activePlayer === 1) {activePlayer = 0;}
    }
    var changeDice = "dice-"+dice+".png";
    console.log(changeDice);
    document.querySelector("img.dice").src = changeDice;
}
buttonRoll.addEventListener("click",rollDice);
buttonHold.addEventListener("click",holdSwitch);
buttonNewGame.addEventListener("click",newGame);