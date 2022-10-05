const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generatePage = require('./src/page-template');


// have an array to store my employees
const employees = [];

function promptManager() {
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
      message: "Enter the manager's office number"
    }
  ])
    .then(answers => {
    // -- then create an manger object
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    
    // -- add it to the array
    employees.push(manager);
    console.log(manager);
    addEmployees();
})
};

function addEmployees() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "employeeRole",
        message: "Would you like to add a new employeeto your team?",
        choices: ['Engineer', 'Intern', 'No thanks, no more emploeeys to add']
      }
    ])
    .then(choice => {
      switch (choice.employeeRole) {
        case 'Engineer':
          promptEngineer();
          break;
        case 'Intern':
          promptIntern();
          break;
        case 'No thanks, no more emploeeys to add':
          console.log(employees)
          finalTeam();
          break;
      }
    })
  };
function promptEngineer () {
  console.log(`
  ==============
  Add a Engineer
  ==============
  `);
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the Engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the Engineer's ID number",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the Engineer's email",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      }
    }
  ])
  .then(answers => {
    // -- then create an eng object
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    // -- add it to the array
    employees.push(engineer);
    console.log(engineer);
    // -- ask if new employees needed
    addEmployees()
  });
};

function promptIntern() {
  console.log(`
  =============
  Add an Intern
  =============
  `);
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's ID number",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school",
    }
  ]).then (answers => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    // -- add it to the array
    employees.push(intern);
    console.log(intern);
    // -- ask if new employees needed
    addEmployees();
  });
};

// -- funct that calls page-template.js (generatePage)
function finalTeam() {
  // const pageHTML = generatePage(employees)
  fs.writeFile('./dist/index.html', generatePage(employees), err => {
    if (err) throw err;
  
    console.log('HTML created');
  });

  fs.copyFile('./src/style.css', './dist/style.css', err => {
    if (err) throw err;
  
    console.log('style sheet created');
  });

};

promptManager()




