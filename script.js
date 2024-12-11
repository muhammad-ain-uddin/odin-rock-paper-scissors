let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else if (computerChoice === 3) {
    return "scissors";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors?");

  // User cancelled the prompt; exit the function
  if (playerChoice === null) {
    return null;
  }

  playerChoice = playerChoice.toLowerCase(); // Convert the input to lowercase

  // Check if the input is a valid choice
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice; // return the valid input
  } else {
    console.log("Enter a valid choice: rock, paper or scissors.");
    return getPlayerChoice(); // Recursively ask for input until valid
  }
}

function playRound(playerChoice, computerChoice) {
  console.log(`You chose ${playerChoice}, Computer chose ${computerChoice}`);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
    return 0;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    return 1;
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissors" && playerChoice === "paper")
  ) {
    console.log("Computer wins!");
    return 2;
  }
}

function playGame() {
  let gameCancelled = false; // Flag to check if game was cancelled

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();

    // If user cancels the game, stop the game immediately
    if (playerSelection === null) {
      console.log(
        "Looks like you cancelled the game. To start over, just refresh the page and you'll be good to go!"
      );
      gameCancelled = true; // Set flag to true
      break; // Exit the loop, ending the game
    }

    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result === 1) playerScore++;
    if (result === 2) computerScore++;
    console.log(`Your Score: ${playerScore}. Computer Score: ${computerScore}`);
  }

  // Only display the final result if the game wasn't cancelled
  if (!gameCancelled) {
    if (playerScore === computerScore) {
      console.log("It is a draw. Game over. Refresh the page to play again!");
    } else if (playerScore > computerScore) {
      console.log("You win. Game over. Refresh the page to play again!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins. Game over. Refresh the page to play again!");
    }
  }
}

playGame();
