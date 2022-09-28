const persona = {
    nombre: "Ang",
    edad: 23,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola");
    }
}

console.log(persona);

const_otrapersona = {
    nombre: "Ang2",
    edad: 24,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola");
    }
}

const creaPersona = (nombre, edad, isDeveloper) => {
    return{
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hola");
        }
    }
}

const newPersona = creaPersona("Maria",25,false)