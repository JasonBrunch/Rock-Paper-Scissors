mainGameLoop();




function mainGameLoop(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i<5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let gameOutcome = gameRound(computerChoice, playerChoice);
        if(gameOutcome === "You Win!"){
            playerScore++;
        }
        else if(gameOutcome =="You Lose!"){
            computerScore++;
        }
        console.log(gameOutcome);
    }
    //DETERMINE WINNER
    console.log("Your score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    if(playerScore > computerScore){
        console.log("YOU WIN THE GAME!")
    }
    else if(computerScore > playerScore){
        console.log("YOU LOSE THE GAME!");
    }
    else if(computerScore == playerScore){
        console.log("TIE GAME ALL AROUND!");
    }
}

//GET THE COMPUTERS CHOICE OF ROCK PAPER OR SCISSORS

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return "Rock";
    }
    else if(num == 1){
        return "Paper";
    }
    else if(num == 2){
        return "Scissors";
    }
}

//ASK THE PLAYER FOR THEIR CHOICE - CASE INSENSITIVE
function getPlayerChoice(){
let playerChoice = prompt("Choose Rock, Paper, or Scissors?")
return playerChoice;
}

//ROUND, TO PARAMETERS - THE PLAYERSELECTION AND COMPUTER SELECTION
function gameRound(_computerChoice, _playerChoice){
    let winMessage = "You Win!";
    let loseMessage = "You lose!";

    //ROCk
    if(_playerChoice.toUpperCase() === "ROCK" && _computerChoice.toUpperCase() === "SCISSORS"){
        return winMessage;
    }
    else if(_playerChoice.toUpperCase() === "ROCK" && _computerChoice.toUpperCase() == "PAPER"){
        return loseMessage;
    }
    if(_playerChoice.toUpperCase() === "PAPER" && _computerChoice.toUpperCase() === "SCISSORS"){
        return loseMessage;
    }
    else if(_playerChoice.toUpperCase() === "PAPER" && _computerChoice.toUpperCase() == "ROCK"){
        return winMessage;
    }
    if(_playerChoice.toUpperCase() === "SCISSORS" && _computerChoice.toUpperCase() === "PAPER"){
        return winMessage;
    }
    else if(_playerChoice.toUpperCase() === "SCISSORS" && _computerChoice.toUpperCase() == "ROCK"){
        return loseMessage;
    }
    //TIE
    else if(_playerChoice.toUpperCase() === _computerChoice.toUpperCase()){
        return "Tie Game";
    }
    //BUG
    else return "Broke";
}
