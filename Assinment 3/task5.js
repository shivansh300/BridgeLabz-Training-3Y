"use strict";

// Original code: score prints undefined because var is hoisted.
// announce() works because function declarations are hoisted.
// status causes ReferenceError because let is in the temporal dead zone.

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow functions are not hoisted like function declarations.
const announceArrow = () => {
    console.log("Game started using arrow function");
};

announceArrow();