const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const html = require('./html.js');
const electron = require('electron-html-to');

//contstants
//username
var username
//favorite color
var userColor
//pdf
var pdf
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
    getProfile();
})

//get Github data
//create function
function getProfile() {
    //set up query address
    //perform axios call to get user data
    var queryData = "https://api.github.com/users/"+username;
    axios.get(queryData).then(response => {
        var data = response.data;
        console.log(data)
        // then second call to get stars data
        queryData += "starred";
        axios.get(queryData).then(starsRes => {
            var stars = starsRes.data;
            console.log(stars)
        }) 
    })
}