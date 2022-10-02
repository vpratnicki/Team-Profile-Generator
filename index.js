const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./src/generate-site');
const Manager = require('./lib/Manager');

const promptManager = () => {
    return inquirer
      .prompt([{
        type: 'input',
        name: 'manager.name',
        message: "Enter the manager's name?"
      },
      {
        type: 'input',
        name: 'manager.id',
        message: "Enter the manager's ID number"
      },
      {
        type: 'input',
        name: 'manager.email',
        message: "Enter the manager's email"
      },
      {
        type: 'input',
        name: 'manager.officeNumber',
        message: "Enter the manager's office number"
      }
    ]);
};
  
  promptManager()
    .then(employeeData => {
      console.log(employeeData);
      // will be uncommented in lesson 4
      // const pageHTML = generatePage(portfolioData);
      // fs.writeFile('./index.html', pageHTML, err => {
      //   if (err) throw new Error(err);
      //   console.log('Page created! Check out index.html in this directory to see it!');
      // });
    });
  

