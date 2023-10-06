// 5. Crie um programa que crie um objeto Círculo com raio 5 e imprima a área do círculo.

const Circulo = require('./Circulo');

const circulo = new Circulo(5);
console.log(`A área do círculo é ${circulo.calcularArea()}`);