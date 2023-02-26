function fic(num) {
    let fibonacci = [1, 1];
    let numero = 0;

    if (num > 1) {
        for (i = 0; i < num - 2; i++) {
            numero = fibonacci[i] + fibonacci[fibonacci.length-1];
            fibonacci.push(numero);
        }
    }
    return fibonacci;
}

console.log(fic(6));
