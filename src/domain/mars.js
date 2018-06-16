/*
  Deve receber obstaculos
*/

module.exports = class Mars {
  constructor() {
    this.map = [
      Array(10).fill(1),
      Array(10).fill(1),
      Array(10).fill(1),
      Array(10).fill(1),
      Array(10).fill(1),
      Array(10).fill(1),
      Array(10).fill(1),
      Array(10).fill(1),
      Array(10).fill(1),
      Array(10).fill(1),
    ];
  }
  
  isValidPosition({ x, y }) {
    return !!(this.map[x] && this.map[x][y]);
  }
}