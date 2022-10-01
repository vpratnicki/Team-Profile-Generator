const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./src/generate-site');
// const Manager = require('./lib/Manager');

const promptManagerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager.name',
            message: "Enter the team manager's name"
        },
        {
            type: 'input',
            name: 'manager.id',
            message: "enter the team manager's ID number"
        },
        {
            type: 'input',
            name: 'manager.email',
            message: "enter the team manager's email address"
        },
        {
            type: 'input',
            name: 'mananager.officeNumber',
            message: "enter the team manager's office number"
        }
    ])
};

const promptAdditionalEmployee = employeeData => {
    console.log(`
  =================
  Add a Employee
  =================
  `);



  promptManagerQuestions()
  .then(promptAdditionalEmployee)
  .then(employeeData => {
    console.log(employeeData);

    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
 });
};

