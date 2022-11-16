

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.about_project}
 
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Badges](#badges)
  - [License](#license)
  - [Copyright](#copyright)
  - [Testing](#testing)

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

  ## License 
  ![License badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## How to Contribute
  ${data.programmer}<br />
  ${data.author_position}<br />
  [${data.gh_username.toUpperCase()}](https://github.com/${data.gh_username}) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)<br />
  ${data.email}

  ## Copyright 
  ${data.copyright}

  ## Testing
  For running the tests on application, please run the following command:
  \`\`\`
  ${data.to_test}
  \`\`\`

`;
}

module.exports = generateMarkdown;
