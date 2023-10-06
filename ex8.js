// 8. Crie uma classe Gato que herda de Animal e implementa o método miar().﻿

const Animal = require('./Animal');

class Gato extends Animal {
  miar() {
    console.log(`${this.nome} está miando!`);
  }
}

module.exports = Gato;