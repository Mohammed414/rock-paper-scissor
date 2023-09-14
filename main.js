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
    return "Lose! Paper beats Rock";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return "Win! Rock beats Scissors";
  }
  // PAPER
  else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "Win! Paper beats Rock";
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    return "Lose! Scissors beats Paper";
  }
  // Scissors
  else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    return "Lose! Rock beats Scissors";
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return "Win! Scissors beats Paper";
  }

  // tie
  else {
    return "TIE!";
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const playerSelection = prompt("Rock | Paper | Scissor?");
    const computerSelection = getComputerChoice();
    console.log("Computer selected", computerSelection);
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result[0] == "W") {
      playerWins++;
    } else if (result[0] == "L") {
      computerWins++;
    }
  }

  if (playerWins > computerWins) {
    console.log("HUMAN WINS");
  } else {
    console.log("COMPUTER WINS");
  }
}

game();
