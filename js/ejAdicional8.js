class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        document.write(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.<br>`);
    }

    despedirse() {
        document.write(`Yo ${this.nombre} me despido, hasta luego!. <br>`);
    }
}

let nombrePersona1 = prompt("Ingrese el nombre de la primera persona:");
let edadPersona1 = parseInt(prompt("Ingrese la edad de la primera persona:"));
let profesionPersona1 = prompt("Ingrese la profesión de la primera persona:");

let persona1 = new Persona(nombrePersona1, edadPersona1, profesionPersona1);
persona1.saludar();
persona1.despedirse();

let nombrePersona2 = prompt("Ingrese el nombre de la segunda persona:");
let edadPersona2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));
let profesionPersona2 = prompt("Ingrese la profesión de la segunda persona:");

let persona2 = new Persona(nombrePersona2, edadPersona2, profesionPersona2);
persona2.saludar();
persona2.despedirse();
