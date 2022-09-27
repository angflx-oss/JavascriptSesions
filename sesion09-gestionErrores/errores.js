const miFuncion = val => {
    if(typeof val === Number){
      return 2 * val;
    }
    throw new Error("El valor debe ser de tipo número")
//   return false;
}

console.log(miFuncion("21a"))
const numero = 8;

try{
    const doble = miFuncion(numero);
    console.log(doble);
}
catch(e){
    console.error("ERROR!");
    console.error(e);
}
finally
{
    console.log("Siempre se ejecuta");
}

//InternalError, syntaxError, TypeError, RangeError, ReferenceError
//IE => cuando pasa del overflow
//SE => cada vez que hay un fallo de sintaxis
//TE => pasando numero a una funcion cuando espera bool
//RE => tratar de acceder a una posicion de array fuera del ranago
//RE => no existe la referencia a la que estamos tratando de acceder.