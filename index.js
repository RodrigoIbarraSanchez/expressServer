const express = require("express");
const fs = require("fs");
const Container = require("./contenedor");
const productos = require("./productos.js");

const app = express();
const port = process.env.PORT || 8080;

let con1 = new Container("./productos.txt");

con1.save(productos);
//con1.deleteAllProducts();

app.listen(port, () => {
  console.log("Server run on port " + port);
});
