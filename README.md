# Software Developer Profile Generator
Node.js Developer Profile Generator for Berkeley Bootcamp

# Prerequisites
* NodeJS

# Technologies
* HTML
* CSS
* Javascript
* NodeJS
    - Axios
    - Inquirer
    - Electron
    - Electron html to

# Installing
    ''' git clone https://github.com/skuttenkuler/dev-profile-generator.git '''

    Run ''' npm install ''' in the project folder.
# Preview
    
![Alt text](./assets/images/dev-gen.gif?raw=true "Preview Gif")

# Code Snippets
    - function that fires axios calls to get necessary data for profile then points our html template with data to      global variable for conversion. 

    function getProfile() {
    //set up query address
    //perform axios call to get user data
    var queryData = "http://api.github.com/users/"+ userName;
    axios.get(queryData).then(response => {
        var data = response.data;
        
        // then second call to get stars data
        queryData += "/starred";
        axios.get(queryData).then(starsRes => {
             var stars = starsRes.data;
             dataContent = html.RenderContent(data, stars, color);
             
             RenderPdf();
        }); 
    });
}

    - function that takes the html template with injected data then converts and creates the pdf file.
    function RenderPdf() {
    console.log("Writing file....");
    conversion({
        html: dataContent,
        pdf: {
            pageSize: 'Letter',
            printBackground: true
        }
    }, (error, result) => {
        if(error) {
           
            throw error;
        }
        result.stream.pipe(fs.createWriteStream('./'+userName+'.pdf'));
        console.log("Profile Generated!");
        conversion.kill();
    
    });

# Authors
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)