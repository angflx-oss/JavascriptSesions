// localStorage.setItem("nombre", "Ang")
// localStorage.setItem("nombre", "Angela")

console.log(localStorage.getItem("nombre"));

localStorage.setItem("persona", JSON.stringify({nombre: "Ang", edad: 23}))

console.log(JSON.parse(localStorage.getItem("persona")))

localStorage.removeItem("nombre")

//-------Sesion Storange ---------

sessionStorage.setItem("nombre-sesion", "Ang")

//------------Cookies--------------

document.cookie = "nombreCookie=AngCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023,0,1).toUTCString()