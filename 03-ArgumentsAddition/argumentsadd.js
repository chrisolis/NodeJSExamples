// Adds two command line arguments (numbers).

console.log(process.argv)

let num1 = process.argv[2]
let num2 = process.argv[3]
let suma = parseInt(num1) + parseInt(num2)

console.log(suma)