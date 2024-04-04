#!/usr/bin/env node


// const fs = require('fs');       //file system
// const http = require('http');   //HTTP Server
const express = require('express');     //Express Server
const { generateHtmlContent } = require('./setup');

const app = express();

const port = 3030;

// function generateHtmlContent() {
//     // ... Logic to generate dynamic HTML content
//     return `${htmlContent}`; // Dynamically generated HTML
//   }
  
  // Create a server and listen on port 3030
  const myServer = http.createServer((req, res) => {
    if (req.url === '/') {
      const dynamicHtml = generateHtmlContent(); // Generate content
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(dynamicHtml);  // Serve the generated content
      res.end();
    }
  });


app.get('/', (req, res) => {
    const dynamicHtml = generateHtmlContent; 
    res.send(dynamicHtml);
})

  
myServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});