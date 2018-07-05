const Planet = require("../domain/planet");

module.exports = class Mars {
  constructor() {
    this.planet = new Planet();
    this.planet.terrain = [
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true]
    ];
  }

  isValidPosition({ x, y }) {
    return !!(this.planet.terrain[x] && this.planet.terrain[x][y] === true);
  }
};
