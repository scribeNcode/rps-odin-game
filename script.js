// computer choice
// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3) 



    // Randomly return this : “rock”, “paper” or “scissors”
    switch (randomNum) {
        case 0 :
            console.log("rock")
            break;

        case 1 :
            console.log("paper")
            break;
        default:
            console.log("Scissors")
            break;
    }
}

getComputerChoice()