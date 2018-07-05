const RoverService = require("../rover");
const {
  CARDINAL_POINTS: { NORTH, EAST, SOUTH, WEST }
} = require("../../constant/compass");

describe("Service > Vehicle > Rover", () => {
  it("should land correctly", () => {
    const state = { x: 0, y: 0, facing: NORTH };

    const service = new RoverService();
    service.land(state);

    expect(service.vehicle).toMatchObject(state);
  });

  it("should turn right correctly", () => {
    const service = new RoverService();
    service.land({ facing: NORTH });

    service.turnRight();
    expect(service.vehicle.facing).toBe(EAST);

    service.turnRight();
    expect(service.vehicle.facing).toBe(SOUTH);

    service.turnRight();
    expect(service.vehicle.facing).toBe(WEST);

    service.turnRight();
    expect(service.vehicle.facing).toBe(NORTH);
  });

  it("should turn left correctly", () => {
    const service = new RoverService();
    service.land({ facing: NORTH });

    service.turnLeft();
    expect(service.vehicle.facing).toBe(WEST);

    service.turnLeft();
    expect(service.vehicle.facing).toBe(SOUTH);

    service.turnLeft();
    expect(service.vehicle.facing).toBe(EAST);

    service.turnLeft();
    expect(service.vehicle.facing).toBe(NORTH);
  });

  it("should move forward", () => {
    const service = new RoverService();
    service.land({ x: 0, y: 0, facing: NORTH });

    service.move();
    expect(service.vehicle.y).toBe(1);

    service.move();
    expect(service.vehicle.y).toBe(2);

    service.turnRight();
    service.move();
    expect(service.vehicle.x).toBe(1);

    service.move();
    expect(service.vehicle.x).toBe(2);
  });

  it("should move backward", () => {
    const service = new RoverService();
    service.land({ x: 5, y: 5, facing: SOUTH });

    service.move();
    expect(service.vehicle.y).toBe(4);

    service.move();
    expect(service.vehicle.y).toBe(3);

    service.turnRight();
    service.move();
    expect(service.vehicle.x).toBe(4);

    service.move();
    expect(service.vehicle.x).toBe(3);
  });
});
