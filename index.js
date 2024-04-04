#!/usr/bin/env node


const fs = require('fs');       //file system
const http = require('http');   //HTTP Server
const express = require('express');     //Express Server

const app = express();


// This section defines a cli object to specify the directories and files to create. 
//It iterates through the object to create the src and public directories with empty 
//files (index.js, index.html, style.css, and script.js).

const cli = {
    'src': ['index.js'], 
    'public' : ['index.html','style.css', 'script.js']
}

Object.entries(cli).forEach(([dir, files]) => {
    fs.mkdirSync(dir, {recursive: true});
    files.forEach(file => fs.writeFileSync(`${dir}/${file}`, ''))
})


console.log('Projects Structure created succesffuly')

const port = 3030;


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

function generateHtmlContent() {
    // ... Logic to generate dynamic HTML content
    return `${htmlContent}`; // Dynamically generated HTML
  }
  
  const myServer = http.createServer((req, res) => {
    if (req.url === '/') {
      const dynamicHtml = generateHtmlContent(); // Generate content
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(dynamicHtml);  // Serve the generated content
      res.end();
    }
  });

myServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});