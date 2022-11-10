

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.about_project}
 
  ## Table of Contents
  - [User Story](#user-story)
  - [Technologies used](#technologies-used)
  - [Key files in the repository](#key-files-in-the-repository)
  - [Packages used](#packages-used)
  - [Programming Competencies](#programming-competencies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [License](#license)
  - [Copyright](#copyright)

  ## Installation
  For installation of the dependencies, please run the following command in the terminal
  \`\`\`
  ${data.to_install}
  \`\`\`
  ## Usage
  To start the application, please type the following command in the terminal
  \`\`\`
  ${data.to_use}
  \`\`\`

  // todo: usage here
  ##Usage



  // todo: is this section required???
  // todo: this should be badges
  ## Packages Used
  ${data.packages_used}
  ## User Story
  ${data.user_story}
  ## Technologies used
  // todo: fix the default images
  // todo: add/remove packages and languages
  ![Javascript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)
  ![Bootstrap](https://img.shields.io/badge/Bootstrap-blueviolet?style=for-the-badge&logo=bootstrap)
  ![Node](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=Node.js)
  ![HTML](https://img.shields.io/badge/HTML-informational?style=for-the-badge&logo=html5)
  ![JQUERY](https://img.shields.io/badge/jquery-purple?style=for-the-badge&logo=jquery)
  ![CSS](https://img.shields.io/badge/css-darkgreen?style=for-the-badge&logo=css3)
  ![SQL](https://img.shields.io/badge/MYSQL-darkblue?style=for-the-badge&logo=sqlite)
  ![MongoDB](http://img.shields.io/badge/mongo-dB-black?style=for-the-badge&logo=mongodb)
  ![NPM](http://img.shields.io/badge/npm-yellow?style=for-the-badge&logo=NPM)
  ![React](http://img.shields.io/badge/React-black?style=for-the-badge&logo=react)
  ![Heroku](http://img.shields.io/badge/Heroku-purple?style=for-the-badge&logo=heroku)
  ![webpack](http://img.shields.io/badge/webpack-grey?style=for-the-badge&logo=webpack)
  ![EXPRESS.js](http://img.shields.io/badge/express-JS-yellow?style=for-the-badge&logo=experts-exchange)
  
  ## Applied Programming Skills
  ${data.skills_list}
  ## Key files in the repository
  ${data.file_list}

  
  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  // function renderLicenseBadge(license) {}
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  // function renderLicenseSection(license) {}


  ## License 
  ![License badge](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Credits and Copyright 
  ${data.copyright}

  ## How to Contribute
  ${data.programmer}<br />
  ${data.author_position}<br />
  [${data.gh_username.toUpperCase()}](https://github.com/${data.gh_username}) ![Github](http://img.shields.io/badge/github-black?style=flat&logo=github)<br />
  ${data.email}

  ## Testing
  For running the tests on application, please run the following commad
  \`\`\`
  ${data.to_test}
  \`\`\`

`;
}

module.exports = generateMarkdown;
