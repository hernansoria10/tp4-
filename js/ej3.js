class Rectangulo {
  constructor(alto, ancho) {
    let _alto = alto;
    let _ancho = ancho;

    this.modificarAlto = function (nuevoAlto) {
      _alto = nuevoAlto;
    };

    this.modificarAncho = function (nuevoAncho) {
      _ancho = nuevoAncho;
    };

    this.mostrarPropiedades = function () {
      document.write(`Alto: ${_alto}, Ancho: ${_ancho}<br>`);
    };

    this.calcularPerimetro = function () {
      return 2 * (_alto + _ancho);
    };

    this.calcularArea = function () {
      return _alto * _ancho;
    };
  }
}

let miRectangulo = new Rectangulo(5, 10);

miRectangulo.mostrarPropiedades();
document.write("Perímetro: " + miRectangulo.calcularPerimetro() + "<br>");
document.write("Área: " + miRectangulo.calcularArea() + "<br>");

let nuevoAlto = parseInt(prompt("Ingrese el nuevo alto:"));
let nuevoAncho = parseInt(prompt("Ingrese el nuevo ancho:"));

miRectangulo.modificarAlto(nuevoAlto);
miRectangulo.modificarAncho(nuevoAncho);

miRectangulo.mostrarPropiedades();
document.write("Perímetro: " + miRectangulo.calcularPerimetro() + "<br>");
document.write("Área: " + miRectangulo.calcularArea() + "<br>");
