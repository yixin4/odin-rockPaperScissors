function getComputerChoice() {
    let max = 3;
    let min = 1;
    let randomNumber = Math.floor(Math.random()*(max - min +1)) + min;
    console.log(randomNumber);
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice());
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    if ((((playerSelection.toUpperCase()) === "ROCK") && ((computerSelection.toUpperCase()) === "PAPER")) || 
    ((playerSelection.toUpperCase()) === "PAPER" && ((computerSelection.toUpperCase()) === "SCISSORS")) ||
    ((playerSelection.toUpperCase()) === "SCISSORS" && (computerSelection.toUpperCase()) === "ROCK")) {
        playerScore = 0;
        computerScore = 1;
        return `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    } else if ((((playerSelection.toUpperCase()) === "ROCK") && ((computerSelection.toUpperCase()) === "SCISSORS")) || 
    ((playerSelection.toUpperCase()) === "PAPER" && ((computerSelection.toUpperCase()) === "ROCK")) ||
    ((playerSelection.toUpperCase()) === "SCISSORS" && (computerSelection.toUpperCase()) === "PAPER")) {
        playerScore = 1;
        computerScore = 0;
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    } else {
        playerScore = 0;
        computerScore = 0;
        return `One more time! ${playerSelection.toUpperCase()} equals ${computerSelection.toUpperCase()}`
    }
}
console.log(playerScore);
console.log(computerScore);
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/*
let playerSelection = prompt("What's your sign?");
const computerSelection = getComputerChoice();
*/
function game() {
    let player = 0;
    let computer = 0;
    for (let i=0; i<5; i++) {
        playRound(playerSelection, computerSelection);
        player += playerScore;
        computer += computerScore;
        console.log(player);
    }
    console.log(player);
    console.log(computer);

    if (player > computer) {
        return "You win!"
    } else if (player < computer) {
        return "You lose!"
    } else {
        return "Tie!"
    }
}