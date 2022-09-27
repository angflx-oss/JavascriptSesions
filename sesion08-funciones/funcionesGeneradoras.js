// funciones generadoras yield id cada que se llama la función incrementa desde la última llamada

function* generarID(){
    let id = 0;
    while(true){
        id++
        yield id
        if(id === 10){
            return
        }
    }
}

const gen = generarID();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
