exports.RenderContent = (data, color, stars) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profile</title>
    <style>
             
             h1, h4{
                 padding: 0;
                 margin: 0; 
             }
             .Blue{
                 background-color:#0000FF;
                 color:#fff;
                 border-color:#0000FF;
             }
             .Green{
                 background-color:#00ff00;
                 color:#fff;
                 border-color:#00ff00;
             }
             .Red{
                 background-color:#ff0000;
                 color:#fff;
                 border-color:#ff0000;
             }
             .Yellow{
                 background-color: #FFFF00;
                 color:#fff;
                 border-color:#FFFF00;
             }
             .Orange{
                 background-color: #FFA500;
                 color:#fff;
                 border-color:#FFA500;
             }
             .Purple{
                 background-color: #6a0dad;
                 color:#fff;
                 border-color:#6a0dad;
             }
             body{
                 margin: 0;
                 padding: 0;
                 background-color: grey;
             }
             .container{
             
                height: 27.94cm;
                width: 21.59cm;
                margin-top: 100px;
             }
             header{
                 text-align: center;
             }
             header h1{
                font-size: 40px;
                color: #fff;
                text-shadow: 2px 2px black;
            }
            .hi{
               
                padding-bottom:20px;
                
            }
             .image{
                 border-radius:50%;
                 transform: translateY(-50%);
                 position: relative;
                 width: 250px;
                 height: auto;
               
                 box-shadow: 0 0 20px rgb(255, 255, 255);
             }
             hr{
                 background-color: black;
                 box-shadow: 0 0 20px rgb(255, 255, 255);
                 height: 2px;
                 width: 80%;
                 margin-bottom: 15px;
             }
             .bio{
                 margin-left:70px;
                 text-align: center;
                 width: 80%;
             }
             p{
                font-size: 17px;
                color: #fff;
                text-shadow: 2px 2px black;
             }
             .color{
                background-color: antiquewhite;
            }
            .userLinks a{
                text-decoration: none;
                color: #fff;
                font-size: 30px;
                text-shadow: 1px 1px black;
                padding: 20px;
                
            }
            .userLinks{
                text-align: center;
                margin-bottom:15px;
            }
            .stats{
                display: flex;
                justify-content: center;
                width: 100%;
                color: #fff;
                font-size: 20px;
                text-shadow: 1px 1px black;
                
            }
            table{
                border-spacing: 25px;

            }
            #repos{
                height: 100px;
                width: 325px;
                text-align: center;
                
            }
            #followers{
                height: 100px;
                width: 325px;
                text-align: center;
               
            }
            #stars{
                height: 100px;
                width: 325px;
                text-align: center;
            
            }
            #following{
                height: 100px;
                width: 325px;
                text-align: center;
                
            }
         </style>
     </head>
             <body>
                 <div class="container">
        
                 <header class="${color}">
                     <img class="image"src="${data.avatar_url}">
                        <h1 class="hi">Hello,</h1>
                        <h1>my name is ${data.name}</h1>
                        <hr>
                         <div class="userLinks">
                            <a href="#">${data.location}</a>
                            <a href="${data.html_url}">github</a>
                            <a href="${data.blog}">blog</a>
                        </div>
                 </header>
                 <div class="bio">
                     <p>${data.bio}</p>
                 </div>
                 <div class="stats">
                     <table>
                        <tr>
                             <td id="repos" class="${color}">
                                 <h4>Public Repos:</h4>
                                 <p>${data.public_repos}</p>
                             </td>
                             <td id="followers" class="${color}">
                                    <h4>Followers:</h4>
                                    <p>${data.followers}</p>
                                </td>
                        </tr>
                        <tr>
                            <td id="stars" class="${color}">
                                    <h4>Stars:</h4>
                                    <p>${stars.length}</p>
                                </td>
                            <td id="following" class="${color}">
                                    <h4>Following:</h4>
                                    <p>${data.following}</p>
                                </td>

                         </tr>
                     </table>
                 </div>
        </div>
</body>
</html>`;

}