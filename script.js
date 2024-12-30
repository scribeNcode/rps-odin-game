// get all buttons
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

// get user and human choice container 
let userChoiceWrapper = document.querySelector('#humanChoiceDisplay');
let computerChoiceWrapper = document.querySelector('#computerChoiceDisplay'); 


// Get result container
let resultWrapper = document.querySelector('#roundResult');



// ------------------------ computer choice ----------------------------------------
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  // Randomly return this : “rock”, “paper” or “scissors”
  switch (randomNum) {
    case 0:
      console.log("rock");
      computerChoiceWrapper.textContent = "rock"
      return "rock";
      break;

    case 1:
      console.log("paper");
      computerChoiceWrapper.textContent = "paper"
      return "paper";
      break;
    default:
        computerChoiceWrapper.textContent = "scissors"
      return "scissors";
      break;
  }
}

// -------------------------------- add event listeners to button --------------

let userInput = "";
// add event listeners to buttons
rockButton.addEventListener("click", (e) => {
  e.preventDefault();
  userInput = "rock";
  userChoiceWrapper.textContent = "rock"
  console.log(userInput);
  playGame();
});

paperButton.addEventListener("click", (e) => {
  e.preventDefault();
  userInput = "paper";
  userChoiceWrapper.textContent = "paper"
  console.log(userInput);
  playGame();
});

scissorsButton.addEventListener("click", (e) => {
  e.preventDefault();
  userInput = "scissors";
  userChoiceWrapper.textContent = "scissors"
  console.log(userInput);
  playGame();
});



//Declare the players score variables
let humanScore = 0;
let computerScore = 0;



// --------------------------- A logic to play the entire game -----------------------

function playGame() {
  // A function to console log the result of  round

  // create a variable that would be passed as parameter
  let human = userInput;

  let computer = getComputerChoice();
  //  console.log(`This is ${human}, This is ${computer}`)

  function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "scissors") {
      result = `You lost this round! ${computerChoice} beats ${humanChoice}.`;
      computerScore += 1;
      console.log(result);
      resultWrapper.textContent = result
      document.querySelector('#userCurrentScore').textContent = humanScore
      document.querySelector('#computerCurrentScore').textContent = computerScore
      console.log(`Computer : ${computerScore} , human ${humanScore}`);

      return result;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      result = `You lost this round! ${computerChoice} beats ${humanChoice}.`;
      computerScore += 1;
      console.log(result);
      resultWrapper.textContent = result
      document.querySelector('#userCurrentScore').textContent = humanScore
      document.querySelector('#computerCurrentScore').textContent = computerScore
      console.log(`Computer : ${computerScore} , human ${humanScore}`);
      return result;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      result = `You lost this round! ${computerChoice} beats ${humanChoice}.`;
      computerScore += 1;
      console.log(result);
      resultWrapper.textContent = result
      document.querySelector('#userCurrentScore').textContent = humanScore
      document.querySelector('#computerCurrentScore').textContent = computerScore
      console.log(`Computer : ${computerScore} , human ${humanScore}`);
      return result;
    } else if (computerChoice === humanChoice) {
      result = `It's a tie`;
      console.log(result);
      resultWrapper.textContent = result
      document.querySelector('#userCurrentScore').textContent = humanScore
      document.querySelector('#computerCurrentScore').textContent = computerScore
      console.log(`Computer : ${computerScore} , human ${humanScore}`);
      return result;
    } else {
      result = `You won this round ! ${humanChoice} beats ${computerChoice}`;
      humanScore += 1;
      console.log(result);
      resultWrapper.textContent = result
      document.querySelector('#userCurrentScore').textContent = humanScore
      document.querySelector('#computerCurrentScore').textContent = computerScore
      console.log(`Computer : ${computerScore} , human ${humanScore}`);
      return result;
    }
  }


  

  playRound(computer, human);

  if (humanScore === 5 || computerScore === 5) {
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
  }
}


