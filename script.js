// computer choice
// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3) 



    // Randomly return this : “rock”, “paper” or “scissors”
    switch (randomNum) {
        case 0 :
            return "rock"
            console.log("rock")
            break;

        case 1 :
            return "paper"
            console.log("paper")
            break;
        default:
            return "scissors"
            console.log("Scissors")
            break;
    }
}

// getComputerChoice()



// Write the logic to get the human choice

function getHumanChoice(){
    let userInput = prompt('');
    return userInput
    console.log(userInput)
}

// getHumanChoice()



//Declare the players score variables
let humanScore = 0;
let computerScore = 0;




