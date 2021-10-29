const fs = require("fs");
const { callbackify } = require("util");

class Container {
  constructor(file) {
    this.file = file;
  }

  // Métodos:
  save = async (productos) => {
    const guardar = await fs.promises.writeFile(
      this.file,
      JSON.stringify(productos, null, 2),
      "utf-8"
    );
    try {
      console.log("Productos guardados satisfactoriamente");
      return guardar;
    } catch (err) {
      console.log(err);
    }
  };

  // Devuelve un array con los objetos presentes en el archivo.
  getAllProducts = async () => {
    try {
      const productos = await fs.promises.readFile(this.file, "utf-8");
      console.log(JSON.parse(productos));
    } catch (err) {
      throw "Error en lectura";
    }
  };

  // Recibe un id y devuelve el objeto con ese id, o null si no está
  getProductById = async (id) => {
    try {
      const productos = await fs.promises.readFile(this.file, "utf-8");
      let productoID = JSON.parse(productos).find(
        (identificador) => identificador.id == id
      );
      console.log(productoID);
    } catch (err) {
      throw "Error en lectura";
    }
  };

  // Elimina del archivo el objeto con el id buscado
  deleteProductById = async (id) => {
    try {
      let productos = await fs.promises.readFile(this.file, "utf-8", (err) => {
        if (err) "Error al obtener los productos: " + err;
      });
      //console.log(JSON.parse(products));
      const index = JSON.parse(productos).findIndex((o) => {
        return o.id === id;
      });
      //console.log(index);
      const productsObj = JSON.parse(productos);
      if (index !== -1) productsObj.splice(index, 1);
      productos = JSON.stringify(productsObj, null, 2);
      await fs.promises.writeFile("./productos.txt", productos, "utf-8");
      console.log(JSON.parse(productos));
    } catch (err) {
      throw "Error al borrar elemento: " + err;
    }
  };

  // elimina todos los objetos presentes en el archivo
  deleteAllProducts = async () => {
    try {
      let borrarTodosProductos = await fs.promises.writeFile(
        this.file,
        "",
        "utf-8"
      );
      console.log("Todos los productos se han borrado satisfactoriamente.");
    } catch (err) {
      throw "Error al borrar contenido";
    }
  };
}

module.exports = Container;
