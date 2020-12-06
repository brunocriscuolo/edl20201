// Importa o módulo para manipulação de arquivos.
const fs = require('fs')

// Imprime a string na tela.
console.log("Retorno 1")

// Função anônima em formato "arrow function", que recebe um arquivo como parâmetro e retorna uma instacia da Promise.
// A Promise recebe, como parâmetro, duas funções de callback: resolve e reject.
const readFile = file => new Promise((resolve, reject)) => {
  fs.readFile(file, (err, content)) => {
    if (err) {
      // Caso ocorra um erro durante a leitura do arquivo, a promessa será rejeitada
      reject(err)
      // Caso contrário, o conteúdo do arquivo será devolvido ao chamador.
    } else {
      resolve(contents)
      }
  })
})
// Função anônima que imprime na tela o conteúdo recebido como parâmetro, caso a promossa seja resolvida.
readFile('./entrada.txt').then(contents => {
  console.log(String(contents))
})

// Imprime a string na tela.
console.log("Retorno 2")

// Imprime a string na tela.
console.log("Retorno 3")

// A saída do programa é:

// Retorno 1
// Retorno 2
// Retorno 3
// ‘linha1\r\nlinha2\r\nlinha3\r\nlinha4\r\nlinha5’
