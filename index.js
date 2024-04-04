#!/usr/bin/env node


const fs = require('fs'); 
const http = require('http');
const express = require('express');
const network = require('')


const app = express();

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

const myServer = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('public/index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading html');
            }else{
                 res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data)
                // res.write('<h1>Hello World</h1>');
                 res.end();
            }
        })

        fs.writeFile('public/index.html', htmlContent, err => {
            if (err) {
                console.error('Error creating index.html', err)
            }else{
                console.log('Index page created successffully');
            }
        })
    }
   
    
});

myServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});