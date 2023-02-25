let nombre = 'Juan'
let apellido = 'Montanchez   '

let estudiante = nombre.concat(' ',apellido)
let estudianteMayus = estudiante.toLocaleUpperCase()
let estudianteMinus = estudiante.toLocaleLowerCase()

let count = estudiante.length
let firstLetterName = nombre.charAt(0)
let firstLetterLastName = apellido.charAt(0)

let spaces = estudiante.trim()

let found = estudiante.includes('Juan')
