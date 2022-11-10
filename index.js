// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer= require('inquirer');

const generate_markdown= require('./utils/generateMarkdown');

function require_input(input_text){
    if(input_text){
      return true
    }
    return 'Please provide an answer, a response is required'
 }

// TODO: Create an array of questions for user input
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
    default: 'This project is a command line interface application that prompts the user to answer a series of brief questions, regarding a project and then generates a high quality readme file using Node.js and using the package inquirer. I developed this application during the ninth week of the coding boot camp at UT Austin. Date of publication: 11/09/2022'
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
   
    // todo: add Credits section

    // License
    {
    type: 'checkbox',
    name: 'license',
    message: 'Please make a selection for license',
    choices: 
    ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
    },

    // Copyright
    {
    type: 'input',
    name: 'copyright',
    message: 'Please enter copyright information',
    default:'Copyright 2022 Tim Fleck'
    },

    // todo: make sure this all fits in badges section
    // Obtaining technologies used for badges
    {
    type: 'checkbox',
    name: 'techs_used',
    message: 'Please check mark if any of the technologies were used in this project',
    choices: [
    // todo: add/remove languages
    'HTML', 
    'CSS', 
    'Bootstrap', 
    'Node.js', 
    'Javascript', 
    'jQuery',
    'React.js',
    'Express.js', 
    'Heroku', 
    'Git/Bash-Version control', 
    'Mongo DB',
    'MySQL',
    'Index DB',
    ],
    },

    // Packages used
    {
    type: 'checkbox',
    name: 'packages_used',
    message: 'Please check mark if any of the following node packages were used in this project',
    choices: [
    'Inquirer', 
    'Express', 
    'MySQL', 
    'Axios', 
    'Express-handlebar',
    'Sequelize',
    'Passport/Passport Local',
    'Mongoose',
    'Webpack',
    ],
    },

    // Obtaining a list of files in this repository - using editor
    {
    type: 'checkbox',
    name: 'file_list',
    message: 'Please check mark if any of the following files were created in this project',
    choices: ['index.html', 'server.js', 'index.js', 'style.css', 'script.js', 'readme.md', 'markdown.js'],
    },

    // Obtaining a list of featured Programer skills utilized in the creation of this project- using editor
    {
    type: 'editor',
    name: 'skills_list',
    message: 'Please highlight any programing features or skills utilized in this project',
    default:'This project demonstrates command over the following programing skills: '
    },

    // todo: is this required???
    // User story
    {
    type: 'editor',
    name: 'user_story',
    message:'Please enter text for user story' ,
    default:'I am a developer and I would like an app that can simplify the process of generating a high quality readme.'
    },

    // todo: do we need a features section???


    // todo: How to contribute section
    // Obtaining author Contact information
    {
    type: 'input',
    name: 'programmer', // this is the name of the variable how the response is stored
    message: "Please enter the programmer's name",
    },

    {
    type: 'input',
    name: 'author_position',
    message: "Please enter the author's current position",
    default:'Full-Stack Developer'
    },

    // gitHub name
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

    // Testing
    {
    type: 'input',
    name: 'to_test',
    message: 'Please specify the command for running any test for this application',
    default: 'npm test'
    },
 
    ];

// TODO: Create a function to write README file
function write_file(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error){
            return console.log(error)
        } 
    });
    };

// TODO: Create a function to initialize app
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
