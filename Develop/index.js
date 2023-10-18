// TODO: Include packages needed for this application
const iniquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateReadme = ({title, description, installation, usage, contributing, tests}) =>
`# ${title}

# Table of Contents

## [Description] (#description)
## [Installation] (#installation)
## [Usage] (#usage)
## [Contributing] (#contributing)
## [Tests] (#tests)
## [License] (#license)

# Description
${description}
# Installation
${installation}
# Usage
${usage}
# Contributing Guidelines
${contributing}
# Tests
${tests}

`;

//const questions = []; 
iniquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Enter a project description:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
      },
])
.then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created ReadMe.'));
});

// TODO: Create a function to write README file
/*function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(`Error writing ${fileName}: ${err}`);
        } else {
            console.log(`Successfully created ${fileName}`);
        }
    })
}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();*/
