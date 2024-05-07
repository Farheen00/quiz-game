#! /usr/bin/env node
import inquirer from "inquirer";
let quizQuestions = [
    {
        question: "What does tsc means?",
        choices: ["Type script compiler", "Type script copy", "Type script command", "None of the above"],
        answer: "Type script compiler"
    },
    {
        question: "What is extension for typescript file",
        choices: ["abc.js", "abc.tsc", "abc.ts", "none of the above"],
        answer: "abc.ts"
    },
    {
        question: "Which of the following is correct?",
        choices: ["Typescript is a subset of Javasript", "Typescript is a superset of Javasript",
            "Typescript is not related to Javascript", "None of the above"],
        answer: "Typescript is a superset of Javasript"
    },
    {
        question: "Which of the following method is used to remove last element in an array?",
        choices: ["push()", "pop()", "unshift()", "shift()"],
        answer: "pop()"
    },
    {
        question: "What is the syntax for declaring a variable in Javascript?",
        choices: ["var", "let", "const", "All of the above"],
        answer: "Type script compiler"
    },
    {
        question: "Which of the following is not a primitive datatype in typescript?",
        choices: ["object", "string", "boolean", "number"],
        answer: "object"
    },
];
console.log(" WELCOME TO TYPESCRIPT QUIZ");
let correctAnswers = 0;
for (let i = 0; i < quizQuestions.length; i++) {
    let quizTest = await inquirer.prompt([
        {
            name: "quizAnswers",
            message: quizQuestions[i].question,
            type: "list",
            choices: quizQuestions[i].choices
        }
    ]);
    if (quizTest.quizAnswers === quizQuestions[i].answer) {
        console.log("Correct Answer");
        correctAnswers++;
    }
    else {
        console.log("Wrong Answer");
    }
}
console.log(`Your score is: ${correctAnswers}`);
console.log("THE END");
console.log("THANKYOU FOR PLAYING");
