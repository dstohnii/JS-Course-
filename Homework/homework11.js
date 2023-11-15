'use strict'

class Vehicle {
    constructor(brand, year) {
      this.brand = brand;
      this.year = year;
    }
  
    displayInfo() {
      console.log(`Brand: ${this.brand}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, year, model) {
      super(brand, year);
      this.model = model;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Model: ${this.model}`);
    }
  
    startEngine() {
      console.log("Engine is started");
    }
  }
  
  class Bicycle extends Vehicle {
    constructor(brand, year, type) {
      super(brand, year);
      this.type = type;  
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Bycicle type: ${this.type}`);
    }
  
    pedal() {
      console.log("Use pedals to bycicle");
    }
  }
  
  const car = new Car("Hyundai", 2022, "Tucson");
  const bicycle = new Bicycle("Trek", 2021, "Racing");
  
  console.log("Car info:");
  car.displayInfo();
  car.startEngine();
  
  console.log("Bycicle info:");
  bicycle.displayInfo();
  bicycle.pedal();
  