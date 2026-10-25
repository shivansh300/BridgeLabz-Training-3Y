"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Shared method available to all Car objects.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

console.log(
    "Shared Method:",
    car1.getDetails === car2.getDetails
);