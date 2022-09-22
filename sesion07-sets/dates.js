//dates

//meses se inicializan en 0

//apartir de 1 de enero de 1970, se pueden conseguir con milisegundos
const fechastring = new Date("October 13, 1978");
console.log(fechastring);

console.log(new Date() > fechastring)

//Para comparar fechas hay que convertirlas a milisegundos

fechastring.getTime(); 

//dia 
console.log(fechastring.getDate());
console.log(fechastring.getMonth() + 1);

//pasar a string
console.log(fechastring.toLocaleDateString('en-US'))

