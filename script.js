
const options = ["rock", "paper", "scissors"];


function getComputerChoice(){
const choice = options[Math.floor(Math.random() * options.length)];
return choice;
}

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
        return prompt ("It's a tie!")
    }
    else if(result =="Player"){
        return prompt(`you win! ${playerSelection} beats ${computerSelection}`)
    }
    else {
        return `you lose! ${computerSelection} beats ${playerSelection}`
}

}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log ("welcome!")
    for (let i = 0; i < 5; i++){
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log (playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) =="Computer"){
            scoreComputer++;
        }

    }
    console.log("Game over!")
    if(scorePlayer > scoreComputer){
        console.log("You Win!");
    }
    else if(scorePlayer < scoreComputer){
        console.log("You Lose!");
    }
    else {console.log("Draw! try again");

    }
}

game()
 




