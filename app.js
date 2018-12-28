const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server started on ${PORT}`));