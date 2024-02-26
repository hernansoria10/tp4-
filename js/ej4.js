class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos() {
        document.write(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}<br>`);
    }
}

let producto1 = new Producto("001", "remera", 5000);
let producto2 = new Producto("002", "jean", 15000);
let producto3 = new Producto("003", "zapatillas", 50000);

let productos = [producto1, producto2, producto3];

for (let i = 0; i < productos.length; i++) {
    productos[i].imprimeDatos();
}
