const datos = {
    nombre: "Angela",
    apellido: "Felix",
    edad: 23,
    altura:"160",
    isDeveloper : true,
}

const edad = datos.edad;

const datos2 = [
    {
        ...datos
    },
    {
        nombre: "Yareth",
        apellido: "Espinoza",
        edad: 23,
        altura:"160",
        isDeveloper : false,
    },
    {
        nombre: "Eduardo",
        apellido: "Romero",
        edad: 22,
        altura:"180",
        isDeveloper : false,    
    }
    
]

const listaOrdenada = datos2.sort((a,b) => b.edad - a.edad);

console.log(listaOrdenada);