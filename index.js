const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const html = require('./html.js');
const electron = require('electron-html-to');


//set up inquirer to get information needed from user
inquirer.prompt([
    {
        type:'input',
        name: 'username',
        message: 'What is your Github username?  '
    },
    {
        type: 'list',
        name: 'favColor',
        message: 'What is your favorite color?  ',
        choices: ['Blue', 'Green', 'Red', 'Yellow', 'Orange', 'Purple']
    }

]).then(responses => {
    username = responses.name;
    usercolor = responses.favColor;
    
})