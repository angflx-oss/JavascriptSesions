const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
   const respuesta = confirm("Estás de acuerdo?")
   if(respuesta){
    console.log("OK")
   }
   else{
    console.log("NO")
   }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("Ingresar nombre...")
})

const lista = [{
    nombre: "Gorka",
    edad: 34
}, {
    nombre: "Julen",
    edad: 21
}, {
    nombre: "Amaia",
    edad: 30
}]

// console.log(lista)
console.table(lista)