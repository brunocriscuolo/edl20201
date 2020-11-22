// Importa o módulo para manipulação de arquivos.
const fs = require('fs')

// Imprime a string na tela.
console.log("Retorno 1")

const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, content)) => {
    if (err) {
      reject(err)
    } else {
      resolve(contents)
      }
  })
})

readFile('./entrada.txt').then(contents => {
  console.log(String(contents))
})

// Imprime a string na tela.
console.log("Retorno 2")

// Imprime a string na tela.
console.log("Retorno 3")
