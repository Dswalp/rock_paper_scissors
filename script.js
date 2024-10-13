//check js is working

console.log("Hello,world");

//get computer choice function


const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
   

const choice = options[Math.floor(Math.random() * options.length)];
console.log(choice);
}
getComputerChoice();

//get human choice

function getHumanChoice(){

}