const express = require("express");
const fs = require("fs");
const Container = require("./contenedor");
const productos = require("./productos.js");
const productsRoutes = require("./routes/productos");

const app = express();
const port = process.env.PORT || 8080;

// Estáticos
app.use("/static", express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let con1 = new Container("./productos.txt");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.get("/getAll", (req, res) => {
  res.send({ data: arr });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Información fue guardada 🚚");
});

// ROUTES
app.use("/productos", productsRoutes);

app.listen(port, () => {
  console.log("Server run on port " + port);
});
