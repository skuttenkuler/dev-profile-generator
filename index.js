const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const html = require('./html.js');
const electron = require('electron-html-to');

var userName;
var color;
var dataContent;

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
    userName = responses.username;
    color = responses.favColor;
    //console.log(userName,color)
    getProfile();
});

//get Github data
//create function
function getProfile() {
    //set up query address
    //perform axios call to get user data
    var queryData = "http://api.github.com/users/"+ userName;
    axios.get(queryData).then(response => {
        var data = response.data;
        console.log(data.location)
        // then second call to get stars data
        queryData += "/starred";
        axios.get(queryData).then(starsRes => {
             var stars = starsRes.data;
             //console.log(stars)
             dataContent = html.RenderContent(data, stars, color);
             RenderPdf();
        }); 
    });
}
var electronPDF = electron({
    converterPath: electron.converters.PDF,
    allowLocalFilesAccess: true,
});
//function to render a PDF
function RenderPdf() {
    console.log("Writing file....");
    electronPDF({
        html: dataContent,
        pdf: {
            pageSize: 'Letter',
            printBackground: true
        }
    }, (error, result) => {
        if(error) {
           
            throw error;
        }
        result.stream.pipe(fs.createWriteStream('./'+ userName +'.pdf'));
        console.log("Profile Generated!");
        electronPDF.kill();
    
    });

}