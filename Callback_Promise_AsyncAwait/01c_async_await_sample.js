// Importa o módulo para manipulação de arquivos.
const fs = require('fs')

// Imprime a string na tela.
console.log("Retorno 1")

const init = async() => {
    const contents = await readFile('./entrada.txt')
    console.log(String(contents))
}

console.log(init())

// Imprime a string na tela.
console.log("Retorno 2")

// Imprime a string na tela.
console.log("Retorno 3")
