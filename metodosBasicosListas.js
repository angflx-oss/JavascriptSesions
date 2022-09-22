
let array = new Array();
let var1 = 50;
let array2 = [1,2,3,4, "si", undefined, var1];

console.log(array2[0]);

//métodos para introducir nuevos valores en arrays

//al final
array.push("Item");
console.log(array);
//al principio
array.unshift("Yes");
console.log(array);
//sacar el valor del final
array.pop();
console.log(array);
array2.shift();
console.log(array2);

//metodo para modificar, eliminar o añadir
//Eliminar
const array3 = [1,2,3,4,5,6];
array3.splice(2,1)

//metodo para agregar
array3.splice(2,0,"test");
console.log(array3);

//metodo para reemplazar
array3.splice(2,1,3)
console.log(array3);