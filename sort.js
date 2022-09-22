//.sort() 
const array = [2,5,9,15,1,2,0,4]

array.sort((a, b) => {
    if(a < b){
        return -1
    }
    else if(a > b){
        return +1
    }
    else{
        return 0
    }
})

console.log(array);

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29},
]

// listaObjetos.sort((a, b) => {
//     if(a.edad < b.edad){
//         return -1
//     }
//     else if(a.edad > b.edad){
//         return + 1;
//     }
//     else{
//         return 0
//     }

// })

listaObjetos.sort((a,b) => a.edad - b.edad);
console.log(listaObjetos)