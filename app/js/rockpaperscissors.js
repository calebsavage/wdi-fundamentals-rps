////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(pMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
if (! pMove){
      var pMove = getInput();
} 
    console.log("You picked " + pMove);
    return pMove;
}

function getComputerMove(cMove) {
if (! cMove){
var cMove = randomPlay();
    console.log("Computer picked " + cMove);
    
}
  
return cMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == "rock"){
        if (computerMove == "paper"){
        winner = "computer";
        }
        else if (computerMove =="scissors"){
        winner = "player";
        }
        else if (computerMove == "rock"){
        winner = "tie";
        }
    }

    else if (playerMove == "paper"){
        if (computerMove == "paper"){
        winner = "tie";
        }
        else if (computerMove =="scissors"){
        winner = "computer";
        }
        else if (computerMove == "rock"){
        winner = "player";
        }
    }

      else if (playerMove == "scissors"){
        if (computerMove == "paper"){
        winner = "player";
        }
        else if (computerMove =="scissors"){
        winner = "tie";
        }
        else if (computerMove == "rock"){
        winner = "computer";
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = "";
    var playerMove;
    var computerMove;
    var foo = "";
    var count = 0;
    var max = 0;
   
   while (max <=5){

    playerMove = getPlayerMove();
    
    computerMove = getComputerMove();

    
    winner = getWinner(playerMove,computerMove);
     console.log("winner: " + winner);
    if (winner === "computer"){
        computerWins += 1;
    } 
    else if (winner === "player"){
        playerWins += 1;
    }
    
  
   console.log("player:" + playerWins + " computer: " + computerWins);
   count++;
   console.log("count: " + count);
    max = Math.max(playerWins,computerWins);
    if (max ===5){
        console.log("game over! Final score: player:" + playerWins + " computer: " + computerWins)
    }
   }

}

playToFive();