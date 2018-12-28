const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//BODYPARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//SIGNUP ROUTE
app.post('/signup', (req, res) => {
    const { firstName, lastName, email } = req.body;

        //FIELD VALIDATION
        if (!firstName || !lastName || !email) {
            res.redirect('/fail.html')
            return;
        } else if (firstName || lastName || email) {
            res.redirect('/success.html')
        }


const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server started on ${PORT}`));