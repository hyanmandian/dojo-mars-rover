const Rover = require('../rover');
const Compass = require('../../compass');

describe('Domain > Vehicle > Rover', () => {
  it('should set initial state correctly', () => {
    const state = {
      position: { x: 0, y: 0 },
      facing: Compass.getCardinalPoints().NORTH,
    };
    const rover = new Rover();
    rover.setInitialState(state);

    expect(rover.position).toMatchObject(state.position);
    expect(rover.facing).toBe(state.facing);
  });

  it('should turn right correctly', () => {
    const rover = new Rover();
    rover.setInitialState({ facing: Compass.getCardinalPoints().NORTH });

    rover.turnRight();
    expect(rover.facing).toBe(Compass.getCardinalPoints().EAST);

    rover.turnRight();
    expect(rover.facing).toBe(Compass.getCardinalPoints().SOUTH);

    rover.turnRight();
    expect(rover.facing).toBe(Compass.getCardinalPoints().WEST);

    rover.turnRight();
    expect(rover.facing).toBe(Compass.getCardinalPoints().NORTH);
  });

  it('should turn left correctly', () => {
    const rover = new Rover();
    rover.setInitialState({ facing: Compass.getCardinalPoints().NORTH });

    rover.turnLeft();
    expect(rover.facing).toBe(Compass.getCardinalPoints().WEST);

    rover.turnLeft();
    expect(rover.facing).toBe(Compass.getCardinalPoints().SOUTH);

    rover.turnLeft();
    expect(rover.facing).toBe(Compass.getCardinalPoints().EAST);

    rover.turnLeft();
    expect(rover.facing).toBe(Compass.getCardinalPoints().NORTH);
  });

  it('should move forward', () => {
    const rover = new Rover();
    rover.setInitialState({
      position: { x: 0, y: 0 },
      facing: Compass.getCardinalPoints().NORTH,
    });

    rover.move();
    expect(rover.position.y).toBe(1);

    rover.move();
    expect(rover.position.y).toBe(2);

    rover.turnRight();
    rover.move();
    expect(rover.position.x).toBe(1);

    rover.move();
    expect(rover.position.x).toBe(2);
  });

  it('should move backward', () => {
    const rover = new Rover();
    rover.setInitialState({
      position: { x: 5, y: 5 },
      facing: Compass.getCardinalPoints().SOUTH,
    });

    rover.move();
    expect(rover.position.y).toBe(4);

    rover.move();
    expect(rover.position.y).toBe(3);

    rover.turnRight();
    rover.move();
    expect(rover.position.x).toBe(4);

    rover.move();
    expect(rover.position.x).toBe(3);
  });
});
