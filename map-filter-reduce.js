//.map() .filter() .reduce()

const array = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v)
})

const newArray = array.map((valor, indice) =>  `${indice + 1} - ${valor}`)

console.log(newArray)

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29},
]

const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel");

const valores = [3,56,253,5,90,100]

const suma = valores.reduce((ant, cur, indice, arrayOriginal) => {
    console.log(ant)
})