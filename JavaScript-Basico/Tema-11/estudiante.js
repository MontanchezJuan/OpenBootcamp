class Estudiante {
    nombre;
    asignaturas = ['Javascript', 'HTML', 'CSS'];

    constructor(nombre) {
        this.nombre = nombre
        this.asignaturas
    }

    obtenDatos() {
        return new Estudiante(this.nombre, this.asignaturas)
    }
}

const estudiante = new Estudiante('Juan')
const juan = estudiante.obtenDatos()
