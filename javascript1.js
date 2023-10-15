let playerSelection;
let score;
let computerChoice;
const playerChoices = document.getElementById("player-Choice")
const computerChoices = document.getElementById("computer-Choice")
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")
let playerResult = 0;
let computerResult = 0;


  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);    
    if (randomNumber === 0) {
         computerChoice = "Rock";
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    }
    else {
         computerChoice = "Scissors";
        }
    return computerChoice
  }

  function onClickRPS(playerSelection) {
    console.log({playerSelection})
    const computerSelection = getComputerChoice()
    console.log({computerSelection})
    const socre = playRound(playerSelection,computerSelection)
    console.log(score);
    playerChoices.innerText = playerSelection
    computerChoices.innerText = computerSelection
    playerResult += score;
    computerResult -= score
    playerScore.innerText = playerResult;
    computerScore.innerText = computerResult
    if (playerResult == 5) {
      alert('YOU WIN!')
      playerResult = 0;
      computerResult = 0;
    } else if (computerResult == 5){
      alert('YOU LOST!')
      playerResult = 0;
      computerResult = 0;
    } 
  }

  const rpsButton = document.querySelectorAll(".rpsButton");
  console.log(rpsButton)
  rpsButton.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })


  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      score = 0;  
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") | (playerSelection == "Scissors" && computerSelection == "Paper") | (playerSelection == "Paper" && computerSelection == "Rock") ) {
      score = 1;  
    } else score = -1;
    return score;
  }


