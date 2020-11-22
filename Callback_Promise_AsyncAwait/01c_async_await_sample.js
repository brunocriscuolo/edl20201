const fs = require('fs')

console.log("Retorno 1")

const init = async() => {
    const contents = await readFile('./entrada.txt')
    console.log(String(contents))
}

console.log(init())

console.log("Retorno 2")

console.log("Retorno 3")
