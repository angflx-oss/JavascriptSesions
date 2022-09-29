const nombre = "Angela"
const apellido = "Felix"

const objeto = {
    nombre,
    apellido
}

// sessionStorage.setItem(objeto)
// localStorage.setItem(objeto)

const now = new Date()
// document.cookie = `objeto=${JSON.stringify(objeto)};expires=${new Date(now.getTime() + 2 * 60000)}`