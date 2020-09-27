var fs = require("fs");
var inquirer = require("inquirer");
var generateHTML = require("./generateHTML");

var questions = [
  "What is your name?",
  "Where are you from?",
  "What is your favorite hobby?",
  "Enter your github username:",
  "Enter your linkedin URL",
];

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "name",
      },
      {
        type: "input",
        message: questions[1],
        name: "home",
      },
      {
        type: "input",
        message: questions[2],
        name: "hobby",
      },
      {
        type: "input",
        message: questions[3],
        name: "github",
      },
      {
        type: "input",
        message: questions[4],
        name: "linkedin",
      },
    ])
    .then(function (data) {
      //   console.log(data.name);
      writeToFile("index.html", generateHTML(data));
    })
    .catch((err) => {
      console.log(err);
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log("error. error. error");
    }
    console.log("successfully did something...");
  });
}

init();
