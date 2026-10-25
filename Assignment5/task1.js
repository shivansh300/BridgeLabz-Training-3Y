"use strict";

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Execute the callback after greeting the user.
    callback();
}

greetUser("Amit", showEndMessage);