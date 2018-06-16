const Rover = require("../domain/rover");

describe('domain rover', () => {
    it('should return x equal 0 and y equal 0 by default', () => {
        const rover = new Rover()
        expect(rover.getPosition()).toMatchObject({ x: 0, y: 0 });
    });
    
    it('should return x equal 5 and y equal 7 when land', () => {
        const rover = new Rover();
        rover.land({ x: 5, y: 5 });
        expect(rover.getPosition()).toMatchObject({ x: 5, y: 5 });
    });
    
    it('should return x equal 5 and y equal 8', () => {
        const rover = new Rover({ x: 5, y: 8 });
        expect(rover.getPosition()).toMatchObject({ x: 5, y: 8 });
    });

    it('should move 6 positions in x axis ', () => {
        const rover = new Rover();
        rover.moveX(6);
        expect(rover.getPosition()).toMatchObject({ x: 6, y: 0 });
    });
    
    it('should move 6 positions in y axis ', () => {
        const rover = new Rover();
        rover.moveY(6);
        expect(rover.getPosition()).toMatchObject({ x: 0, y: 6 });
    });
    
    it('should move 6 positions in y axis and 6 positions in x axis ', () => {
        const rover = new Rover();
        rover.moveY(6);
        expect(rover.getPosition()).toMatchObject({ x: 0, y: 6 });
        rover.moveX(6);
        expect(rover.getPosition()).toMatchObject({ x: 6, y: 6 });
    });
})

