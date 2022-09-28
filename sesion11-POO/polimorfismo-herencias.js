//Inheritance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;       
    }
    saludo() {
        console.log(`Hola ${this._nombre}`);
    }
}

class Developer extends Persona{
    //instancia constructor de otra clase
    constructor(nombre, edad, lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    }

    saludos(){         
        super.saludo()
        console.log(`Nuevo método ${this.lenguaje}`);
    }
}

const newDev = new Developer("Asd", 25);

//Polimorfism - Polimorfismo

