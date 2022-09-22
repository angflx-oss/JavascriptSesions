//como unir dos listas

const lista1 = ["Hola",1, false,null];
const lista2 = ["Adios",2,true,undefined];

console.log(lista1.concat(lista2));
const lista3 = lista1.concat(lista2);
console.log(lista3);

//unir dos listas con el factor de propagacion

const lista4 = [...lista1, ...lista2];