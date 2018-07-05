const MarsService = require("../service/mars");
const RoverService = require("../service/rover");
const {
  CARDINAL_POINTS: { NORTH, EAST, SOUTH, WEST }
} = require("../constant/compass");
const Houston = require("../houston");

describe("Houston", () => {
  it("shoul'd land rover in mars", () => {
    const houston = new Houston({
      planetService: new MarsService(),
      vehicleService: new RoverService()
    });

    expect(() => houston.landVehicle({ x: 11, y: 0 })).toThrow();
  });

  it("should land rover in mars", () => {
    const houston = new Houston({
      planetService: new MarsService(),
      vehicleService: new RoverService()
    });

    expect(() => houston.landVehicle({ x: 9, y: 0 })).not.toThrow();
  });

  it("should move rover in mars", () => {
    let movements = [];

    const houston = new Houston({
      planetService: new MarsService(),
      vehicleService: new RoverService()
    });

    houston.landVehicle({ x: 4, y: 4 });
    movements = [EAST, EAST, NORTH, NORTH, EAST, EAST];
    expect(() => houston.moveVehicle(movements)).toThrow();

    houston.landVehicle({ x: 0, y: 0 });
    movements = [WEST, WEST, SOUTH, SOUTH];
    expect(() => houston.moveVehicle()).toThrow();

    houston.landVehicle({ x: 0, y: 0 });
    movements = [NORTH, NORTH, NORTH, NORTH];
    expect(() => houston.moveVehicle(movements)).toThrow();

    houston.landVehicle({ x: 9, y: 9 });
    movements = [EAST, SOUTH, EAST, SOUTH];
    expect(() => houston.moveVehicle(movements)).toThrow();

    houston.landVehicle({ x: 9, y: 9 });
    movements = [SOUTH, EAST, SOUTH, EAST];
    expect(() => houston.moveVehicle(movements)).toThrow();

    houston.landVehicle({ x: 0, y: 9 });
    movements = [NORTH, SOUTH, NORTH, SOUTH];
    expect(() => houston.moveVehicle(movements)).toThrow();

    houston.landVehicle({ x: 9, y: 0 });
    movements = [EAST, EAST, EAST, EAST];
    expect(() => houston.moveVehicle(movements)).toThrow();
  });
});
