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
  humanChoice = humanChoice.toLowerCase(); // Convert the input to lowercase

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice; // return the valid input
  } else {
    console.log("Enter a valid choice: rock, paper or scissors.");
    return getHumanChoice(); // Recursiively ask for input until valid
  }
}

console.log(getHumanChoice());
