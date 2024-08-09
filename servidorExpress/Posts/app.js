// import express from 'express';

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = []

app.get('/api', (req, res) => {
    res.send("users: " + users.length);
});

app.post('/api/user', (req, res) => {

    let user = req.body;

    if (!user.firstName || !user.lastName) {
        res.status(400).send("Bad Request");
    }

    users.push(user);
    res.status(201).send("user created");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})