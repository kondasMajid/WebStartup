#!/usr/bin/env node

const fs = require('fs');
const http = require('http');

// This section defines a cli object to specify the directories and files to create. 
//It iterates through the object to create the src and public directories with empty 
//files (index.js, index.html, style.css, and script.js).

function createProjestStructure(){
    const directories = {
        'src': ['index.js'], 
        'public' : ['index.html','style.css', 'script.js']
    }
    Object.entries(directories).forEach(([dir, files]) => {
        fs.mkdirSync(dir, {recursive: true});
        files.forEach(file => fs.writeFileSync(`${dir}/${file}`, ''))
    })

    console.log('Page structure created successfully');
}


function generateHtmlContent(){
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Website Title</title>
        <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <h1>Welcome to My Website!</h1>
        <p>This content was generated dynamically!</p>
        </body>
        </html>
    `;
    return htmlContent;
    
}
// console.log('Projects Structure created succesffuly')




module.exports = { createProjestStructure, generateHtmlContent}; 



// const myServer = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile('public/index.html', (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Error loading html');
//             }else{
//                  res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.write(data)
//                 // res.write('<h1>Hello World</h1>');
//                  res.end();
//             }
//         })

//         fs.writeFile('public/index.html', htmlContent, err => {
//             if (err) {
//                 console.error('Error creating index.html', err)
//             }else{
//                 console.log('Index page created successffully');
//             }
//         })
//     }
   
    
// });