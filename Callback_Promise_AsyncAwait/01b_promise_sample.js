const fs = require('fs')

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

console.log("Retorno 2")

console.log("Retorno 3")
