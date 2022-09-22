
const listaCompra  = [
    "Leche",
    "Huevos",
    "Tortillas",
    "Papel Higienico",
    "Jabon"
]

listaCompra.push("Aceite de Girasol");

listaCompra.pop();

const peliculas = [
    {
        titulo: "Holy Motors",
        director: "Leos Carax",
        fecha: new Date(2012,7,4),
    },
    {
        titulo: "Mullholand Drive",
        director: "David Lynch",
        fecha: new Date(2002,10,18),
    },
    {
        titulo: "Midsommar",
        director: "Ari Aster",
        fecha: new Date(2019,7,3),
    },
]

const peliculasFilterFecha = peliculas.filter(peliculas => (peliculas.fecha > new Date(2010,1,20)));
console.log(peliculasFilterFecha);

const directoresMap = peliculas.map(pelicula => {
    return pelicula.director
});

const titulosMap = peliculas.map(pelicula => {
    return pelicula.titulo
});

const directorestitulos = directoresMap.concat(titulosMap);

const directorestitlos_prop = [...directoresMap, ...titulosMap];
