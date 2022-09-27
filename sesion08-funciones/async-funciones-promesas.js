
function miAsync(){

}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    if(i !== 0){
        resolve()
    }
    else{
        reject()
    }
})

miPromesa
.then(() => console.log("Se ejecutó correctamente"))
.catch(() => console.log("ERROR"))
.finally(() => console.log("ejecuta siempre"))
