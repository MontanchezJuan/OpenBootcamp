const nombre = 'Juan'
const apellido = 'Montanchez'

const persona = {
    nombre: nombre,
    apellido: apellido
}

localStorage.setItem('persona', persona)
sessionStorage.setItem('persona', persona)

document.cookie = "nombrecookie=valorcookie; max-age=120;"
