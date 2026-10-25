"use strict";

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to boil water!");
            } else {
                console.log("Water boiled.");
                resolve();
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Coffee brewing failed!");
            } else {
                console.log("Coffee brewed.");
                resolve();
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee!");
            } else {
                console.log("Coffee poured into cup.");
                resolve();
            }
        }, 1500);
    });
}

// Each step starts after the previous Promise resolves.
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log("Error:", error));