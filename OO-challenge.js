// OO Challenge 

/* Part One
Create a class for vehicle. Each vehicle instance should have the following properties:

make
model
year */ 

// Each vehicle instance should have access to a method called honk, which returns the string “Beep.” 
// define class Vehicle 
class Vehicle {
    // constructor with properties
    constructor(make, model, year) {
        // reference properties 
        this.make = make; 
        this.model = model; 
        this.year = year; 
    }
    // method 
    honk() {
        console.log('Beep'); 
    }
    // method 
    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}
let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999); 
myFirstVehicle; // Vehicle {make: "Honda", model: "Monster Truck", year: 1999}
myFirstVehicle.honk(); // Beep

// Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.
let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999); 
myFirstVehicle.toString(); // The vehicle is a Honda Monster Truck from 1999

/* Part Two 
Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4. */ 

// define class Car extends Vehicle 
class Car extends Vehicle {
    // constructor with properties 
    constructor(make, model, year) {
        // super() to extend from class Vehicle 
        super(make, model, year); 
        // add property numWheels 
        this.numWheels = 4;  
    }
} 
let myFirstCar = new Car('Toyota', 'Corolla', 2005); 
myFirstCar; // Car {make: "Toyota", model: "Corolla", year: 2005, numWheels: 4}
myFirstCar.toString(); // The vehicle is a Toyota Corolla from 2005
myFirstCar.honk(); // Beep 
myFirstCar.numWheels; // 4 

/* Part Three 
Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!” */ 

// define class MotorCycle extends Vehicle 
class Motorcycle extends Vehicle {
    // constructor 
    constructor(make, model, year) {
        // super(make, model, year) 
        super(make, model, year); 
        // add property 
        this.numWheels = 2;
    }
    // add method 
    revEngine() {
        console.log('VROOM!!!'); 
    }
}
let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000); 
myFirstMotorcycle; // Motorcycle {make: "Honda", model: "Nighthawk", year: 2000, numWheels: 2}
myFirstMotorcycle.toString(); // The vehicle is a Honda Nighthawk from 2000
myFirstMotorcycle.honk(); // Beep 
myFirstMotorcycle.revEngine(); // VROOM!!! 
myFirstMotorcycle.numWheels; // 2

/* Part Four 
Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.” */ 

// define class Garage 
class Garage {
    // property capacity
    constructor(capacity) {
        // vehicles = [] 
        this.vehicles = []; 
        // capacity 
        this.capacity = capacity; 
    }
    // method add 
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
          return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
          return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}