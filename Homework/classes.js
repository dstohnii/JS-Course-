// Клас-предок
class Entity {
    constructor(name) {
      this.name = name;
      this._privateProperty = 'This is a private property';
    }
  
    getDescription() {
      return `This is an entity named ${this.name}`;
    }
  }
  
  // Клас Vehicle
  class Vehicle extends Entity {
    constructor(name, wheels, color) {
      super(name);
      this.wheels = wheels;
      this.color = color;
    }
  
    start() {
      return `${this.name} is starting`;
    }
  
    stop() {
      return `${this.name} has stopped`;
    }
  }
  
  // Клас PublicTransport (спільний предок для Bus та Metro)
  class PublicTransport extends Vehicle {
    constructor(name, wheels, color, capacity) {
      super(name, wheels, color);
      this.capacity = capacity;
    }
  
    announce() {
      return `${this.name} is a public transport with a capacity of ${this.capacity} people`;
    }
  }
  
  // Клас Bus
  class Bus extends PublicTransport {
    constructor(name, color, capacity, route) {
      super(name, 4, color, capacity);
      this.route = route;
    }
  
    drive() {
      return `${this.name} is driving on route ${this.route}`;
    }
  }
  
  // Клас Metro
  class Metro extends PublicTransport {
    constructor(name, color, capacity, line) {
      super(name, 0, color, capacity);
      this.line = line;
    }
  
    operate() {
      return `${this.name} is operating on metro line ${this.line}`;
    }
  }
  
  // Приклад використання
  const bus = new Bus('City Bus', 'Red', 50, 'Route A');
  console.log(bus.getDescription());
  console.log(bus.announce());
  console.log(bus.drive());
  
  const metro = new Metro('Metro', 'Silver', 500, 'Line 1');
  console.log(metro.getDescription());
  console.log(metro.announce());
  console.log(metro.operate());
  