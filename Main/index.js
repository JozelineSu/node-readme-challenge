// packages needed for this application
const iniquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// ReadMe file markdown
const generateReadme = ({title, description, installation, usage, contributing, tests, license, github, email}) =>
`# ${title}

## Table of Contents

[Description] (#description)
[Installation] (#installation)
[Usage] (#usage)
[Contributing] (#contributing)
[Tests] (#tests)
[License] (#license)

## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contributing Guidelines
${contributing}
## Tests
${tests}
${markdown.generateMarkdown(license)}
## Questions
GitHub: ${github}
Email: ${email}
`;

// Prompts for user to answer
const licenses = ['MIT', 'Apache', 'GPL'];
 
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
      {
        type: 'list',
        message: 'Please choose a license:',
        choices: licenses,
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
])
.then((answers) => {
    const readmeContent = generateReadme(answers); // makes ReadMe file with user input

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created ReadMe.'));
});
