"use strict";

Array.prototype.myMap = function (callback, thisArg) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        // Skip empty slots, just like the built-in map().
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubled = numbers.myMap(num => num * 2);
const squared = numbers.myMap(num => num * num);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubled);
console.log("Squared Array:", squared);