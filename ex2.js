// 2. Crie uma classe Retangulo que herda de FiguraGeometrica e implementa o método calcularArea() para calcular a área do retângulo.

const FiguraGeometrica = require('./FiguraGeometrica');

class Retangulo extends FiguraGeometrica {
  calcularArea() {
    return this.base * this.altura;
  }
}

module.exports = Retangulo;

