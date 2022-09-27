
let objeto = {
    nombre: "Angela",
    apellido: "Felix"
};

greetings(objeto);

function greetings(object){
    object.apellido = "Ramirez";
    console.log(`Hello ${object.nombre} ${object.apellido}`)
}

console.log(objeto.apellido)