
// Step 1 console output
//check js is working

console.log("Hello,world");

// Step 2 Options
// an array called options is defined, containing the three possible choices in the game:
// rock, paper, and scissors.


const options = ["rock", "paper", "scissors"];

// Step 3 Computer Choice
// This function randomly selects one of the options for the computer.
//Math.random() generates a random number between 0 and 1, which is then multiplied by the length of the options array (3).
//Math.floor() rounds down the number to an integer, ensuring it corresponds to a valid index in the options array.
//The function returns the randomly selected choice.


function getComputerChoice(){
const choice = options[Math.floor(Math.random() * options.length)];
console.log()
return choice;
}

// Step 4 check winner
//This function determines the winner based on the player's and computer's selections.
//If both selections are the same, it returns "Tie".
//The following conditions check if the player wins against the computer:
//Rock beats scissors
//Scissors beats paper
//Paper beats rock
//If none of these conditions are met, it means the computer wins

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

// Step 5 Playing a round 
//This function orchestrates a single round of the game.
//It first calls checkWinner to determine the outcome based on the selections.
//Depending on the result ("Tie", "Player", or "Computer"), it returns a corresponding message.

function playRound(playerSelection, computerSelection){
    const result =checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie!"
    }
    else if(result =="Player"){
        return `you win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `you lose! ${computerSelection} beats ${playerSelection}`
}

}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));




//get human choice

function getHumanChoice(){
let validatedInput = false;
while(validatedInput == false){
    const choice = prompt("Rock Paper Scissors");
    if(choice == null) {
        continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower;
    }
}
}