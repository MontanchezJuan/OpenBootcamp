class Estudiante {
    nombre;
    asignaturas = ['Javascript', 'HTML', 'CSS'];

    constructor(nombre) {
        this.nombre = nombre
        this.asignaturas
    }

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante('Juan')
console.log(estudiante.obtenDatos())
