//get computer choice function



function getComputerChoice(choice){
    const choice = ["rock", "paper", "scissors"];

const random = choice[Math.floor(Math.random()*choice)];
return random;

}