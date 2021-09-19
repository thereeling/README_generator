// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string





// TODO: Create a function to generate markdown for README


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
