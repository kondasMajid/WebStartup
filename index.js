#!/usr/bin/env node

const express = require('express');     //Express Server
const { generateHtmlContent } = require('./setup');

const app = express();
const port = 3030;


app.get('/public/index.html', (req, res) => {
    const dynamicHtml = generateHtmlContent(); 
    res.send(dynamicHtml);
})

  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});