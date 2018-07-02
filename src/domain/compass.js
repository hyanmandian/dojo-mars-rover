module.exports = class Compass {
  static getCardinalPoints() {
    return { NORTH: 'N', EAST: 'E', SOUTH: 'S', WEST: 'W' };
  }

  static getDirections() {
    const { NORTH, EAST, SOUTH, WEST } = Compass.getCardinalPoints();

    return {
      [NORTH]: { right: EAST, left: WEST },
      [EAST]: { right: SOUTH, left: NORTH },
      [SOUTH]: { right: WEST, left: EAST },
      [WEST]: { right: NORTH, left: SOUTH }
    }
  }
};
