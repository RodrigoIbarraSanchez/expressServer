const fs = require('fs');

const products = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
   ];

class Contenedor {
    constructor (title, price, thumbnail, id) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
    }

    save() {
        fs.writeFile('./src/products.txt', JSON.stringify(products, null, 2), 'utf-8', (err) => {
            if (err) throw "Error al escribir";
        });
    }

    /* getById() {
        fs.readFile('./src/products.txt', 'utf-8', (err, data) => {
            const productID = 1;
            const productos = JSON.parse(data);
            //console.log(productos[0].id);
            if (productos[0] | productos[1] | productos [2] == productID) {
                console.log(productos[]);
            }
            return null;
        });
    } */

    getAllProducts() {
        fs.readFile('./src/products.txt', 'utf8', function(err, data) {
            if (err) throw err;
            console.log(JSON.parse(data));
        });
    };
};



const producto = new Contenedor(
    
);

producto.save();
//producto.getById();
producto.getAllProducts();