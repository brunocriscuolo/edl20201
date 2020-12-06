// Importa o módulo para manipulação de arquivos.
const fs = require('fs')

// Imprime a string na tela.
console.log("Retorno 1")

// Função de retorno que imprime na tela o conteúdo recebido como parâmetro.
function callback(err, contents) {
    console.log(err, String(contents))
}

// Lê o arquivo e chama a função de retorno.
fs.readFile('./entrada.txt', callback)

// Imprime a string na tela.
console.log("Retorno 2")

// Imprime a string na tela.
console.log("Retorno 3")

// A saída do programa é:

// Retorno 1
// Retorno 2
// Retorno 3
// null ‘linha1\r\nlinha2\r\nlinha3\r\nlinha4\r\nlinha5’
