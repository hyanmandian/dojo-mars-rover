module.exports = class Houston {
  constructor({ planet, vehicle }) {
    this.planet = planet;
    this.vehicle = vehicle;
    
    this.commands = {
      l: () => {
        const { x, y } = this.vehicle.getPosition();
        return { x: x + 1, y };
      },
      o: () => {
        const { x, y } = this.vehicle.getPosition();
        return { x: x - 1, y };
      },
      s: () => {
        const { y, x } = this.vehicle.getPosition();
        return { y: y + 1, x };
      },
      n: () => {
        const { y, x } = this.vehicle.getPosition();
        return { y: y - 1, x };
      },
    };
  }
  
  getVehicle() {
    return this.vehicle;    
  }
  
  landVehicle(positions){
    if(!this.planet.isValidPosition(positions)) throw new Error('Houston, we have a problem!');
    
    return this.vehicle.land(positions);
  }
  
  execute(commands) {
    commands.forEach((command) => {
      const nextPosition = this.commands[command]();
    
      if(!this.planet.isValidPosition(nextPosition)) throw new Error('Houston, we have a problem!');
      
      this.vehicle.move(nextPosition);
    });
  }
}