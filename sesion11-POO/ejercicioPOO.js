class Estudiante{
    nombre = "Ang";
    asignaturas = [
        "Javascript",
        "HTML",
        "CSS"
    ]

    obtenDatos(){
        return {
            nombre: this.nombre, 
            asignaturas: this.asignaturas
        }
    }
}

student = new Estudiante()

console.log(student.obtenDatos())