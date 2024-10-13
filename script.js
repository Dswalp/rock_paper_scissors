//check js is working

console.log("Hello,world");

//get computer choice function


const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
   

const choice = options[Math.floor(Math.random() * options.length)];
return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}
function playRound(playerSelection, computerSelection){
    const result =checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie!"
    }
    else if(result =="Player"){
        return `you win ${playerSelection} beats ${computerSelection}`
    }
    else {return `you lose ${computerSelection} beats ${playerSelection}`;
}

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




//get human choice

function getHumanChoice(){

}