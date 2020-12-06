// Importa o módulo para manipulação de arquivos.
const fs = require('fs')

// Imprime a string na tela.
console.log("Retorno 1")

// Função assíncrona que lê um arquivo passado como parâmetro e imprime seu conteo na tela.
const init = async() => {
    const contents = await readFile('./entrada.txt')
    console.log(String(contents))
}

// Imprime o estado da promessa encapsulada na função async.
console.log(init())

// Imprime a string na tela.
console.log("Retorno 2")

// Imprime a string na tela.
console.log("Retorno 3")

// A saída do programa é:

// Retorno 1
// Promise { <pending> }
// Retorno 2
// Retorno 3
// ‘linha1\r\nlinha2\r\nlinha3\r\nlinha4\r\nlinha5’
