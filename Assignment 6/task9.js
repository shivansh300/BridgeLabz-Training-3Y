"use strict";

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Synchronous statements execute first.
// Promise.then queues a microtask.
// setTimeout queues a macrotask.
// Microtasks are processed before the next timer task.