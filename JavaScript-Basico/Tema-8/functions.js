function ok() {
    return true
}

setTimeout(function () {
    console.log("Hola soy una promesa");
}, 5000)

function* generarPar() {
    let par = 0
    while (true) {
        par += 2
        if (par === 10) {
            return par
        }
        yield par
    }
}
