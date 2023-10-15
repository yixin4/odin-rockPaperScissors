
// ComputerChoice have to be in the for loop so you can get different results from the Computer
// and if you want to print the strings use console.log("")
// And another advice inside playround try to UpperCase the variables before the conditional so you dont have to write everytime toUpper

playerChoices = document.getElementById("player-Choice")
computerChoices = document.getElementById("computer-Choice")
resultDisplay = document.getElementById("result")
possibleChoices = document.querySelectorAll("button")
userChoice = "";
computerChoice ="";

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    playerChoices.innerHTML = userChoice;    
}));




function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice)
}



// function playRound(playerSelection, computerSelection) {
//     var result ="";
//     var player = playerSelection.toUpperCase();
//     var computer = computerSelection.toUpperCase()
//     if ((((player) === "ROCK") && ((computer) === "PAPER")) || 
//     ((player) === "PAPER" && ((computer) === "SCISSORS")) ||
//     ((player) === "SCISSORS" && (computer) === "ROCK")) {
//         playerScore += 0;
//         computerScore += 1;
//         result = `You lose! ${computer} beats ${player}`
//     } else if ((((playerSelection.toUpperCase()) === "ROCK") && ((computerSelection.toUpperCase()) === "SCISSORS")) || 
//     ((playerSelection.toUpperCase()) === "PAPER" && ((computerSelection.toUpperCase()) === "ROCK")) ||
//     ((playerSelection.toUpperCase()) === "SCISSORS" && (computerSelection.toUpperCase()) === "PAPER")) {
//         playerScore += 1;
//         computerScore += 0;
//         result = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
//     } else {
//         playerScore += 0;
//         computerScore += 0;
//         result = `One more time! ${playerSelection.toUpperCase()} equals ${computerSelection.toUpperCase()}`
//     }
//     console.log(result);
// }



// let playerSelection = prompt("What's your sign?");
// const computerSelection = getComputerChoice();

// function game() {
//     let player = 0;
//     let computer = 0;
//     for (let i=0; i<5; i++) {
//         var computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         player += playerScore;
//         computer += computerScore;
//     }
//     console.log(player);
//     console.log(computer);
//     var winner = "";
//     if (player > computer) {
//         winner = "You win!"
//     } else if (player < computer) {
//         winner = "You lose!"
//     } else {
//         winner = "Tie!"
//     }
//     console.log(winner);
// }

// game();
