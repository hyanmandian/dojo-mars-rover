const {
  CARDINAL_POINTS: { NORTH }
} = require("./constant/compass");

module.exports = class Houston {
  constructor({ planetService, vehicleService }) {
    this.vehicleService = vehicleService;
    this.planetService = planetService;
  }

  landVehicle({ x, y, facing = NORTH }) {
    if (!this.planetService.isValidPosition({ x, y }))
      throw new Error("Houston, we have a problem!");

    return this.vehicleService.land({ x, y, facing });
  }

  moveVehicle(movements) {
    movements.forEach(movement => {
      this.vehicleService.move(({ x, y }) => {
        if (!this.planet.isValidPosition({ x, y }))
          throw new Error("Houston, we have a problem!");

        return true;
      });
    });
  }
};
