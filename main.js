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

function game() {}

game();

const buttons = document.querySelectorAll("button");

function restartGame(playerScore, cpuScore, roundNumber) {
  playerScore.textContent = 0;
  cpuScore.textContent = 0;
  roundNumber.textContent = 0;
}

const handleClick = (e) => {
  const playerSelection = e.target.id.toUpperCase();
  const computerSelection = getComputerChoice();

  const cpu_button = document.querySelector(
    `.cpu-buttons > #${computerSelection.toLowerCase()}`
  );
  cpu_button.classList.add("cpu-selected");
  setTimeout(() => {
    cpu_button.classList.remove("cpu-selected");
  }, 1000);

  const result = playRound(playerSelection, computerSelection);
  const resultParagraph = document.querySelector(".result");
  resultParagraph.textContent = result;

  const playerScore = document.querySelector(".player-score");
  const cpuScore = document.querySelector(".cpu-score");
  const roundNumber = document.querySelector(".round-number");

  if (result[0] == "W") {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (result[0] == "L") {
    cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
  }
  roundNumber.textContent = parseInt(roundNumber.textContent) + 1;

  if (playerScore.textContent == "5") {
    resultParagraph.textContent = "That's it you won!!";
    restartGame(playerScore, cpuScore, roundNumber);
  }
  if (cpuScore.textContent == "5") {
    resultParagraph.textContent = "Oh crap, you lost :(";
    restartGame(playerScore, cpuScore, roundNumber);
  }
};

buttons.forEach((button) => button.addEventListener("click", handleClick));
