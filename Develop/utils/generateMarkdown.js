// Creating a module that exports README file content after a set of functions based on the user input.

module.exports = readmeData => {

  const{license, collab, assets, tutorial} = readmeData; 

  const renderCreditsTOCLink = () =>{
    if(!collab && !assets && !tutorial){
      return '';
    }
    if(collab || assets || tutorial){
      return `
* [Credits](#credits)
      `;
    }
  };

  const renderLicenseTOCLink = () => {
    if(!license){
      return '';
    }
    return `
* [License](#license)
    `;
  };

  const renderCollab = () => {
    if(!collab){
      return '';
    }
    return `
Collaborators:  ${collab}
    `;
  };

  const renderAssets = () => {
    if(!assets){
      return '';
    }
    return `
Assets used:  ${assets}
    `;
  };

  const renderTutorial = () => {
    if(!tutorial){
      return '';
    }
    return `
Tutorials used:  ${tutorial}
    `;
  };

  const renderCreditsSection = () => {
    if(!collab && !assets && !tutorial){
      return '';
    }
    if(collab || assets || tutorial){
      return `
## Credits  

${renderCollab(collab)}
${renderAssets(assets)}
${renderTutorial(tutorial)}
      `
    };
  };

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
  
  
  function renderLicenseLink() {
    if (!license){
    return '';
    }
  
  return `
https://spdx.org/licenses/${license}.html
  `;
  };
  

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
${renderCreditsTOCLink()}
${renderLicenseTOCLink()} 

## Installation  

${readmeData.installation}  

## Usage  

${readmeData.usage}  

${renderCreditsSection()}

${renderLicenseSection()}


## Tests  

${readmeData.test}  

## Questions?  

* GitHub Profile: https://github.com/${readmeData.ghub}
* Email me at: ${readmeData.email}  


`;
};
