const express = require("express");
let productos = require("../productos");
const Container = require("../contenedor");
const fs = require("fs");
const { match } = require("assert");

const { Router } = express;

const router = new Router();

let c = new Container("./productos.txt");

// Devuelve todos los productos
router.get("/", (req, res, next) => {
  res.render("index", { data: productos });
  console.log(productos);
  next();
});

router.get("/form", (req, res, next) => {
  res.render("form");
});

router.post("/form", (req, res, next) => {
  try {
    let obj = {
      title: req.body.title,
      price: req.body.price,
      thumbnail: req.body.thumbnail,
      id: Math.random(),
    };
    fs.writeFile("productos.js", JSON.stringify(obj, null, 2), () => {
      console.log("Producto creado!");
    });
    res.redirect("/productos");
  } catch (error) {
    console.log(error);
  }
});

// // Devuelve un producto por su ID
// router.get("/:id", (req, res, next) => {
//   c.getProductById(req.params.id);
//   res.send("Producto cargado en la consola...");
//   next();
// });

// // Recibe y agrega un producto y lo devuelve con su id
// router.post("/", (req, res) => {
//   // c.createProduct();
//   const newProduct = req.body;
//   productos.push(newProduct);
//   console.log(productos);
//   fs.promises.writeFile(
//     "./productos.txt",
//     JSON.stringify(productos, null, 2),
//     "utf-8"
//   );
//   res.send("¡El producto se creó correctamente! 👏🏻");
// });

// // Recibe y actualiza un producto según su id
// router.put("/:id", (req, res, next) => {
//   let producto = c.getProductById(req.params.id);
//   console.log(producto);
//   producto = req.body;
//   console.log(producto);
//   res.send("¡El producto se actualizó correctamente! 👏🏻");
//   next();
// });

// // Elimina un producto según su ID
// router.delete("/:id", (req, res, next) => {
//   let products = c.getAllProducts();
//   let product = c.getProductById(req.params.id);
//   fs.promises.unlink(products, product, "utf-8");
//   console.log(products);
//   next();
// });

module.exports = router;
