// Node modules and packages
const inquirer = require('inquirer');
const fs = require('fs');
// Grabbing module from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');
// Array of questions prompted for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of you project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of you project. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter an installation guide!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter instructions for usage!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'collabAsk',
            message: 'Did you work with any collaborators?',
            default: true
        },
        {
            type: 'input',
            name: 'collab',
            message: 'Provide the name and GitHub profile for each collaborator.',
            when: ({ collabAsk }) => collabAsk
        },
        {
            type: 'confirm',
            name: 'thirdPartyAsk',
            message: 'Did you use any third-party assets?',
            default: true
        },
        {
            type: 'input',
            name: 'assets',
            message: 'Provide the links to the third party assets.',
            when: ({ thirdPartyAsk }) => thirdPartyAsk
        },
        {
            type: 'confirm',
            name: 'tutorialAsk',
            message: 'Did you use any tutorials?',
            default: true
        },
        {
            type: 'input',
            name: 'tutorial',
            message: 'Provide the links to the tutorials',
            when: ({ tutorialAsk }) => tutorialAsk
        },
        {
            type: 'confirm',
            name: 'licenseAsk',
            message: 'Would you like to include a license for your project?',
            default: true
        },
        {
            type: 'list',
            message: 'Please select a license that fits your needs.',
            name: 'license',
            choices: ['AGPL-3.0-or-later', 'GPL-3.0-or-later', 'LGPL-3.0-or-later', 'MPL-2.0', 'Apache-2.0', 'MIT', 'BSL-1.0', 'Unlicense'],
            when: ({licenseAsk}) => licenseAsk
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please include tests for your application. (Any code snippets should be wrapped in triple backticks before and after "```". Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please include a test for your application!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'ghub',
            message: 'Please provide your GitHub username, it will be added as a link in the "Questions" section.',
            validate: ghubInput => {
                if (ghubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address, it will be added as a link in the "Questions" section.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            } 
        }
    ])
    .then(readmeData => {
        return readmeData;
    });
};



// Function that creates the README file using the data from the user inputs
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
        if (err) {
            reject(err);
            return;
        }

        resolve({
            ok: true,
            message: console.log('File Created!')
        });
    });
    });
};


// Function that chains promises and callbacks, generating the README first, then creating the README file, and finally, a catch in case there are errors
    promptUser()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(readmeData =>{
        return writeToFile(readmeData);
    })
    .catch(err => {
        return console.log(err);
    })