
const Nombre = "Angela"
const Apellido = "Felix"

const estudiante = Nombre.concat(" ").concat(Apellido)

const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

const estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

const numLetras= estudiante.length
console.log(numLetras)

const inicialNombre = Nombre.substring(0,1)
const finalApellido = Apellido[Apellido.length - 1]

const sinEspacios = estudiante.replace(/ /g, "")

const isNameThere = estudiante.includes(Nombre)
console.log(isNameThere, inicialNombre, finalApellido, sinEspacios)
