const Compass = require('../compass');

module.exports = class Rover {
  constructor() {
    this.position = { x: null, y: null };
    this.facing = null;
  }

  setInitialState({ position, facing }) {
    this.position = position;
    this.facing = facing;
  }

  turnRight() {
    const directions = Compass.getDirections();
    this.facing = directions[this.facing].right;
  }

  turnLeft() {
    const directions = Compass.getDirections();
    this.facing = directions[this.facing].left;
  }

  move(shouldMove = () => true) {
    const { NORTH, EAST, SOUTH, WEST } = Compass.getCardinalPoints();
    const nextPosition = this.position;

    if (this.facing === NORTH) {
      nextPosition.y = nextPosition.y + 1;
    }

    if (this.facing === EAST) {
      nextPosition.x = nextPosition.x + 1;
    }

    if (this.facing === SOUTH) {
      nextPosition.y = nextPosition.y > 0 ? nextPosition.y - 1 : 0
    }

    if (this.facing === WEST) {
      nextPosition.x = nextPosition.x > 0 ? nextPosition.x - 1 : 0;
    }

    if (!shouldMove(nextPosition)) return;

    this.position = nextPosition;
  }
}
