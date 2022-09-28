class Persona {
    nombre;
    edad;
    isDeveloper;

    constructor(nombre,edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola ${this.nombre}`);
    }
}

const nueva_persona = new Persona("Angela",24,true);
console.log(nueva_persona);
nueva_persona.saludo();
console.log(nueva_persona instanceof Persona);
