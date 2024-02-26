let productosEnStock = [];
let preciosProductos = [];

function agregarProducto() {
    let nombreProducto = prompt("Ingrese el nombre del nuevo producto:");
    let precioProductoInput = prompt("Ingrese el precio del nuevo producto:");
    let precioProducto = parseFloat(precioProductoInput);

    if (isNaN(precioProducto)) {
        document.write("Por favor, ingrese un precio válido.<br>");
        return;
    }

    productosEnStock.push(nombreProducto);
    preciosProductos.push(precioProducto);
    document.write(`Producto "${nombreProducto}" agregado al inventario con un precio de ${precioProducto} dólares.<br>`);
}

function eliminarProductoAgotado(nombreProducto) {
    const indice = productosEnStock.indexOf(nombreProducto);
    if (indice !== -1) {
        productosEnStock.splice(indice, 1);
        preciosProductos.splice(indice, 1);
        document.write(`Producto "${nombreProducto}" eliminado del inventario por estar agotado.<br>`);
    } else {
        document.write(`El producto "${nombreProducto}" no está en stock.<br>`);
    }
}

function calcularValorTotalInventario() {
    let valorTotal = 0;
    for (let i = 0; i < preciosProductos.length; i++) {
        valorTotal += preciosProductos[i];
    }
    document.write(`El valor total del inventario es: ${valorTotal} dólares.<br>`);
}

agregarProducto();
eliminarProductoAgotado("Pantalón");
calcularValorTotalInventario();
