//get computer choice function

const choice = ["rock", "paper", "scissors"];

function getComputerChoice(choice){

const random = choice[Math.floor(Math.random()*choice)];
return random;

}