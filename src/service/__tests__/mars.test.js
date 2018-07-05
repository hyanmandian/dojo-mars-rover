const MarsService = require("../mars");

describe("Service > Planet > Mars", () => {
  it("should return correct terrain", () => {
    const terrain = [
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

    const marsService = new MarsService();

    expect(marsService.planet.terrain).toEqual(terrain);
  });

  it("should return true is position is valid", () => {
    const marsService = new MarsService();

    expect(marsService.isValidPosition({ x: 1, y: 1 })).toBe(true);
    expect(marsService.isValidPosition({ x: 1, y: 2 })).toBe(true);
    expect(marsService.isValidPosition({ x: 4, y: 2 })).toBe(true);
  });

  it("should return false is position is invalid", () => {
    const marsService = new MarsService();

    expect(marsService.isValidPosition({ x: 11, y: 0 })).toBe(false);
    expect(marsService.isValidPosition({ x: -1, y: 0 })).toBe(false);
    expect(marsService.isValidPosition({ x: 1, y: 18 })).toBe(false);
  });
});
