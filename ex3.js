// 3. Crie uma classe Circulo que herda de FiguraGeometrica e implementa o método calcularArea() para calcular a área do círculo.

const FiguraGeometrica = require('./FiguraGeometrica');

class Circulo extends FiguraGeometrica {
  calcularArea() {
    return Math.PI * Math.pow(this.base / 2, 2);
  }
}

module.exports = Circulo;