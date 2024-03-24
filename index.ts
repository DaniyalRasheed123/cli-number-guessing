#! /usr/bin/env node
import inquirer from "inquirer"

// 1) Computer will generate number 

// 2) user input number of guess

// 3) compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random()*6+1);

console.log("welcome to number guessing game");

const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please guesss a number between 1-6",
    },
]);

console.log(answers);

if(answers.userGussedNumber === randomNumber){
    console.log("Congratulation your guessed number is correct");
} else{
    console.log("you guessed a wrong number");
};