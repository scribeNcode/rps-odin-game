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





// Write the logic to get the human choice

function getHumanChoice(){
    let userInput = prompt('').toLowerCase();
    return userInput
       
}


    //Declare the players score variables
    let humanScore = 0;
    let computerScore = 0;

// ------ A logic to play the entire game -----------------------

function playGame(){




// A function to console log the result of  round

// create a variable that would be passed as parameter
let human = getHumanChoice()

let computer = getComputerChoice()
//  console.log(`This is ${human}, This is ${computer}`)



function playRound( computerChoice , humanChoice){

    if(computerChoice === "rock" && humanChoice === "scissors"){
        result = `You lose! ${computerChoice} beats ${humanChoice}.`
        computerScore += 1
        console.log(result)
        console.log(`Computer : ${computerScore} , human ${humanScore}`)

        return result
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        result = `You lose! ${computerChoice} beats ${humanChoice}.`
        computerScore += 1
        console.log(result)
        console.log(`Computer : ${computerScore} , human ${humanScore}`)
        return result 
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        result = `You lose! ${computerChoice} beats ${humanChoice}.`
        computerScore += 1
        console.log(result)
        console.log(`Computer : ${computerScore} , human ${humanScore}`)
        return result 
    }else if(computerChoice === humanChoice){
        result = `It's a tie`
        console.log(result)
        console.log(`Computer : ${computerScore} , human ${humanScore}`)
        return result
    }else{
        result = `You won ! ${humanChoice} beats ${computerChoice}`
        humanScore += 1
        console.log(result)
        console.log(`Computer : ${computerScore} , human ${humanScore}`)
        return result
    }
}

playRound(computer, human)


}

playGame()
playGame()
playGame()
playGame()
playGame()


