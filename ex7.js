// 7. Crie uma classe Cachorro que herda de Animal e implementa o método latir().

const Animal = require('./Animal');

class Cachorro extends Animal {
  latir() {
    console.log(`${this.nome} está latindo!`);
  }
}

module.exports = Cachorro;