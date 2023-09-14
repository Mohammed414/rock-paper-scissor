const choices = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  /*
    all possibilities
    player, computer
    rock, rock
    paper, paper
    scissors, scissors
    
    rock, paper
    rock, scissors

    paper, rock
    paper, scissors

    scissors, rock
    scissors, paper
  */

  // ROCK
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return "You Win! Rock beats Scissors";
  }
  // PAPER
  else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    return "You Lose! Scissors beats Paper";
  }
  // Scissors
  else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return "You Win! Scissors beats Paper";
  }

  // tie
  else {
    return "TIE!";
  }
}

function game() {
  const playerSelection = prompt("Rock | Paper | Scissor?");
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
}

game();
