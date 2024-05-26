import chalk from "chalk";
import inquirer from "inquirer";
/*const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message: "Which of the following is not a TypeScript data type?",
    choices: ["a) tuple", "b) enum", "c) array", "d) struct"],
  },
  {
    name: "question_2",
    type: "list",
    message: " Which command is used to compile TypeScript code into JavaScript?",
    choices:["a) tsc","b) node","c) npm","d) tscompile"]
    },{
        name:"question_3",
        type:"list",
        message:chalk.bold.green("which file extension is typically use in typescript files?"),
        choices:["a).ts","b).js","c).html","d).css"]
    },{
        name:"question_4",
        type:"list",
        message:"what is typescript?",
        choices:[
"a) super set of JavaScript",
 "b) A framework for building web applications",
"c) A programming language developed by Microsoft",
"d) A database management system"
 ]
    },{
        name:"question_5",
        type:"list",
        message:"which keyword is use to declear variable?",
        choices:["a)let","b)const","c)var","d)all of the above"]
    }
]);



let score:number=0;


switch (quiz.question_1) {
  case "d)struct":
    console.log("1.correct");
    ++score;

    break;

  default:
    console.log("1.incorrect");

    break;

  //*****************QUESTION2******
}
switch (quiz.question_2) {
  case "a)tsc":
    console.log("2.correct");
    ++score;

    break;

  default:
    console.log("2.incorrect");

    break;
}
        //*****************QUESTION3******


switch (quiz.question_3) {
    case "a).ts":
        console.log("3.correct");
        ++score;
        
        
        break;

    default:
        console.log("3.incorrect");
        
        break;
}
        //*****************QUESTION4******


switch (quiz.question_4) {
    case "a)super set of javascript":
        console.log("4.correct");
        ++score;
        
        
        break;

    default:
        console.log("4.incorrect");
        
        break;
}
        //*****************QUESTION5******


switch (quiz.question_5) {
    case "d) all of the above":
        console.log("5.correct");
        ++score;
        
        
        break;

    default:
        console.log("5.incorrect");
        
        break;
}
console.log(`score ${score}`);
*/
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Which of the following is not a TypeScript data type?",
        choices: ["a) tuple", "b) enum", "c) array", "d) struct"],
    },
    {
        name: "question_2",
        type: "list",
        message: " Which command is used to compile TypeScript code into JavaScript?",
        choices: ["a) tsc", "b) node", "c) npm", "d) tscompile"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.bold.green("which file extension is typically use in typescript files?"),
        choices: ["a).ts", "b).js", "c).html", "d).css"]
    },
    {
        name: "question_4",
        type: "list",
        message: "what is typescript?",
        choices: [
            "a) super set of JavaScript",
            "b) A framework for building web applications",
            "c) A programming language developed by Microsoft",
            "d) A database management system"
        ]
    },
    {
        name: "question_5",
        type: "list",
        message: "what is the national language of pakistan?",
        choices: ["a)urdu", "b)english"]
    }
]);
let score = 0;
// Question 1
switch (quiz.question_1) {
    case "d) struct": // Corrected spelling and format
        console.log("1. correct");
        ++score;
        break;
    default:
        console.log("1. incorrect");
        break;
}
// Question 2
switch (quiz.question_2) {
    case "a) tsc": // Corrected spelling and format
        console.log("2. correct");
        ++score;
        break;
    default:
        console.log("2. incorrect");
        break;
}
// Question 3
switch (quiz.question_3) {
    case "a).ts": // Corrected format
        console.log("3. correct");
        ++score;
        break;
    default:
        console.log("3. incorrect");
        break;
}
// Question 4
switch (quiz.question_4) {
    case "a) super set of JavaScript": // Corrected spelling and format
        console.log("4. correct");
        ++score;
        break;
    default:
        console.log("4. incorrect");
        break;
}
switch (quiz.question_5) {
    case "a)urdu":
        {
            console.log("5 correct");
        }
        break;
    default:
        console.log("5 incorrect");
        break;
}
console.log(score);
