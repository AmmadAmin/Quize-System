#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("Welcome to Ammad Amin Adventurer Quiz Game "));
console.log("=".repeat(60));
console.log("=".repeat(60));
console.log(chalk.red("You Must Required 07 Points To Win The Game."));
console.log("=".repeat(60));
let Points = 0;
// question1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "What is TypeScript?",
        type: "list",
        choices: ["A. A database management system", "B. A programming language developed by Facebook", "C. A superset of JavaScript developed by Microsoft", "D. A styling language for HTML"]
    }
]);
if (question1.one === "C. A superset of JavaScript developed by Microsoft") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// question2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "Which command is used to compile a TypeScript file",
        type: "list",
        choices: ["A. tsc ", "B. typescript", "C. compile-ts", "D. ts-compile"]
    }
]);
if (question2.two === "A. tsc ") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// question3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "What is the main advantage of using TypeScript over JavaScript?",
        type: "list",
        choices: ["A. TypeScript is faster", "B. TypeScript is more widely used", "C. TypeScript adds static type definitions", "D. TypeScript does not require a browser to run"]
    }
]);
if (question3.three === "C. TypeScript adds static type definitions") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// question4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Which file extension is used for TypeScript files?",
        type: "list",
        choices: ["A. .js", "B. .ts", "C. .tsx", "D. .tsp"]
    }
]);
if (question4.four === "B. .ts") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// question5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "Which of the following is a valid TypeScript type?",
        type: "list",
        choices: ["A. int", "B. number", "C. digit", "D. integer"]
    }
]);
if (question5.five === "B. number") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// question6
let question6 = await inquirer.prompt([
    {
        name: "six",
        message: "How do you define an interface in TypeScript?",
        type: "list",
        choices: ["A. interface { ... }", "B. interface: { ... }", "C. interface = { ... }", " D. interface InterfaceName { ... }"]
    }
]);
if (question6.six === " D. interface InterfaceName { ... }") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// question7
let question7 = await inquirer.prompt([
    {
        name: "seven",
        message: "Which of the following is the correct way to declare a variable with a specific type in TypeScript?",
        type: "list",
        choices: ["A. let variableName: type = value;", " B. let variableName = value: type;", " C. let variableName: value = type;", " D. let type: variableName = value;"]
    }
]);
if (question7.seven === "A. let variableName: type = value;") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// question8
let question8 = await inquirer.prompt([
    {
        name: "eight",
        message: "How do you specify an optional property in a TypeScript interface?",
        type: "list",
        choices: ["A. property: type?", "B. property?: type", "  C. property: ?type", "D. property: optional type"]
    }
]);
if (question8.eight === "B. property?: type") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// question9
let question9 = await inquirer.prompt([
    {
        name: "nine",
        message: "What is the purpose of the never type in TypeScript?",
        type: "list",
        choices: ["A. To represent a variable that can hold any value", "B. To represent a variable that can never hold a value", "C. To represent a variable that can be either null or undefined", "D. To represent a variable that can only hold a specific value"]
    }
]);
if (question9.nine === "B. To represent a variable that can never hold a value") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.yellow("Your answer is wrong"));
}
;
// question10
let question10 = await inquirer.prompt([
    {
        name: "ten",
        message: "Which keyword is used to inherit a class in TypeScript?",
        type: "list",
        choices: ["A. implements", " B. extends", "C. inherits", "D. derives"]
    }
]);
if (question10.ten === "B. extends") {
    console.log(chalk.yellow("Your is answer is correct"));
    Points++;
}
else {
    console.log(chalk.red("Your answer is wrong"));
}
;
console.log("=".repeat(60));
// output coditiuons
if (Points >= 7) {
    console.log(chalk.green("Congratulations!"));
    console.log(chalk.greenBright(`Your Points is: ${Points}`));
}
else {
    console.log(chalk.blueBright("oh Sorry! "));
    console.log(chalk.red(`your Point is: ${Points} try again.`));
}
