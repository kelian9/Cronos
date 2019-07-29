const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const users = require('./users').User;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/users', (req,res) => {
    console.log(req.body);
    if (!req.body) return res.sendStatus(400);
    let data = JSON.stringify(new users(req.body));
    fs.appendFile('users.json', data + `,
    `, (err) => {
        if(err) throw new Error(err);
    });
    res.end();
});

app.listen(3000);