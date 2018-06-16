const Mars = require("../domain/mars");

describe('domain mars', () => {
    it('should return true is position is valid', () => {
        const mars = new Mars()
        
        expect(mars.isValidPosition({ x: 1, y: 1 })).toBe(true);
        expect(mars.isValidPosition({ x: 1, y: 2 })).toBe(true);
        expect(mars.isValidPosition({ x: 4, y: 2 })).toBe(true);
    });
    
    it('should return false is position is invalid', () => {
        const mars = new Mars()
        
        expect(mars.isValidPosition({ x: 11, y: 0 })).toBe(false);
    });
})

