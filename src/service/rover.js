const Vehicle = require("../domain/vehicle");
const { CARDINAL_POINTS, DIRECTIONS } = require("../constant/compass");

module.exports = class Rover {
  constructor() {
    this.vehicle = new Vehicle();
  }

  land({ x, y, facing }) {
    this.vehicle.x = x;
    this.vehicle.y = y;
    this.vehicle.facing = facing;
  }

  getPosition() {
    return { ...this.vehicle };
  }

  turnRight() {
    this.vehicle.facing = DIRECTIONS[this.vehicle.facing].right;
  }

  turnLeft() {
    this.vehicle.facing = DIRECTIONS[this.vehicle.facing].left;
  }

  move(shouldMove = () => true) {
    const { NORTH, EAST, SOUTH, WEST } = CARDINAL_POINTS;

    let { x, y, facing } = this.vehicle;

    if (facing === NORTH) {
      y = y + 1;
    }

    if (facing === EAST) {
      x = x + 1;
    }

    if (facing === SOUTH) {
      y = y > 0 ? y - 1 : 0;
    }

    if (facing === WEST) {
      x = x > 0 ? x - 1 : 0;
    }

    if (!shouldMove({ x, y, facing })) return;

    this.vehicle.x = x;
    this.vehicle.y = y;
  }
};
