

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
  For installation of the dependencies, please run the following command in the terminal:
  \`\`\`
  ${data.to_install}
  \`\`\`

  ## Usage
  To start the application, please type the following command in the terminal:
  \`\`\`
  ${data.to_use}
  \`\`\`

  ## Credits
  ${data.credits}

  ## Badges
  ${data.packages_used}
 
  ## Technologies used
  ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
  ![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![JQUERY](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
  ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![SQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
  ![MongoDB](	https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  ![NPM](http://img.shields.io/badge/npm-yellow?style=for-the-badge&logo=NPM)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
  ![EXPRESS.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
  
  ## Features
  ${data.features}

  ## License 
  ![License badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Copyright 
  ${data.copyright}

  ## How to Contribute
  ${data.programmer}<br />
  ${data.author_position}<br />
  [${data.gh_username.toUpperCase()}](https://github.com/${data.gh_username}) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)<br />
  ${data.email}

  ## Testing
  For running the tests on application, please run the following command:
  \`\`\`
  ${data.to_test}
  \`\`\`

`;
}

module.exports = generateMarkdown;
