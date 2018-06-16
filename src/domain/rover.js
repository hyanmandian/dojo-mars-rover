module.exports = class Rover {
  constructor({ x = 0, y = 0 } = {}){
    this.positions = { x, y };
  }
  
  getPosition() {
    return this.positions;
  }
  
  land({ x, y }) {
    this.positions = { x, y };
  }
  
  moveX(x) {
    this.positions = { ...this.positions ,x };
  }
  
  moveY(y) {
    this.positions = { ...this.positions, y };
  }
  
  move({ x, y }) {
    this.positions = { x, y };
  }
}