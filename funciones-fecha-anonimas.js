//funciones tipo flecha

//las funciones asi como var se pueden acceder desde cualquier lugar pero las funciones tipo flecha se deben inicializar antes
//funciones tipo flecha son funciones anonimas

const array = [1,5,6,2,7,12,8,92];

const array2 = array.map((valor) => valor * 2);

console.log(array2);

const dobleValor = valor => valor * 2;

console.log(dobleValor(5));
console.log(doble(6));

const array3 = array.map(dobleValor);

console.log(array3);

function doble(valor){
    return valor * 2;
}
