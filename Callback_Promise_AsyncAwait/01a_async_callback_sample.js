const fs = require('fs')

console.log("Retorno 1")

function callback(err, contents) {
    console.log(err, String(contents))
}

fs.readFile('./entrada.txt', callback)

console.log("Retorno 2")

console.log("Retorno 3")
