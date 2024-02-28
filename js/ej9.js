class Animal {
  constructor(nombreDelAnimal, edadDelAnimal) {
    this.nombreDelAnimal = nombreDelAnimal;
    this.edadDelAnimal = edadDelAnimal;
  }

  emitirSonidoDelAnimal() {
    document.write("El animal emite un sonido genérico.<br>");
  }
}

class Perro extends Animal {
  constructor(nombreDelPerro, edadDelPerro) {
    super(nombreDelPerro, edadDelPerro);
  }

  emitirSonidoDelPerro() {
    document.write( dogNombre+": WOOF! WOOF! *quiere salir a pasear*<br>");
  }
}

class Gato extends Animal {
  constructor(nombreDelGato, edadDelGato) {
    super(nombreDelGato, edadDelGato);
  }

  emitirSonidoDelGato() {
    document.write(catNombre+ ": MIAAAU!*tiene hambre*.<br>");
  }
}
let dogNombre = prompt("ingrese nombre del perro")

let catNombre = prompt("ingrese nombre del gato")


let elPerro = new Perro(dogNombre, 5);

let elGato = new Gato("Michi", 3);

elPerro.emitirSonidoDelPerro();
elGato.emitirSonidoDelGato();
