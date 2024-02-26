
let auto = {
    color: 'gris',
    año: '2014',
    marca: 'peugeot',
    modelo: '206',
    encendido: false, 
    encender: function() {
        this.encendido = true;
        alert('Auto encendido');
    },
    apagar: function() {
        this.encendido = false;
        alert('El auto se apagó');
    }
};
auto.encender();
auto.apagar();
