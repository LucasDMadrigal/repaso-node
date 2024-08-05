// import express from 'express';

const express = require('express');

const app = express();
const port = 3000; 

const usuarios = [
    {
        id: 1,
        nombre: 'Pedro',
        apellido: 'Perez',
        edad: 25,
        correo: 'perez@perez'
    },
    {
        id: 2,
        nombre: 'Juan',
        apellido: 'Gonzalez',
        edad: 30,
        correo: 'gonzalez@gonzalez'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/bienvenido', (req, res) => {
    res.send(`<h1 style="color:blue">Welcome to the jungle!</h1>`);
});

app.get('/usuario', (req, res) => {
    res.send({
        nombre: 'Pedro',
        apellido: 'Perez',
        edad: 25,
        correo: 'perez@perez'
    });
});

app.get('/usuarios', (req, res) => {
    res.send(usuarios);
});


app.get('/saludo-personalizado/:nombre', (req, res) => {
    res.send(`<h1 style="color:blue">Welcome to the jungle, ${req.params.nombre}</h1>`);
});

app.get('/usuarios/:id', (req, res) => { 
    const id = req.params.id;
    const usuario = usuarios.find(u => u.id == id);
    if(!usuario) res.status(404).send('Usuario no encontrado');
    res.send(usuario);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});