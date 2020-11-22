// sem currying
function multiplicar(n1, n2) {
    return n1 * n2;
}

// com currying
function multiplicar(n1) {
    return function(n2) {
        return n1 * n2;
    }
}

const funcaoCurrying = multiplicar(2);

console.log(funcaoCurrying(2)); // Saída = “4”
// OU…
console.log(multiplicar(2)(2)); // Saída = “4”
