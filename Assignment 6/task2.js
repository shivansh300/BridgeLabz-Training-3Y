"use strict";

console.log("Start");

// setTimeout callback is a macrotask.
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Promise.then callback is a microtask.
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Synchronous log");
console.log("End");

// Synchronous code runs first.
// After the current stack is empty, Promise microtasks run.
// Timer callbacks run afterward when the event loop processes macrotasks.