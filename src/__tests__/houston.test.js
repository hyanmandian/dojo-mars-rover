const Rover = require('../domain/vehicle/rover');
const Mars = require('../domain/planet/mars');
const Compass = require('../domain/compass');
const Houston = require('../houston');

describe('Houston', () => {
  it('shoul\'d land rover in mars', () => {
    const houston = new Houston();
    houston.setPlanet(new Mars());
    houston.setVehicle(new Rover());

    expect(() => houston.landVehicle({ x: 11, y: 0 })).toThrow();
  });

  it('should land rover in mars', () => {
    const houston = new Houston();
    houston.setPlanet(new Mars());
    houston.setVehicle(new Rover());

    expect(() => houston.landVehicle({ x: 9, y: 0 })).not.toThrow();
  });

  // it('should move rover in mars', () => {
  //   const { NORTH, EAST, SOUTH, WEST } = Compass.getCardinalPoints();

  //   const houston = new Houston();
  //   houston.setPlanet(new Mars());
  //   houston.setVehicle(new Rover());

  //   houston.landVehicle({ x: 4, y: 4 });
  //   expect(() => houston.moveVehicle([EAST, EAST, NORTH, NORTH, EAST, EAST])).toThrow();

  //   houston.landVehicle({ x: 0, y: 0 });
  //   expect(() => houston.moveVehicle([WEST, WEST, SOUTH, SOUTH])).toThrow();

  //   houston.landVehicle({ x: 0, y: 0 });
  //   expect(() => houston.moveVehicle([NORTH, NORTH, NORTH, NORTH])).toThrow();

  //   houston.landVehicle({ x: 9, y: 9 });
  //   expect(() => houston.moveVehicle([EAST, SOUTH, EAST, SOUTH])).toThrow();

  //   houston.landVehicle({ x: 9, y: 9 });
  //   expect(() => houston.moveVehicle([SOUTH, EAST, SOUTH, EAST])).toThrow();

  //   houston.landVehicle({ x: 0, y: 9 });
  //   expect(() => houston.moveVehicle([NORTH, SOUTH, NORTH, SOUTH])).toThrow();

  //   houston.landVehicle({ x: 9, y: 0 });
  //   expect(() => houston.moveVehicle([EAST, EAST, EAST, EAST])).toThrow();
  // });
});
