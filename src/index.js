const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;

let contador = 0;

// RUTAS
app.get("/", (req, res) => {
    res.send('<h1 style="coor:blue;">Bienvenid@ a mi Servidor con Node & Express JS!</h1>');
});

app.get("/productos", (req, res) => {
    fs.readFile("./src/products.txt", "utf-8", (err, data) => {
        if (err) throw err;
        res.send({data});
    });
});

app.get("/productoRandom", (req, res) => {
    fs.readFile("./src/products.txt", "utf-8", (err, data) => {
        if (err) throw err;
        const productos = JSON.parse(data);
        const productsLength = Object.keys(productos).length;
        const randomProduct = productos[Math.floor(Math.random()*productsLength)];
        res.send(randomProduct);
        //console.log(Math.floor(Math.random()*data.length));
    });
});


app.listen(port, () => {
    console.log("Server run on port " + port);
});