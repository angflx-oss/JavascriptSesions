//objects

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"],
}

//al copiar objetos se copia tambien la referencia a memoria se deben copiar mediante factor de propagación para no modificar el objeto original

const obj2 = obj;

const obj3 = {...obj};

obj3.nombre = "Gorka"

console.log(obj.nombre);
console.log(obj3.nombre);

//ordenar listas de objetos en funcion de una variable
