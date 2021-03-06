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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'comuputer';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
    } else {
        winner = 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);

    while (playerWins < 5 && computerWins < 5) {
        if (winner === "player") {
            playerWins += 1;
            console.log('You won! You chose ' + playerMove + ' while computer chose ' + computerMove);
            console.log('The score is currnetly at ' + playerWins + ' to ' + computerWins);
        } else if (winner === "computer") {
            computerWins += 1;
            console.log('You Lost! You chose ' + playerMove + ' while computer chose ' + computerMove);
            console.log('The score is currnetly at ' + playerWins + ' to ' + computerWins);
        } else {
            winner === "tie";
            console.log("It's a tie, you both picked " + playerMove);
            console.log('The score is currnetly at ' + playerWins + ' to ' + computerWins);
        }
        if (playerWins === 5) {
            console.log("Congratulations! You won!");
        } else if (computerWins === 5) {
            console.log("Unfortunate! The computer wins!");
        }
    }
    return [playerWins, computerWins];
}

playToFive();