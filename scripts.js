function rockFunction(){
    
    mainGameLoop("ROCK");
    
}
function scissorFunction(){
   
    mainGameLoop("SCISSORS");
};
function paperFunction(){
    mainGameLoop("PAPER");
}

const button1 = document.querySelector('.button1');
button1.addEventListener('click' , rockFunction);

const button2 = document.querySelector('.button2');
button2.onclick = () => paperFunction();

const button3 = document.querySelector('.button3');
button3.addEventListener('click', scissorFunction);

const resultText = document.querySelector('.resultText');
function updateResult(_result){
    resultText.textContent = _result;

}


let playerScore = 0;
let computerScore = 0;
function mainGameLoop(_playerChoice){

        let computerChoice = getComputerChoice();
        console.log("computer choice is" + computerChoice);
        let playerChoice = _playerChoice;
        console.log("Player choice is " + playerChoice);
        let gameOutcome = gameRound(computerChoice, playerChoice);
        console.log("Game outcome is " + gameOutcome);
        if(gameOutcome === "You Win!"){
            playerScore++;
            console.log("Player score increased");
        }
        else if(gameOutcome === "You lose!"){
            computerScore++;
            console.log("Computer score increased");
            
        }
        else if(gameOutcome === "Tie Game"){
        }
        updateScores();
        updateResult(gameOutcome);
        
}
function updateScores(){
    let playerScoreText = document.querySelector('.playerScore');
    playerScoreText.textContent = playerScore.toString();
    console.log("Updating player score text " + playerScore);
    

    let computerScoreText = document.querySelector('.computerScore');
    computerScoreText.textContent = computerScore.toString();
    console.log("Updating computer score text " + computerScore);
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

