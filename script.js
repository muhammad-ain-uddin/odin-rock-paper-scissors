let humanScore = 0;
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

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?");

  // User cancelled the prompt; exit the function
  if (humanChoice === null) {
    return;
  }

  humanChoice = humanChoice.toLowerCase(); // Convert the input to lowercase

  // Check if the input is a valid choice
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice; // return the valid input
  } else {
    console.log("Enter a valid choice: rock, paper or scissors.");
    return getHumanChoice(); // Recursively ask for input until valid
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return 0;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    return 1;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log("Computer wins!");
    return 2;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

if (humanSelection === undefined) {
  console.log(
    "Looks like you cancelled the game. To start over, just refresh the page and you'll be good to go!"
  );
} else {
  playRound(humanSelection, computerSelection);
}
