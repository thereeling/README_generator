// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project-title',
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
           type: 'confirm',
           name: 'TOC',
           message: 'Would you like to include a Table of contents? (if no input, one is created)',
           default: true 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter and installation guide!');
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
            name: 'collabName',
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
            name: 'thirdPartyName',
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
            name: 'tutorialName',
            message: 'Provide the links to the tutorials',
            when: ({ tutorialAsk }) => tutorialAsk
        },
        {
            type: 'list',
            message: 'Please select a license that fits your needs. (Required)',
            name: 'licenseList',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license! If unsure, choose "MIT License".');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testInput',
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
            name: 'ghubName',
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
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) {
            rejects(err);
            return;
        }

        resolve({
            ok: true,
            message: 'File created!'
        });
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
