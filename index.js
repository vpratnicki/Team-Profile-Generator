const inquirer = require("inquirer");
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./src/generate-site');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

// have and array to store my employees
let employees = [];

const promptManager = (managerData) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the manager's ID number",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the manager's office number",
    },
  ]);
};

const promptContinue = () => {
  return inquirer.prompt([
      {
        type: "confirm",
        name: "employee",
        message: "Would you like to add a new employee?",
        default: true
      },
      {
        type: "list",
        name: "continueResults.choice",
        message: "Choose which type of employee to add:",
        choices: ["engineer", "intern"],
        when: ({ confirmAddEmployee }) => confirmAddEmployee,
      },
    ])
.then(handleContinue());
};

const handleContinue = (continueResults) => {
  // if they choose engineer
  if (continueResults.choice === "engineer") {
    // -- prompt for engineer
    promptEngineer().then((engResults) => {
      // -- then create an eng object
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.gitHub
      );
      // -- add it to the array
      employees.push(engineer);
      // -- prompt the user if they want to add an intern or add and engineer or quit
      promptContinue();
      // .then(handleContinue);
    });
    // if they choose intern
  } else if (continueResults.choice === "intern") {
    // -- prompt for intern
    promptIntern().then((intResults) => {
      // -- then create an eng object
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      // -- add it to the array
      employees.push(intern);

      promptContinue();
      // .then(handleContinue);
    });
  } else {
    return employees;
  }

  // if they choose quit
  // -- generate html
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineer.name",
      message: "Enter the Engineer's name?",
    },
    {
      type: "input",
      name: "engineer.id",
      message: "Enter the Engineer's ID number",
    },
    {
      type: "input",
      name: "engineer.email",
      message: "Enter the Engineer's email",
    },
    {
      type: "input",
      name: "engineer.github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "intern.name",
      message: "Enter the intern's name",
    },
    {
      type: "input",
      name: "intern.id",
      message: "Enter the intern's ID number",
    },
    {
      type: "input",
      name: "intern.email",
      message: "Enter the intern's email",
    },
    {
      type: "input",
      name: "intern.school",
      message: "Enter the intern's school",
    },
  ]);
};

promptManager()
.then((managerData) => {
  console.log(managerData);
  const manager = new Manager(
    managerData.name,
    managerData.id,
    managerData.email,
    managerData.officeNumber
  );

  // add our manager to the list of employees
  employees.push(manager);

  // prompt the user if they want to add an intern or add and engineer or quit
  promptContinue()
  .then(handleContinue);
});


