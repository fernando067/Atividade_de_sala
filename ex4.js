// 4. Crie um programa que crie um objeto Retangulo com base 10 e altura 20 e imprima a área do retângulo.

const Retangulo = require('./Retangulo');

const retangulo = new Retangulo(10, 20);
console.log(`A área do retângulo é ${retangulo.calcularArea()}`);