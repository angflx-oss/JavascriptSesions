//Iterar valores de una lista

const array = ["Hola",2,5,90,false,undefined];


array.forEach(valor => console.log(valor));

//busqueda de un valor en una lista

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29},
]

//get the whole object
const object = listaObjetos.find(o => o.nombre === "Miguel");
console.log(object.edad);

//get just one property of the selected object
const { edad } = listaObjetos.find(o => o.nombre === "Leire");
console.log(edad);

