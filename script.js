// computer choice
// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3) 



    // Randomly return this : “rock”, “paper” or “scissors”
    switch (randomNum) {
        case 0 :
            console.log("rock")
            return "rock"
            break;

        case 1 :
            console.log("paper")
            return "paper"
            break;
        default:
            return "scissors"
            break;
    }
}

// getComputerChoice()



// Write the logic to get the human choice

function getHumanChoice(){
    let userInput = prompt('').toLowerCase();
    return userInput
    
    
    
}

// getHumanChoice()



//Declare the players score variables
let humanScore = 0;
let computerScore = 0;





// A function to console log the result of  round

// create a variable that would be passed as parameter
let human = getHumanChoice()

let computer = getComputerChoice()
//  console.log(`This is ${human}, This is ${computer}`)



function playRound( computerChoice , humanChoice,){
    if(computerChoice === "rock" && humanChoice === "scissors"){
        result = `You lose! ${computerChoice} beats ${humanChoice}.`
        console.log(result)
        return result
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        result = `You lose! ${computerChoice} beats ${humanChoice}.`
        console.log(result)
        return result 
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        result = `You lose! ${computerChoice} beats ${humanChoice}.`
        console.log(result)
        return result 
    }else if(computerChoice === humanChoice){
        result = `It's a tie`
        console.log(result)
        return result
    }else{
        result = `You won ! ${humanChoice} beats ${computerChoice}`
        console.log(result)
        return result
    }

}

playRound(computer, human);