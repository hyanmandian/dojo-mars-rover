const NORTH = "NORTH";
const EAST = "EAST";
const SOUTH = "SOUTH";
const WEST = "WEST";

module.exports = {
  CARDINAL_POINTS: {
    NORTH,
    EAST,
    SOUTH,
    WEST
  },
  DIRECTIONS: {
    [NORTH]: { right: EAST, left: WEST },
    [EAST]: { right: SOUTH, left: NORTH },
    [SOUTH]: { right: WEST, left: EAST },
    [WEST]: { right: NORTH, left: SOUTH }
  }
};
