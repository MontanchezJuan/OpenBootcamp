const logger = require('./winston')

try {
    let a = '1'
    suma(a)
} catch (e) {
    logger.info('Se esperaba otro valor')
}

function suma(number) {
    if (typeof number === "number") {
        return number++
    }
    throw new Error('El valor ingresado no es de tipo numero')
}
