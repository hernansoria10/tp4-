class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    equals(otroContacto) {
        return this.nombre === otroContacto.nombre;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.contactos = [];
        this.tamano = tamano;
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            document.write("La agenda está llena, no se puede añadir más contactos.<br>");
            return;
        }

        if (this.existeContacto(contacto)) {
            document.write("El contacto ya existe en la agenda.<br>");
            return;   
        }

        this.contactos.push(contacto);
        document.write("Contacto añadido correctamente.<br>");
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.equals(contacto));
    }

    listarContactos() {
        document.write("Lista de contactos:<br>");
        this.contactos.forEach(contacto => document.write(contacto.nombre + ": " + contacto.telefono + "<br>"));
    }

    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
        if (contactoEncontrado) {
            document.write(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}<br>`);
        } else {
            document.write(`No se encontró ningún contacto con el nombre ${nombre}<br>`);
        }
    }

    eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(c => c.equals(contacto));
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            document.write("Contacto eliminado correctamente.<br>");
        } else {
            document.write("El contacto no existe en la agenda.<br>");
        }
    }

    agendaLlena() {
        return this.contactos.length >= this.tamano;
    }

    huecosLibres() {
        return this.tamano - this.contactos.length;
    }
}

function menu() {
    const agenda = new Agenda();

    while (true) {
        const opcion = prompt(`Menú de Agenda Telefónica:
        1. Añadir contacto
        2. Buscar contacto
        3. Eliminar contacto
        4. Listar contactos
        5. Salir`);

        switch (opcion) {
            case "1":
                const nombreNuevo = prompt("Ingrese el nombre del nuevo contacto:");
                const telefonoNuevo = prompt("Ingrese el teléfono del nuevo contacto:");
                agenda.aniadirContacto(new Contacto(nombreNuevo, telefonoNuevo));
                break;
            case "2":
                const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
                agenda.buscarContacto(nombreBuscar);
                break;
            case "3":
                const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
                agenda.eliminarContacto(new Contacto(nombreEliminar, ""));
                break;
            case "4":
                agenda.listarContactos();
                break;
            case "5":
                return;
            default:
                document.write("Opción inválida, por favor seleccione una opción del menú.<br>");
        }
    }
}

menu();
