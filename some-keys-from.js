//.some() si algunos metodos de la lista cumplen la condición

const array = [3,7,2,4,7,9,42,35,7865,23,-1]

const res = array.some(valor => valor < 0)
console.log(res)

const existe = array.some(valor => valor === 90)
console.log(existe)

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29},
]

const existePersona = listaObjetos.some(persona => persona.nombre === "Miguel");
console.log(existePersona)

//obtener una lista a partir de un objeto iterable

const str = "Hola soy yo"

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2,3,4])
const ar_set =  Array.from(set)

const keys = array.keys()
console.log(keys);

const ar_key = Array.from(keys)
console.log(ar_key)