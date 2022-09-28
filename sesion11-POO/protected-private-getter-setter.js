class Persona {
    //Private -> #
    //Solo se puede acceder desde dentro de la clase
    #nombre;
    #edad;

    //Protected -> _
    //Solo desde la clase y clases descendientes
    _isDeveloper = true;
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;       
    }

    saludo() {
        console.log(`Hola ${this.nombre}`);
    }

    getName(){ //Getter 
        return this.#nombre;
    }
    getEdad(){ //Getter
        return this.#edad
    };
    setEdad(nuevaEdad){
        this.#edad = nuevaEdad;
    }
}

const persona = new Persona("Ang",25);
console.log(persona.nombre);
console.log(persona.getName());

//Getter -> metodos que permiten obtener atributos/metodos protegidos o privados
//Setter -> cambiar //

persona.setEdad(30);
console.log(persona.getEdad());
