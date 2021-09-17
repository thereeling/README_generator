// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string





// TODO: Create a function to generate markdown for README


module.exports = readmeData => {

  const{license} = readmeData; 
  function renderLicenseBadge() {
    if (!license) {
      return '';
    }
    if (license.includes('-')){
      return `
![badge](https://img.shields.io/badge/license-${license.replace(/-/g, '--')}-brightgreen)
      `
    }
  
    return `
![badge](https://img.shields.io/badge/license-${license}-brightgreen)
    `;
  };
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink() {
    if (!license){
    return '';
    }
  
  return `
https://spdx.org/licenses/${license}.html
  `;
  };
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection() {
    if (!license){
      return '';
      }
    return `
## License  
${renderLicenseLink(license)}
    `
  };

  return `# ${readmeData.title}  

${renderLicenseBadge()}

## Description  

${readmeData.description}   

## Table of Contents  

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)  

## Installation  

${readmeData.installation}  

## Usage  

${readmeData.usage}  

## Credits  

${readmeData.collab}
${readmeData.assets}
${readmeData.tutorial}  

${renderLicenseSection()}


## Tests  

${readmeData.test}  

## Questions?  

* GitHub Profile: https://github.com/${readmeData.ghub}
* Email me at: ${readmeData.email}  


`;
};
