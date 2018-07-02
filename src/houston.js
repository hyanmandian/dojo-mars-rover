const Compass = require('./domain/compass');

module.exports = class Houston {
  setPlanet(planet) {
    this.planet = planet;
  }

  setVehicle(vehicle) {
    this.vehicle = vehicle;
  }

  landVehicle(position) {
    if(!this.planet.isValidPosition(position)) throw new Error('Houston, we have a problem!');

    return this.vehicle.setInitialState({ position, facing: Compass.getCardinalPoints.NORTH });
  }

  moveVehicle(movements) {
    movements.forEach((movement) => {
      this.vehicle.move((nextPosition) => {
        if(!this.planet.isValidPosition(nextPosition)) throw new Error('Houston, we have a problem!');

        return true;
      });
    });
  }
}
