#! /usr/bin/env node
//SHABANG

// tsc -init
// npm init -y
// npm i inquirer
// npm i --save-dev @types/inquirer
// npm i @types/node -D
// npm i chalk 

// tsconfig.json
//14. "target": "es2022", 
// 28. "module": "NodeNext", 
// 30. "moduleResolution": "NodeNext", 

// {} package.json
// add after 5 means write number 6
// 6. "type" : "module",



import inquirer from "inquirer";
import chalk from "chalk";


const answer = await inquirer.prompt([
    {message : "Enter first number", type : "number", name : "firstNumber"},
    {message : "Enter second number", type : "number", name : "secondNumber"},
    {
      message : "Select one of the operators to perform operation",
      type : "list",
      name : "operator",
      choices : ["Addition" , "Subtraction" , "Multiplication" , "Division"],  
    },

]);

// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction")  {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication")  {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division")  {
    console.log(answer.firstNumber / answer.secondNumber);
}  else {
 console.log("Please select valid operator");        
}