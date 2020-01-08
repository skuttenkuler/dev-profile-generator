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
    - Create a User with Firebase method
    - Save user information to collection in Firestore
    '''function RenderPdf() {
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
        conversion.kill();'''
    
    });

# Authors
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)