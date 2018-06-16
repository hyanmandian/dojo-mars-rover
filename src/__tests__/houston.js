const Rover = require("../domain/rover");
const Mars = require("../domain/mars");
const Houston = require("../houston");

describe('Houston', () => {
    it('not should land rover in mars', () => {
        const mars = new Mars();
        const rover = new Rover();
        const houston = new Houston({ planet: mars, vehicle: rover });

        expect(() => houston.landVehicle({ x: 11, y: 0 })).toThrow();
    });
    
    it('should land rover in mars', () => {
        const mars = new Mars();
        const rover = new Rover();
        const houston = new Houston({ planet: mars, vehicle: rover });

        expect(() => houston.landVehicle({ x: 9, y: 0 })).not.toThrow();
    });
    
    
    it('should move rover in mars', () => {
        const mars = new Mars();
        const rover = new Rover();
        const houston = new Houston({ planet: mars, vehicle: rover });
        
        houston.landVehicle({ x: 4, y: 4 });
        houston.execute(['l', 'l', 'n', 'n', 'l', 'l']);
        expect(houston.getVehicle().getPosition()).toMatchObject({ x: 8, y: 2});
        
        houston.landVehicle({ x: 0, y: 0 });
        expect(() => houston.execute(['o', 'o', 's', 's'])).toThrow();
        
        houston.landVehicle({ x: 0, y: 0 });
        expect(() => houston.execute(['n', 'n', 'n', 'n'])).toThrow();
        
        houston.landVehicle({ x: 9, y: 9 });
        expect(() => houston.execute(['l', 's', 'l', 's'])).toThrow();
        
        houston.landVehicle({ x: 9, y: 9 });
        expect(() => houston.execute(['s', 'l', 's', 'l'])).toThrow();
        
        // houston.landVehicle({ x: 0, y: 9 });
        // expect(() => houston.execute(['n', 's', 'n', 's'])).toThrow();
        
        houston.landVehicle({ x: 9, y: 0 });
        expect(() => houston.execute(['l', 'l', 'l', 'l'])).toThrow();
    });
})

