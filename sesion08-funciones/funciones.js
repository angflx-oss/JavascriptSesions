
function siempreTrue()
{
    return true;
}
console.log(siempreTrue());

async function promesa(){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

function* generadorPares(){
    let id =0;
    while(true){
        yield id += 2;
    }
}
