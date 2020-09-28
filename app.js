const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const renderHtml = require("renderHtml");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const questions = [
  "What is the team managers' name?",
  "What is the engineers' name?",
  "What is the interns' name?",
  "Enter team members' email address:",
  "Enter your team managers' office number:",
  "Enter the team members' github username:",
  "Enter your interns' school:",
  "What role would you like to add next?",
  "Enter team member ID number:",
];
const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// manager inquirer block
function determineNextRoll() {
  inquirer
    .prompt([
      {
        type: "list",
        message: questions[7],
        name: "role",
        choices: ["Team Manager", "Engineer", "Intern", "No more members"],
      },
    ])
    .then(function (data) {
      //   console.log(data.name);
      //   render(data);

      if (data.role === "Team Manager") {
        getInfoManager();
        // determineNextRoll();
      } else if (data.role === "Engineer") {
        getInfoEngineer();
        // determineNextRoll();
      } else if (data.role === "Intern") {
        getInfoIntern();
        // determineNextRoll();
      } else {
        render(team);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
determineNextRoll();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
function getInfoManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "name",
      },
      {
        type: "input",
        message: questions[8],
        name: "id",
      },
      {
        type: "input",
        message: questions[3],
        name: "email",
      },
      {
        type: "input",
        message: questions[4],
        name: "office",
      },
    ])
    .then(function (data) {
      //   console.log(data.name);
      //   render(data);
      const person = new Manager(data.name, data.id, data.email, data.office);
      console.log(person);
      team.push(person);
      console.log(team);
      determineNextRoll();
    })
    .catch((err) => {
      console.log(err);
    });
}
// getInfoManager();
// console.log(team);
// engineer inquirer block
function getInfoEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[1],
        name: "name",
      },
      {
        type: "input",
        message: questions[8],
        name: "id",
      },
      {
        type: "input",
        message: questions[3],
        name: "email",
      },
      {
        type: "input",
        message: questions[5],
        name: "github",
      },
    ])
    .then(function (data) {
      //   console.log(data.name);
      const person = new Engineer(data.name, data.id, data.email, data.github);
      team.push(person);
      console.log(team);
      determineNextRoll();
    })
    .catch((err) => {
      console.log(err);
    });
}
//intern inquirer block
function getInfoIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[2],
        name: "name",
      },
      {
        type: "input",
        message: questions[8],
        name: "id",
      },
      {
        type: "input",
        message: questions[3],
        name: "email",
      },
      {
        type: "input",
        message: questions[6],
        name: "school",
      },
    ])
    .then(function (data) {
      //   console.log(data.name);
      const person = new Intern(data.name, data.id, data.email, data.school);
      team.push(person);
      console.log(team);
      determineNextRoll();
    })
    .catch((err) => {
      console.log(err);
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
