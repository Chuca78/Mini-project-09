
const fs = require ('fs');
const inquirer= require('inquirer');

const generate_markdown= require('./utils/generateMarkdown');

function require_input(input_text){
    if(input_text){
      return true
    }
    return 'Please provide an answer, a response is required'
 }

//  creates an array of user questions
const questions = [
    // Project title
    {
    type: 'input',
    name: 'title',
    message: 'Please enter the project name',
    default:'Automated READme Generator'
    },

    // Project description
    {
    type: 'editor',
    name: 'about_project',
    message: 'Please enter details about your project in the notepad',
    default: 'This project is a command line interface application that prompts the user to answer a series of questionss and then generates a high quality readme file using Node.js and using the package inquirer.'
    },

    // Installation 
    {
    type: 'input',
    name: 'to_install',
    message: 'Please specify the command for installation',
    default: 'npm i inquirer@8.2.4'
    },

    //  Usage
    {
    type: 'input',
    name: 'to_use',
    message: 'Please specify the command for running this application',
    default: 'node index'
    },
   
    // Credits section
    {
    type: 'editor',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    default: 'The list of third party components used in this project, with due credits to their authors and license terms.'
    },


    // License
    {
    type: 'checkbox',
    name: 'license',
    message: 'Please make a selection for license',
    choices: 
    ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
    },

    // Badges for technologies
    {
    type: 'checkbox',
    name: 'techs_used',
    message: 'Please check mark if any of the technologies were used in this project',
    choices: [
    'HTML', 
    'CSS', 
    'Bootstrap', 
    'Node.js', 
    'Javascript', 
    'jQuery',
    'React',
    'Express.js', 
    'Heroku', 
    'Git/Bash-Version control', 
    'Mongo DB',
    'MySQL',
    ],
    },

    // list of features of this project
    {
    type: 'editor',
    name: 'features',
    message: 'Please highlight any features or skills utilized in this project',
    default:'This project use the following programing skills to create a quality READme: node.js, inquirer'
    },

    // How to contribute section
    {
    type: 'input',
    name: 'programmer', 
    message: "Please enter the programmer's name",
    },

    {
    type: 'input',
    name: 'author_position',
    message: "Please enter the author's current position",
    default:'Full-Stack Developer'
    },

    {
    type: 'input',
    name: 'gh_username',
    message: "Please enter your current Git-Hub username",
    validate: require_input,
    },

    {
    type: 'input',
    name: 'email', 
    message: "Please enter the author's e-mail",
    },

    // Copyright
    {
    type: 'input',
    name: 'copyright',
    message: 'Please enter copyright information',
    default:'Copyright 2022 Tim Fleck'
    },

    // Testing
    {
    type: 'input',
    name: 'to_test',
    message: 'Please specify the command for running any test for this application',
    default: 'npm test'
    },
 
    ];

//  function to write README file
function write_file(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error){
            return console.log(error)
        } 
    });
    };

//  function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){
        console.log(response)
        const markdown= generate_markdown(response);
        console.log(markdown);
        write_file('readme.md', markdown)
    })
    };
    
// Function call to initialize app
init();
